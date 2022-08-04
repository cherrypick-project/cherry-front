import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import Pagination from './Pagination';

export default {
  title: 'atoms',
  component: Pagination,
  parameters: {
    layout: 'fullscreen',
  },
};

const queryClient = new QueryClient();

// pageState,
// setPageState,
// isLecturesDataLoading,
// totalPages,
// curPage,

export const PaginationStory = () => {
  const [pageState, setPageState] = useState('1');

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Pagination
          pageState={pageState}
          setPageState={setPageState}
          isLecturesDataLoading={false}
          totalPages={10}
          curPage={1}
        />
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

PaginationStory.storyName = '페이지네이션';
