import React from 'react';
import { Button } from 'vantr';

export default () => {
  return (
    <>
      <Button type="primary" loading />
      <Button type="primary" loading loadingType="spinner" />
      <Button type="primary" loading loadingText="加载中..." />
    </>
  );
};
