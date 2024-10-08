"""migration 3

Revision ID: 054c68b67593
Revises: d6b6d31c786d
Create Date: 2024-09-25 14:37:54.855271

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '054c68b67593'
down_revision: Union[str, None] = 'd6b6d31c786d'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('auctions', sa.Column('nft_id', sa.Integer(), nullable=False))
    op.add_column('auctions', sa.Column('seller_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'auctions', 'nfts', ['nft_id'], ['id'])
    op.create_foreign_key(None, 'auctions', 'users', ['seller_id'], ['id'])
    op.add_column('collections', sa.Column('owner_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'collections', 'users', ['owner_id'], ['id'])
    op.add_column('nfts', sa.Column('owner_id', sa.Integer(), nullable=True))
    op.add_column('nfts', sa.Column('collection_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'nfts', 'collections', ['collection_id'], ['id'])
    op.create_foreign_key(None, 'nfts', 'users', ['owner_id'], ['id'])
    op.add_column('users', sa.Column('profile_nft_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'users', 'nfts', ['profile_nft_id'], ['id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.drop_column('users', 'profile_nft_id')
    op.drop_constraint(None, 'nfts', type_='foreignkey')
    op.drop_constraint(None, 'nfts', type_='foreignkey')
    op.drop_column('nfts', 'collection_id')
    op.drop_column('nfts', 'owner_id')
    op.drop_constraint(None, 'collections', type_='foreignkey')
    op.drop_column('collections', 'owner_id')
    op.drop_constraint(None, 'auctions', type_='foreignkey')
    op.drop_constraint(None, 'auctions', type_='foreignkey')
    op.drop_column('auctions', 'seller_id')
    op.drop_column('auctions', 'nft_id')
    # ### end Alembic commands ###
