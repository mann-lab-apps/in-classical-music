import React from 'react';
import { Wrapper } from './MainLayout.style';
import { Header } from './Header';
import { Footer } from './Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Wrapper>
  );
};
