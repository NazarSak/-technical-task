import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/navigation/Navigation';

export const Layout = () => {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
