import React from 'react';
import { Cell, CellGroup, Popup } from 'vantr';
import './basic.less';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <CellGroup inset>
        <Cell onClick={() => setVisible(true)} arrow>
          指定挂载节点
        </Cell>
      </CellGroup>
      <Popup
        visible={visible}
        onClose={() => setVisible(false)}
        style={{ height: '30%' }}
        position="bottom"
        container="body"
      />
    </>
  );
};
