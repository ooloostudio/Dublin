import React from 'react';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import Avatar from '../Avatar/Avatar';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { CurrentUser } from '../../types';

export default function CurrentUserNavBar() {
  const [navbar, setNavbar] = useState(false);


  return (
    <nav className="w-full bg-transparent mx-auto block font-sans">
      <div className="w-full py-5 flex items-center justify-between px-8 fixed z-40 mx-auto">
        {/* logo */}
        <Logo size="" />
        <button id="icon" type="submit" className="block" onClick={() => setNavbar(!navbar)}>
              <div className="flex items-center -space-x-2">
                <Avatar size="" />
                <Bars3CenterLeftIcon className="h-10 w-10 rounded-full p-2 text-brandPrimary-50 bg-brandPrimary-900 border border-brandPrimary-600"/>
                
              </div>
        </button>
      </div>
      {/*full screen menu */}
      <div
        className={`${
          navbar ? 'block' : 'hidden'
        } z-50 fixed transition-opacity right-0 px-8 py-5 w-full h-full bg-brandPrimary-900 text-brandPrimary-50`}
      >
        <div className="flex w-full justify-between   pb-12">
        <Logo size="" />
        <button id="icon" type="submit" className="block" onClick={() => setNavbar(!navbar)}>
              <div className=" space-x-3 mr-3">
                
                <XCircleIcon className="h-10 w-10 rounded-full  bg-brandPrimary-600"/>
               
              
              </div>
          </button>
          </div>
          <ul className="flex-col px-2">
            <a href="/catalog">
              <li className="text-2xl font-bold p-8 py-4 rounded-md hover:bg-brandPrimary-600">
                Explore Full Catalog
              </li>
            </a>
            <a href="/catalog">
              <li className="text-2xl font-bold p-8 py-4 rounded-md hover:bg-brandPrimary-600">
                  Certifications
              </li>
            </a>
            <a href="/support">
              <li className="text-2xl font-bold p-8 py-4 rounded-md hover:bg-brandPrimary-600">
                Help Support
              </li>
            </a>
 
            <hr className=' border-brandPrimary-600 my-4'></hr>
            <div className="flex flex-row space-x-2">
              <div className=' pt-6'>
                <Avatar size="" />
              </div>  
              <div className="flex flex-col w-full">            
                <a href="/dashboard">
                  <li className="text-2xl font-bold p-8 py-4 rounded-md hover:bg-brandPrimary-600">
                  My Dashboard
                  </li>
                </a>
                <a href="/transcript">
                  <li className="text-2xl font-bold p-8  py-4 rounded-md hover:bg-brandPrimary-600">
                    My Transcript
                  </li>
                </a>
                <a href="/signout">
                  <li className="text-2xl font-bold p-8  py-4 rounded-md hover:bg-brandPrimary-600">
                    Edit my Profile
                  </li>
                </a>
                <a href="/signout">
                  <li className="text-lg font-light p-8  py-4 rounded-md hover:bg-brandPrimary-600">
                    Sign out
                  </li>
                </a>

              </div>
            </div>  

          </ul>
        
      </div>
    </nav>
  );
}
