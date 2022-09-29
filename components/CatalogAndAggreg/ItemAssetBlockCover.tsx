import React from 'react';
import clsx from 'clsx';

interface ItemAssetBlockProps {
  asset?: string;
  classNames?: string;
}

const ItemAssetBlock = ({ asset, classNames = '' }: ItemAssetBlockProps): JSX.Element => (
  <img
    className={clsx(['w-full h-full object-cover rounded-md hover:mix-blend-overlay', classNames])}
    src={
      asset ||
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png'
    }
  />
);

ItemAssetBlock.displayName = 'ItemAssetBlock';

export default ItemAssetBlock;
