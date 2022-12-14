import { CatalogProps, CatalogProvider, CatalogResultsProps } from '@thoughtindustries/catalog';
import React, { FC, useMemo } from 'react';
import { usePageContext } from '../../renderer/usePageContext';
import CatalogResults from '../CatalogAndAggreg/CatalogResultsHP';

interface CatalogResultsWithLimitProps extends CatalogResultsProps {
  /** number of items to return */
  numberOfContentItems?: number;
}

const FeaturedContentComp: FC<CatalogResultsWithLimitProps> = ({
  ...restResultsProps
}: CatalogProps): JSX.Element => {
  const pageContext = usePageContext();
  const {
    urlParsed: { pathname, searchString }
  } = pageContext;
  const config = useMemo(
    () => ({
      parsedUrl: {
        pathname,
        searchString
      }
    }),
    [pathname, searchString]
  );
  return (
    <section id="featuredcomp" className="bg-slate-50 py-24 px-12">
      <div className="">
        <h2 className="text-3xl font-extralight text-center text-slate-800 sm:text-xl">Featured Courses</h2>
        
        <div className="grid md:grid-cols-3 grid-cols-1 py-24 px-12 md:px-20 ">
          <div className="col-span-3">
            <CatalogProvider config={config}>
              <CatalogResults {...restResultsProps} />
            </CatalogProvider>
          </div>
        </div>
      </div>
      <a href="/catalog">
        <button className="flex mt-4 mb-10 bg-brandPrimary-900 text-white font-bold py-3 px-5 rounded mx-auto">
          View Full Catalog
        </button>
      </a>
    </section>
  );
};

export default FeaturedContentComp;
