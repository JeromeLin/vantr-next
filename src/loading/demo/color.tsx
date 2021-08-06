import React from 'react';
import { Loading } from 'vantr';

export default () => {
  return (
    <>
      <Loading color="#1989fa" vertical>
        加载中...
      </Loading>
      <Loading type="spinner" color="#1989fa" vertical>
        加载中...
      </Loading>
    </>
  );
};
