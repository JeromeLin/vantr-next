import React from 'react';
import { Icon } from 'vantr';
import { Camera } from '@icon-park/react';

export default () => {
  return (
    <>
      <Icon theme="outline" fill="#07c160">
        <Camera />
      </Icon>
      <Icon theme="filled" fill="#07c160">
        <Camera />
      </Icon>
      <Icon theme="two-tone" fill={['#333', '#07c160']}>
        <Camera />
      </Icon>
      <Icon theme="multi-color" fill={['#333', '#07c160', '#FFF', '#43CCF8']}>
        <Camera />
      </Icon>
    </>
  );
};
