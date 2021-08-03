import React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button type="primary" shape="square">
        方形按钮
      </Button>
      <Button type="success" shape="round">
        圆形按钮
      </Button>
    </>
  );
};
