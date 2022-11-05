import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

const ComponentPageLayout = (props: Props) => {
  return (
    <><Outlet /></>
  );
};

export default ComponentPageLayout;