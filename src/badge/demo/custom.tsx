import { Check, Close, Down } from '@icon-park/react';
import * as React from 'react';
import { Icon, IconProps, Badge } from 'vantr';

const props: IconProps = {
  size: 'xs',
  style: {
    color: '#f5222d',
  },
};

export default () => {
  return (
    <div className="demo-badge">
      <Badge
        count={
          <Icon {...props}>
            <Check />
          </Icon>
        }
      >
        <div className="demo-badge-block" />
      </Badge>
      <Badge
        count={
          <Icon {...props}>
            <Close />
          </Icon>
        }
      >
        <div className="demo-badge-block" />
      </Badge>
      <Badge
        count={
          <Icon {...props}>
            <Down />
          </Icon>
        }
      >
        <div className="demo-badge-block" />
      </Badge>
    </div>
  );
};
