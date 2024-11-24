import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
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




const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);

export default App;