import React from 'react';
import logo from '../../renderer/logo.svg';

const Logo = (props: { size: string }) => {
  let logoElement;
  if (props.size === 'large') {
    logoElement = (
      <a href="/">
        <img src={logo} className="h-14" />
      </a>
    );
  } else if (props.size === 'small') {
    logoElement = (
      <a href="/">
        <img src={logo} className="h-8 w-8" />
      </a>
    );
  } else {
    logoElement = (
      <a href="/">
        <img src={logo} className="h-16 w-16" />
      </a>
    );
  }

  return <>{logoElement}</>;
};

export default Logo;
