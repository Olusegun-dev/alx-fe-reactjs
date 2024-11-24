import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PostsComponent from './components/PostsComponent';

const App = () => {
  return (
    <div>
      <h1>React Query Demo</h1>
      <PostsComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
};

export default App;
