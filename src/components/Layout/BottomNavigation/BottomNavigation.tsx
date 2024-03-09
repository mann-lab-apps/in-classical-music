import { navigation } from '@/configurations';
import { Column, Wrapper } from './BottomNavigation.style';
import { Button } from '@/components/Elements';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from '@/components/Elements/Tooltip';

type BottomNavigationProps = {
  auth: any;
};

export const BottomNavigation = ({ auth }: BottomNavigationProps) => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      {navigation.map((link, i) => {
        if (link.isLoggedInUserOnly && !auth) {
          return (
            <Column key={i}>
              <Tooltip
                text="로그인 후 이용 가능합니다"
                horizontalPosition={
                  link.name === '마이페이지' ? 'right' : 'center'
                }
              >
                <Button
                  startIcon={
                    pathname === link.path ? (
                      <link.selectedIcon size="22" />
                    ) : (
                      <link.icon size="22" />
                    )
                  }
                  padding="5px"
                  flexDirection="column"
                  type="button"
                  fontSize="small"
                  gap="3px"
                >
                  {link.name}
                </Button>
              </Tooltip>
            </Column>
          );
        }
        return (
          <Column key={i}>
            <Link to={link.path}>
              <Button
                startIcon={
                  pathname === link.path ? (
                    <link.selectedIcon size="22" />
                  ) : (
                    <link.icon size="22" />
                  )
                }
                padding="5px"
                flexDirection="column"
                type="button"
                fontSize="small"
                gap="3px"
              >
                {link.name}
              </Button>
            </Link>
          </Column>
        );
      })}
    </Wrapper>
  );
};
