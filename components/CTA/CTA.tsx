import React from 'react';
import shield from '../../renderer/assets/Shields.png';

const CTA = (props: { headline: string; body: string; buttonUrl: string; buttonText: string }) => {
  return (
    <div className="container flex bg-gradient-to-t from-slate-700 to-slate-900 rounded-2xl p-16">
     <div className="flex flex-col">
        <div className=" text-brandPrimary-300 text-xl font-bold py-4 sm:text-3xl">{props.headline}</div>
        <div className=" text-gray-300 text-lg font-light leading-relaxed sm:text-sm">{props.body}</div>
        <a href={props.buttonUrl}>
          <button className="inline-flex items-center justify-center w-full px-8 py-4 my-8 text-lg font-medium leading-6 text-textPrimary-400 bg-brandSecondary-500 border border-transparent rounded-md md:w-auto hover:bg-brandSecondary-300 hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:text-sm">
            {props.buttonText}
          </button>
        </a>
      </div>
      <div className="flex flex-col">
        
      </div>

    </div>
  );
};

export default CTA;
