import React from 'react';
import { Button } from 'vantr';
import { Plus } from '@icon-park/react';

export default () => {
  return (
    <>
      <Button icon={<Plus />} type="primary" />
      <Button icon={<Plus />} type="primary">
        按钮
      </Button>
    </>
  );
};
