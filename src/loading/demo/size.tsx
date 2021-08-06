import React from 'react';
import { Loading } from 'vantr';

export default () => {
  return (
    <>
      <div>
        <Loading size="lg" />
        <Loading />
        <Loading size="sm" />
        <Loading size="xs" />
      </div>
      <Loading type="spinner" size="lg" />
      <Loading type="spinner" />
      <Loading type="spinner" size="sm" />
      <Loading type="spinner" size="xs" />
    </>
  );
};
