import React from 'react';
import { Header } from '../Header';
import { Button } from '@/components/Elements';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { Title, Wrapper } from './StackedLayout.style';

type StackedLayoutProps = {
  title: string;
  children: React.ReactNode;
  headerRightItem?: React.ReactNode;
};

export const StackedLayout = ({
  children,
  title,
  headerRightItem,
}: StackedLayoutProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header
        leftColumn={
          <>
            <Button
              padding="5px"
              onClick={() => navigate(-1)}
              startIcon={<FaAngleLeft size="20" />}
            />
          </>
        }
        centerColumn={<Title>{title}</Title>}
        rightColumn={<>{headerRightItem}</>}
      ></Header>
      {children}
    </Wrapper>
  );
};
