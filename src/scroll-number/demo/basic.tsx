import * as React from 'react';
import { ScrollNumber } from 'vantr';
import './basic.less';

export default () => {
  const timer = React.useRef<NodeJS.Timeout>();
  const [value, setValue] = React.useState(20);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      setValue(Math.round(Math.random() * 999));
    }, 1000);
    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, []);

  return (
    <>
      <div className="demo-scroll-number-wrapper">
        <ScrollNumber count={value} />
      </div>
    </>
  );
};
