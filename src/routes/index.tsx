import { Home } from '@/features/misc';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <Home /> }];
  const routes = [{ path: '/app', element: <>APP</> }];
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
