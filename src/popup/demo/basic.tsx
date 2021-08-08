import React from 'react';
import { Cell, CellGroup, Popup } from 'vantr';
import './basic.less';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <CellGroup inset>
        <Cell onClick={() => setVisible(true)} arrow>
          展示弹出层
        </Cell>
      </CellGroup>
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <div className="demo-popup-wrapper">
          <div className="demo-popup-block" />
        </div>
      </Popup>
    </>
  );
};
