import React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button type="primary" size="lg">
        大号按钮
      </Button>
      <Button type="primary">普通按钮</Button>
      <Button type="primary" size="sm">
        小型按钮
      </Button>
      <Button type="primary" size="xs">
        迷你按钮
      </Button>
    </>
  );
};
