import React from 'react';
import { Icon, Button } from 'vantr';
import { Plus } from '@icon-park/react';

export default () => {
  return (
    <>
      <Button type="primary" shape="square">
        方形按钮
      </Button>
      <Button type="success" shape="round">
        胶囊按钮
      </Button>
      <Button
        type="warning"
        shape="circle"
        icon={
          <Icon>
            <Plus />
          </Icon>
        }
      ></Button>
    </>
  );
};
