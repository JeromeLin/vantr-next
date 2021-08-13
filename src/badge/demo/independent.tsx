import * as React from 'react';
import { Badge } from 'vantr';

export default () => {
  return (
    <div className="demo-badge">
      <Badge count={20} />
      <Badge count={200} overflowCount={99} color="#52c41a" />
    </div>
  );
};
