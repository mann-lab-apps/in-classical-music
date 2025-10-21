import React from "react";
import { HeaderButtons, Inner, Wrapper } from "./MainLayout.style";
import { Header } from "../Header";
import { Button, Link, Logo, NotificationMenu } from "@/components/Elements";
import { Footer } from "../Footer";
import { RegionSelectMenu } from "./RegionSelectMenu";

import { RiSearchLine } from "react-icons/ri";

type MainLayoutProps = {
  auth: any;
  children: React.ReactNode;
};

export const MainLayout = ({ auth, children }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Header
        leftColumn={<RegionSelectMenu />}
        centerColumn={
          <>
            <Link to="/" textDecoration="none">
              <Logo />
            </Link>
          </>
        }
        rightColumn={
          <HeaderButtons>
            <Link to="/search" textDecoration="none">
              <Button padding="5px" startIcon={<RiSearchLine size="20" />} />
            </Link>
            {auth ? (
              <NotificationMenu />
            ) : (
              <Link to="/auth/login" textDecoration="none">
                <Button padding="5px">로그인</Button>
              </Link>
            )}
          </HeaderButtons>
        }
      />
      <Inner>{children}</Inner>
      <Footer />
    </Wrapper>
  );
};
