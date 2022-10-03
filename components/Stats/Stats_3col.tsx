import React from 'react';

const Stats_3col = () => {
    return (
      <>
    <div className="bg-surface-100 w-full rounded-lg shadow-lg">
        <div className="container mx-auto flex flex-col gap-4 md:flex-row">

            <div className="relative flex flex-col items-center justify-between px-8 py-12 overflow-hidden" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <h4 className=" text-3xl font-bold text-brandPrimary-900">115K</h4>
                <p className=" text-sm text-center text-textPrimary-300 font-bold">Learners Worldwide</p> 
                <p className="text-sm text-center text-textPrimary-200">Join our rapidly growing global community</p>    
            </div>

            <div className="relative flex flex-col items-center justify-between px-8 py-12 overflow-hidden" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <h4 className=" text-3xl font-bold text-brandPrimary-900">140+</h4>
                <p className=" text-sm text-center text-textPrimary-300 font-bold">Training Courses</p> 
                <p className="text-sm text-center text-textPrimary-200">Learn in-demand skills from expert educators</p>    
            </div>

            <div className="relative flex flex-col items-center justify-between px-8 py-12 overflow-hidden" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <h4 className="text-3xl font-bold text-brandPrimary-900">50+</h4>
                <p className="text-sm text-center text-textPrimary-300 font-bold">Certifications</p> 
                <p className="text-sm text-center text-textPrimary-200">Get ahead and prove your skills to current and future employers</p>    
            </div>

        </div>
    </div>
    </>
  );
};

export default Stats_3col;
