import { Header } from '@/components/Layout';
import { Heading, Wrapper } from './Layout.style';
import { Button, Logo } from '@/components/Elements';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

type LayoutProps = {
  heading: string;
  children: React.ReactNode;
};

export const Layout = ({ children, heading }: LayoutProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        leftColumn={
          <>
            <Button
              onClick={() => navigate(-1)}
              startIcon={<FaAngleLeft size="20" />}
            />
          </>
        }
        centerColumn={
          <Link to="/">
            <Logo />
          </Link>
        }
        rightColumn={<></>}
      />
      <Wrapper>
        <Heading>{heading}</Heading>
        {children}
      </Wrapper>
    </>
  );
};
