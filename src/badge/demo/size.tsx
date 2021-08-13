import * as React from 'react';
import { Badge } from 'vantr';

export default () => {
  return (
    <div className="demo-badge">
      <Badge count={10} size="large">
        <div className="demo-badge-block" />
      </Badge>
      <Badge count={10}>
        <div className="demo-badge-block" />
      </Badge>
    </div>
  );
};
