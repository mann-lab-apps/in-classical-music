import { MainLayout } from '@/components/Layout';
import { ChatRoutes } from '@/features/chats';
import { PostRoutes } from '@/features/posts';
import { MyPage } from '@/features/misc';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

type AppProps = {
  auth: any;
};

const App = ({ auth }: AppProps) => {
  return (
    <MainLayout auth={auth}>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const useProtectedRoutes = (auth: any) => {
  const protectedRoutes = [
    {
      path: '/my-page',
      element: <App auth={auth} />,
      children: [
        {
          path: '/my-page',
          element: <MyPage />,
        },
      ],
    },
    {
      path: '/chats',
      element: <App auth={auth} />,
      children: [{ path: '/chats', element: <ChatRoutes /> }],
    },
    {
      path: '/chats/*',
      element: <ChatRoutes />,
    },
    {
      path: '/posts/*',
      element: <PostRoutes />,
    },
  ];
  return protectedRoutes;
};
