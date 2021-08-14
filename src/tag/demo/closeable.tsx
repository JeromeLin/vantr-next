import * as React from 'react';
import { Tag, Cell } from 'vantr';

export default () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <>
      <Cell
        extra={
          <Tag
            type="primary"
            visible={visible}
            onClose={() => setVisible(false)}
            closeable
          >
            标签
          </Tag>
        }
      >
        {visible ? (
          '可关闭标签'
        ) : (
          <span onClick={() => setVisible(true)}>点击显示标签</span>
        )}
      </Cell>
    </>
  );
};
