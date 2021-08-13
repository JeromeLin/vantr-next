import * as React from 'react';
import { Badge } from 'vantr';

export default () => {
  return (
    <div className="demo-badge">
      <Badge count={5} color="#1989fa">
        <div className="demo-badge-block" />
      </Badge>
      <Badge count={10} color="#1989fa">
        <div className="demo-badge-block" />
      </Badge>
      <Badge color="#1989fa" dot>
        <div className="demo-badge-block" />
      </Badge>
    </div>
  );
};
