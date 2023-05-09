import { TweetPage } from 'pages/TweetsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { HomePage } from 'pages/home/Homepage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
