import React from 'react';
import { Cell, CellGroup, Popup, PopupPosition } from 'vantr';

const POSITIONS: Array<{
  value: PopupPosition;
  label: string;
  style: React.CSSProperties;
}> = [
  {
    value: 'top',
    label: '顶部弹出',
    style: { height: '30%' },
  },
  {
    value: 'bottom',
    label: '底部弹出',
    style: { height: '30%' },
  },
  {
    value: 'left',
    label: '左侧弹出',
    style: { width: '30%', height: '100%' },
  },
  {
    value: 'right',
    label: '右侧弹出',
    style: { width: '30%', height: '100%' },
  },
];

export default () => {
  const [visible, setVisible] = React.useState<Record<string, boolean>>({
    top: false,
    bottom: false,
    left: false,
    right: false,
  });

  const changeVisible = (position: PopupPosition) => {
    setVisible({
      ...visible,
      [position]: !visible[position],
    });
  };

  return (
    <>
      <CellGroup inset>
        {POSITIONS.map(({ value, label, style }) => (
          <Cell key={value} onClick={() => changeVisible(value)} arrow>
            {label}
            <Popup
              visible={visible[value]}
              position={value}
              onClose={() => changeVisible(value)}
              style={style}
            />
          </Cell>
        ))}
      </CellGroup>
    </>
  );
};
