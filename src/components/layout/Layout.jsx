import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import styled from './layout.module.css';
import { startTransition } from 'react';

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoTweets = navigate => {
    startTransition(() => {
      navigate('tweets');
    });
  };

  const handleGoHome = navigate => {
    startTransition(() => {
      navigate('/');
    });
  };

  return (
    <div>
      {location.pathname === '/' && (
        <button type="button" onClick={() => handleGoTweets(navigate)}>
          To tweeets
        </button>
      )}

      {location.pathname === '/tweets' && (
        <button
          type="button"
          onClick={() => handleGoHome(navigate)}
          className={styled.butHome}
        >
          To home
        </button>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
