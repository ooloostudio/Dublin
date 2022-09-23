import React from 'react';


const wave = () => {
  return (
    <>
    <div className='-mt-32 bg-transparent sm:-mt-40 md:-mt-56 lg:-mt-64 xl:-mt-[22rem]  2xl:-mt-[30rem] 3xl:-mt-[36rem]'>
          <svg className="waves relative w-full h-full -mt-2 " xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 24 150 28" preserveAspectRatio="none" >
          <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
            <g className="calm-sea">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
          <svg className='relative w-full h-full bg-white'  viewBox="0 0 650 80" xmlns="http://www.w3.org/2000/svg" >
              <rect className='relative w-full h-28' fill="white"/>
          </svg>
      </div>
    </>
  );
};

export default wave;
