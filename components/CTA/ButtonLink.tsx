import React from 'react';
import logo from '../../renderer/share.svg';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

const ButtonLink = (props: { text: string; linkUrl: string }) => {
  return (
    <div className="m-8 flex justify-center">
      <a href={props.linkUrl} className="">
        <button className="flex flex-row justify-center al shadow-md rounded-full bg-brandSecondary-500 text-textPrimary-300 font-normal text-lg w-80 h-11 py-2 text-center sm:text-sm">
          {props.text}
          <ArrowTopRightOnSquareIcon className="h-7 w-7 p-1"/>
        </button>
      </a>
    </div>
  );
};

export default ButtonLink;
