import React from 'react';
import ConnectedApp from '.';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Root;
