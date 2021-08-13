import { CloseOne } from '@icon-park/react';
import React from 'react';
import { Icon, Cell, CellGroup, Popup, PopupProps } from 'vantr';

const CLOSE: Array<{
  value: string;
  label: string;
  props?: PopupProps;
}> = [
  {
    value: 'basic',
    label: '关闭图标',
  },
  {
    value: 'custom',
    label: '自定义图标',
    props: {
      closeIcon: (
        <Icon>
          <CloseOne />
        </Icon>
      ),
    },
  },
  {
    value: 'position',
    label: '图标位置',
    props: { closeIconPosition: 'top-left' },
  },
];

export default () => {
  const [visible, setVisible] = React.useState<Record<string, boolean>>({
    basic: false,
    custom: false,
    position: false,
  });

  const changeVisible = (type: string) => {
    setVisible({
      ...visible,
      [type]: !visible[type],
    });
  };

  return (
    <>
      <CellGroup inset>
        {CLOSE.map(({ value, label, props }) => (
          <React.Fragment key={value}>
            <Cell onClick={() => changeVisible(value)} arrow>
              {label}
            </Cell>
            <Popup
              {...props}
              visible={visible[value]}
              position="bottom"
              onClose={() => changeVisible(value)}
              style={{
                height: '30%',
              }}
              closeable
            />
          </React.Fragment>
        ))}
      </CellGroup>
    </>
  );
};
