import React from 'react';


const Hero = (props: { headline: string; body: string; buttonUrl: string; buttonText: string; secondButtonText: string; secondButtonUrl: string; }) => {
  return (
    <>
      <div className="h-full bg-gradient-to-t from-brandPrimary-600 to-brandPrimary-900 px-0 pt-32 mx-auto mt-px text-center md:max-w-none ">
            <h1 className="text-5xl font-bold leading-none tracking-tight text-center text-indigo-50 md:text-center "><span className="inline md:block">{props.headline}</span> </h1>
            <div className=" mx-auto mt-5 px-20 text-lg text-indigo-200 md:mt-8 text-center sm:text-sm">{props.body}</div>
            <div className="flex flex-col justify-center items-center mt-8 px-24 text-center md:flex-row">
                <span className="relative inline-flex w-full md:w-auto ">
                    <a href={props.buttonUrl} type="button" className=" inline-flex items-center justify-center w-full px-8 py-4 text-lg font-medium leading-6 text-textPrimary-400 bg-brandSecondary-500 border border-transparent rounded-md md:w-auto hover:bg-brandSecondary-300 hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:text-sm">
                    {props.buttonText}
                    </a>
                    <span className="absolute  top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">only $15/mo</span>
                </span>
                <p className='m-4 text-indigo-200 font-semibold'>or</p>
                <a href={props.secondButtonUrl} className=" inline-flex items-center justify-center w-full px-8 py-4 text-lg font-medium leading-6 text-brandPrimary-600 bg-white border border-transparent rounded-md md:w-auto hover:bg-brandPrimary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:text-sm">{props.secondButtonText}</a>
            </div>
            <div className='flex flex-row justify-center mx-auto '>
            <iframe  src='https://my.spline.design/interactivespherescopycopy-5fc84d81ee987d92a4ef5bb22e85a7d7/'  width='640px' height='600px'></iframe>
            </div>
        </div>
        
    </>
  );
};

export default Hero;
