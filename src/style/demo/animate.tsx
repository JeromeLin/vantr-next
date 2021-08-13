import * as React from 'react';
import classnames from 'classnames';
import CSSMotion from 'rc-motion';
import { Cell, CellGroup } from 'vantr';
import './animate.less';

const ANIMATES = [
  { value: 'vanr-fade', label: 'Fade' },
  { value: 'vanr-slide-up', label: 'Slide Up' },
  { value: 'vanr-slide-down', label: 'Slide Down' },
  { value: 'vanr-slide-left', label: 'Slide Left' },
  { value: 'vanr-slide-right', label: 'Slide Right' },
  { value: 'vanr-move-up', label: 'Move Up' },
  { value: 'vanr-move-down', label: 'Move Down' },
  { value: 'vanr-move-left', label: 'Move Left' },
  { value: 'vanr-move-right', label: 'Move Right' },
  // { value: 'vanr-zoom', label: 'Zoom' },
  // { value: 'vanr-zoom-up', label: 'Zoom Up' },
  // { value: 'vanr-zoom-down', label: 'Zoom Down' },
  // { value: 'vanr-zoom-left', label: 'Zoom Left' },
  // { value: 'vanr-zoom-right', label: 'Zoom Right' },
  // { value: 'vanr-zoom-big', label: 'Zoom Big' },
  // { value: 'vanr-zoom-big-fast', label: 'Zoom Big Fast' },
];

export default () => {
  const timer = React.useRef<NodeJS.Timeout>();
  const [state, setState] = React.useState({ visible: false, motionName: '' });

  const animate = (motionName: string) => {
    setState({ visible: true, motionName });
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setState({ ...state, visible: false });
    }, 500);

    return () => {
      timer.current && clearTimeout(timer.current);
    };
  };

  return (
    <>
      <CellGroup inset>
        {ANIMATES.map(({ value, label }) => (
          <Cell key={value} onClick={() => animate(value)}>
            {label}
          </Cell>
        ))}
      </CellGroup>
      <CSSMotion visible={state.visible} motionName={state.motionName}>
        {({ className, style }) => (
          <div
            className={classnames('demo-style-animate', className)}
            style={style}
          />
        )}
      </CSSMotion>
    </>
  );
};
