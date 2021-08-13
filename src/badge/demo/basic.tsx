import * as React from 'react';
import { Badge } from 'vantr';

export default () => {
  return (
    <div className="demo-badge">
      <Badge count={5}>
        <div className="demo-badge-block" />
      </Badge>
      <Badge count={10}>
        <div className="demo-badge-block" />
      </Badge>
      <Badge count="hot">
        <div className="demo-badge-block" />
      </Badge>
      <Badge dot>
        <div className="demo-badge-block" />
      </Badge>
    </div>
  );
};
