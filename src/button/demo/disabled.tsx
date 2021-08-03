import React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button type="primary" disabled>
        禁用状态
      </Button>
      <Button type="success" disabled>
        禁用状态
      </Button>
    </>
  );
};
