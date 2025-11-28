import { Home, PrivacyPolicy, Region, TermsOfUse } from "@/features/misc";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
// import { protectedRoutes } from './protected';
import { Suspense, useEffect, useState } from "react";
import { supabase } from "@/libraries/supabase";
import { ConcertRoutes } from "@/features/concerts";
import { ArtistRoutes } from "@/features/artists";
import { MainLayout } from "@/components/Layout";
import { UserRoutes } from "@/features/users";
import { Search } from "@/features/search";
import { useProtectedRoutes } from "./protected";

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

export const AppRoutes = () => {
  const [auth, setAuth] = useState<any>(null);
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setAuth(session);
    });
  }, []);

  const protectedRoutes = useProtectedRoutes(auth);

  const commonRoutes = [
    {
      path: "/",
      element: <App auth={auth} />,
      children: [
        { path: "/", element: <Home auth={auth} /> },
        { path: "/artists", element: <ArtistRoutes auth={auth} /> },
        { path: "/users", element: <UserRoutes /> },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
    { path: "/search", element: <Search /> },
    {
      path: "/concerts/*",
      element: <ConcertRoutes />,
    },
    { path: "/artists/*", element: <ArtistRoutes auth={auth} /> },
    { path: "/users/*", element: <UserRoutes /> },
    { path: "/terms-of-use", element: <TermsOfUse /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/region", element: <Region /> },
  ];

  const routes = auth ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
