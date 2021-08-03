import React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button type="primary" size="large">
        大号按钮
      </Button>
      <Button type="primary">普通按钮</Button>
      <Button type="primary" size="small">
        小型按钮
      </Button>
      <Button type="primary" size="mini">
        迷你按钮
      </Button>
    </>
  );
};
