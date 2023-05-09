import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/navigation/Navigation';
import styles from "./layout.module.css"

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
