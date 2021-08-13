import * as React from 'react';
import { Badge } from 'vantr';

export default () => {
  const timer = React.useRef<NodeJS.Timeout>();
  const [value, setValue] = React.useState(20);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      setValue(Math.round(Math.random() * 99));
    }, 1000);
    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="demo-badge">
      <Badge count={value}>
        <div className="demo-badge-block" />
      </Badge>
    </div>
  );
};
