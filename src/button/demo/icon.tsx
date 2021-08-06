import React from 'react';
import { Icon, Button } from 'vantr';
import { Plus } from '@icon-park/react';

export default () => {
  return (
    <>
      <Button
        icon={
          <Icon>
            <Plus />
          </Icon>
        }
        type="primary"
      />
      <Button
        icon={
          <Icon>
            <Plus />
          </Icon>
        }
        type="primary"
      >
        按钮
      </Button>
    </>
  );
};
