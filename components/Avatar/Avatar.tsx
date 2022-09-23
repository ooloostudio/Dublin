import React, { useState } from 'react';
import { usePageContext } from '../../renderer/usePageContext';

const Avatar = (props: { size: string }) => {
  const pageContext = usePageContext();
  const { currentUser } = pageContext;

  let avatarSize;
  if (props.size === 'large') {
    avatarSize = avatarSize = 'h-13';
  } else if (props.size === 'small') {
    avatarSize = avatarSize = 'h-9';
  } else {
    avatarSize = 'h-10';
  }

  let snippet;

  // if currentUser.asset
  if (currentUser?.asset) {
    // return the users avatar
    snippet = <img src={currentUser?.asset} className={`${avatarSize} rounded-full`} />;
  } else {
    // return the initals
    const userInitials = currentUser?.firstName?.split('')[0] + currentUser?.lastName?.split('')[0];
    snippet = (
      <div className={`${avatarSize} bg-surface-200 rounded-full font-light border border-border-200`}>
        <div className="h-10 w-10 flex justify-center items-center">{userInitials}</div>
      </div>
    );
  }
  return snippet;
};

export default Avatar;
