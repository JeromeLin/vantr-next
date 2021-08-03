import React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button color="#7232dd">单色按钮</Button>
      <Button color="#7232dd" plain>
        单色按钮
      </Button>
      <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变色按钮
      </Button>
    </>
  );
};
