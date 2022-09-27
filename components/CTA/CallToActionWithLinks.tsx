import React from 'react';
import ButtonLink from './ButtonLink';

const CallToActionWithLinks = (props: {
  headline: string;
  description: string;
  links: {
    text: string;
    linkUrl: string;
  }[];
}) => {
  const linkEl = props.links.map((link, i) => (
    <div key={i} className="flex-[1_1_50%]">
      <ButtonLink key={link.text} text={link.text} linkUrl={link.linkUrl} />
    </div>
  ));

  return (
    <div className="flex bg-slate-800 flex-col px-20 py-24 items-center text-center text-slate-200">
      <div className="container text-5xl font-bold leading-normal mx-auto sm:text-xl">{props.headline}</div>
      <div className="text-slate-400 text-xl font-normal mx-5 sm:text-sm">{props.description}</div>
      <div className="flex flex-wrap px-28">{linkEl}</div>
    </div>
  );
};

export default CallToActionWithLinks;
