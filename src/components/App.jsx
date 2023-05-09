import { TweetPage } from 'pages/TweetsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { HomePage } from 'pages/Homepage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetPage />} />
          <Route path="*" element={<><div>Sorry page not Found</div></>} />
        </Route>
      </Routes>
    </>
  );
};


