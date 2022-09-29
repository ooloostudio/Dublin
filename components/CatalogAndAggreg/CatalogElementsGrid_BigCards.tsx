import React from 'react';
import {
  CatalogParams,
  HeightEqualizer,
  HeightEqualizerElement,
  HeightEqualizerElementProps
} from '@thoughtindustries/catalog/src/core';
import {
  CatalogResultItem,
  CatalogResultsProps,
  PriceFormatFn
} from '@thoughtindustries/catalog/src/types';
import ItemLinkWrapper from '@thoughtindustries/catalog/src/variants/display-type-results/item-link-wrapper';
import ItemAssetBlock from './ItemAssetBlockCover';
import ItemRibbon from '@thoughtindustries/catalog/src/variants/display-type-results/item-ribbon';
import clsx from 'clsx';
import { limitText } from '@thoughtindustries/catalog/src/variants/display-type-results/utilities';

type DisplayTypeResultsGridProps = Pick<CatalogResultsProps, 'onClick' | 'onAddedToQueue'> &
  Pick<CatalogParams, 'displayAuthorsEnabled' | 'displayStartDateEnabled' | 'displayBundle'> & {
    items: CatalogResultItem[];
    priceFormatFn: PriceFormatFn;
    numberOfContentItems: number;
  };

type DisplayTypeResultsGridItemProps = Omit<DisplayTypeResultsGridProps, 'items'> & {
  item: CatalogResultItem;
};

const HeightEqualizerElementWrapper = ({
  className,
  children,
  ...restProps
}: HeightEqualizerElementProps) => {
  // stylings
  const baseClassnames = 'overflow-hidden block transition-all';
  return (
    <HeightEqualizerElement className={clsx(className, baseClassnames)} {...restProps}>
      {children}
    </HeightEqualizerElement>
  );
};

const ItemTitleBlock = ({ title }: { title: string }) => (
  <div className="font-bold text-4xl leading-tight sm:text-2xl md:text-xl">{title}</div>
);

const ItemSourceBlock = ({
  contentTypeLabel,
  courseStartDate
}: {
  contentTypeLabel?: string;
  courseStartDate?: string;
}) => (
  <HeightEqualizerElementWrapper name="source" className="text-sm text-gray-500">
    <p>
      {courseStartDate && (
        <span className="flex text-md text-gray-500 ">{contentTypeLabel}</span>
      )}
    </p>
  </HeightEqualizerElementWrapper>
);

const ItemCtaBlock = ({
  isActive,
  callToAction
}: {
  isActive?: boolean;
  callToAction?: string;
}) => {
  if (isActive) {
    return (
      <span className="border-none text-brandPrimary-600 cursor-pointer inline-block text-sm font-light leading-normal  no-underline">
        {callToAction}
      </span>
    );
  }

  return <span className="text-xs">{callToAction}</span>;
};

const DisplayTypeResultsGridItem = ({
  onClick,
  displayStartDateEnabled,
  item
}: DisplayTypeResultsGridItemProps): JSX.Element => {
  const {
    asset,
    title,
    description,
    isActive,
    ribbon,
    courseStartDate,
    contentTypeLabel,
    callToAction,
    timeZone
  } = item;

  // derived values
  const displayCourseStartDate = displayStartDateEnabled ? courseStartDate : undefined;

  return (
    <li>
      <>
        <ItemLinkWrapper item={item} onClick={onClick}>
          <div className="grid grid-cols-1 relative h-[30rem]">
            <div className="bg-white rounded-md drop-shadow-md hover:drop-shadow-2xl">
              {ribbon && <ItemRibbon ribbon={ribbon} attached attachedClassnames="-top-1" />}

              <div className="absolute h-full -z-10">
                <ItemAssetBlock asset={asset} />
              </div>

              <div className="h-full flex flex-col justify-end  rounded-md">
                <div className='bg-gradient-to-t from-surface-300 via-surface-100 p-8 rounded-md'>
                  {title && (
                    <ItemTitleBlock
                      title={title}
                      courseStartDate={displayCourseStartDate}
                      timeZone={timeZone}
                      contentTypeLabel={contentTypeLabel}
                    />
                  )}

                  <div className="text-lg font-light text-textPrimary-200 sm:text-base md:text-sm">
                    {description && limitText(description, 65)}
                  </div>
                  
                  <div className="text-base leading-none py-2">
                    <ItemCtaBlock isActive={isActive} callToAction={callToAction} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ItemLinkWrapper>
      </>
    </li>
  );
};

const DisplayTypeResultsGrid = ({
  items,
  ...restProps
}: DisplayTypeResultsGridProps): JSX.Element => {
  let contentItems;
  if (restProps.numberOfContentItems) {
    contentItems = items
      .slice(0, restProps.numberOfContentItems)
      .filter(({ isNotCompleted }) => !isNotCompleted)
      .map((item, index) => (
        <DisplayTypeResultsGridItem key={`result-item-${index}`} item={item} {...restProps} />
      ));
  } else {
    contentItems = items
      .filter(({ isNotCompleted }) => !isNotCompleted)
      .map((item, index) => (
        <DisplayTypeResultsGridItem key={`result-item-${index}`} item={item} {...restProps} />
      ));
  }

  return (
    <HeightEqualizer>
      <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">{contentItems}</ul>
    </HeightEqualizer>
  );
};

DisplayTypeResultsGrid.displayName = 'DisplayTypeResultsGrid';
export default DisplayTypeResultsGrid;
