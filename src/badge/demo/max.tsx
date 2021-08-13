import * as React from 'react';
import { Badge } from 'vantr';

export default () => {
  return (
    <div className="demo-badge">
      <Badge count={20} overflowCount={9}>
        <div className="demo-badge-block" />
      </Badge>
      <Badge count={50} overflowCount={20}>
        <div className="demo-badge-block" />
      </Badge>
      <Badge count={200} overflowCount={99}>
        <div className="demo-badge-block" />
      </Badge>
    </div>
  );
};
