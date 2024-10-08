// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

import { ERC721Holder } from "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import { ERC1155Holder, ERC1155Receiver } from "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

import { BaseRouter, IRouter, IRouterState } from "@thirdweb-dev/dynamic-contracts/src/presets/BaseRouter.sol";
import { ERC165 } from "/eip/ERC165.sol";

import "extension/Multicall.sol";
import "extension/Initializable.sol";
import "extension/ContractMetadata.sol";
import "extension/PlatformFee.sol";
import "extension/PermissionsEnumerable.sol";
import "extension/ReentrancyGuardInit.sol";

contract Marketplace is
    Initializable,
    Multicall,
    BaseRouter,
    ContractMetadata,
    PlatformFee,
    PermissionsEnumerable,
    ReentrancyGuardInit,
    ERC721Holder,
    ERC1155Holder,
    ERC165
{
    bytes32 private constant EXTENSION_ROLE = keccak256("EXTENSION_ROLE");

    bytes32 private constant MODULE_TYPE = bytes32("MarketplaceV3");
    uint256 private constant VERSION = 3;

    address private immutable nativeTokenWrapper;

    struct MarketplaceConstructorParams {
        Extension[] extensions;
        address royaltyEngineAddress;
        address nativeTokenWrapper;
    }

    constructor(
        MarketplaceConstructorParams memory _marketplaceV3Params
    ) BaseRouter(_marketplaceV3Params.extensions) RoyaltyPaymentsLogic(_marketplaceV3Params.royaltyEngineAddress) {
        nativeTokenWrapper = _marketplaceV3Params.nativeTokenWrapper;
        _disableInitializers();
    }

    receive() external payable {
        assert(msg.sender == nativeTokenWrapper);
    }

    function initialize(
        address _defaultAdmin,
        string memory _contractURI,
        address[] memory _trustedForwarders,
        address _platformFeeRecipient,
        uint16 _platformFeeBps
    ) external initializer {
        __BaseRouter_init();
        __ReentrancyGuard_init();
        _setupContractURI(_contractURI);
        _setupPlatformFeeInfo(_platformFeeRecipient, _platformFeeBps);
        _setupRole(DEFAULT_ADMIN_ROLE, _defaultAdmin);
        _setupRole(EXTENSION_ROLE, _defaultAdmin);
        _setupRole(keccak256("LISTER_ROLE"), address(0));
        _setupRole(keccak256("ASSET_ROLE"), address(0));
        _setupRole(EXTENSION_ROLE, _defaultAdmin);
        _setRoleAdmin(EXTENSION_ROLE, EXTENSION_ROLE);
    }

    function contractType() external pure returns (bytes32) {
        return MODULE_TYPE;
    }

    function contractVersion() external pure returns (uint8) {
        return uint8(VERSION);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(ERC165, IERC165, ERC1155Receiver) returns (bool) {
        return
            interfaceId == type(IERC1155Receiver).interfaceId ||
            interfaceId == type(IERC721Receiver).interfaceId ||
            interfaceId == type(IRouter).interfaceId ||
            interfaceId == type(IRouterState).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    function _canSetPlatformFeeInfo() internal view override returns (bool) {
        return _hasRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function _canSetContractURI() internal view override returns (bool) {
        return _hasRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function _hasRole(bytes32 _role, address _account) internal view returns (bool) {
        PermissionsStorage.Data storage data = PermissionsStorage.data();
        return data._hasRole[_role][_account];
    }

    function _isAuthorizedCallToUpgrade() internal view virtual override returns (bool) {
        return _hasRole(EXTENSION_ROLE, msg.sender);
    }
}
