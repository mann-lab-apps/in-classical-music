import { GuideSection } from '../components/GuideSection';
import { Button } from '@/components/Elements';

import juniorViolinist from '@/assets/images/junior-violinist.jpg';
import orchestra from '@/assets/images/orchestra.jpg';
import trio from '@/assets/images/trio.png';
import violinist from '@/assets/images/violinist.png';
import schedule from '@/assets/images/schedule.png';

import { useNavigate } from 'react-router-dom';

export const OnBoarding = () => {
  const navigate = useNavigate();

  return (
    <>
      <GuideSection
        title={'우리 모두의\n클래식 음악 안의 이야기'}
        description={'우리 지역의 클래식 음악을\n함께 만들어가요'}
        image={trio}
        buttons={
          <>
            <Button
              padding="10px"
              fontSize="medium"
              variant="primary"
              onClick={() => navigate('/community')}
            >
              소식 둘러보기
            </Button>
          </>
        }
      />
      <GuideSection
        title={'클래식 음악 전문가에게\n도움 요청하기'}
        description={
          '나와 가까운 아티스트들이 볼 수 있게\n요청 사항을 작성해보세요'
        }
        image={juniorViolinist}
        backgroundColor="primaryContainer"
        textPosition="right"
        buttons={
          <>
            <Button
              padding="10px"
              fontSize="medium"
              variant="primary"
              onClick={() => navigate('/community/write')}
            >
              레슨 / 구인하기
            </Button>
          </>
        }
      />
      <GuideSection
        title={'나의 클래식 음악\n활동 프로필'}
        description={
          '내 아티스트로 프로필을 등록하고\n가까운 사람들과 공유할 수 있어요'
        }
        image={violinist}
        buttons={
          <>
            <Button
              padding="10px"
              fontSize="medium"
              variant="primary"
              onClick={() => navigate('/community')}
            >
              아티스트 등록하기
            </Button>
          </>
        }
      />
      <GuideSection
        title={'우리 동네\n연주회 알리미'}
        description={
          '관심있는 연주회 정보를 확인하고\n내 연주회 소식도 올릴 수 있어요'
        }
        image={orchestra}
        backgroundColor="primary"
        textPosition="right"
        buttons={
          <>
            <Button
              padding="10px"
              fontSize="medium"
              variant="surface"
              onClick={() => navigate('/concerts')}
            >
              연주회 찾아보기
            </Button>
          </>
        }
      />
      <GuideSection
        title={'간편하고 똑똑한\n음악 스케쥴 관리'}
        description={'채팅으로 조율한 일정을 정리하고\n소식을 나눠보세요'}
        image={schedule}
        buttons={
          <>
            <Button
              padding="10px"
              fontSize="medium"
              variant="primary"
              onClick={() => navigate('/community')}
            >
              소식 나누기
            </Button>
          </>
        }
      />
    </>
  );
};
