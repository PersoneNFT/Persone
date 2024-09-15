interface CategoryProps {
    id: number;
    name: string;
    isSelected: boolean;
}

export const category: CategoryProps[] = [
    {
        id: 1,
        name: "Art",
        isSelected: false,
    },
    {
        id: 2,
        name: "Music",
        isSelected: false,
    },
    {
        id: 3,
        name: "Domain Names",
        isSelected: false,
    },
    {
        id: 4,
        name: "Domain Names",
        isSelected: false,
    },
    {
        id: 5,
        name: "Virtual Worlds",
        isSelected: false,
    },
    {
        id: 6,
        name: "Trading Cards",
        isSelected: false,
    },
    {
        id: 7,
        name: "Collectibles",
        isSelected: false,
    },
    {
        id: 8,
        name: "Sports",
        isSelected: false,
    },
    {
        id: 9,
        name: "Utility",
        isSelected: false,
    },
];

interface FileTypeProps {
    id: number;
    name: string;
    isSelected: boolean;
}

export const fileType: FileTypeProps[] = [
    {
        id: 1,
        name: "Image",
        isSelected: false,
    },
    {
        id: 2,
        name: "Video",
        isSelected: false,
    },
    {
        id: 3,
        name: "Audio",
        isSelected: false,
    },
];

interface CurrenciesTypeProps {
    id: number;
    name: string;
    isSelected: boolean;
}

export const currencies: CurrenciesTypeProps[] = [
    {
        id: 1,
        name: "BNB",
        isSelected: false,
    },
    {
        id: 2,
        name: "BUSD",
        isSelected: false,
    },
    {
        id: 3,
        name: "ETH",
        isSelected: false,
    },
];
