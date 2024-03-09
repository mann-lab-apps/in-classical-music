import { Button, Menu } from '@/components/Elements';
import { storage } from '@/utils/storage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContentWrapper } from './RegionSelectMenu.style';

export const RegionSelectMenu = () => {
  const [isSeeAll, setIsSeeAll] = useState<boolean>(true);
  const navigate = useNavigate();

  const [regions, setRegions] = useState<any[]>([]);

  useEffect(() => {
    const newRegions = storage.getValue('regions');
    setRegions(newRegions ? newRegions.split(',') : []);
  }, []);

  const handleClickRegion = (clickedRegion: string) => {
    const newRegions = regions.filter((region, i) => region !== clickedRegion);
    newRegions.unshift(clickedRegion);
    setIsSeeAll(false);
    storage.setValue('regions', newRegions.join(','));
    return setRegions(newRegions);
  };

  return (
    <Menu
      closeOnClickContents={true}
      triggerButton={
        <Button padding="5px">{isSeeAll ? '지역 선택' : regions[0]}</Button>
      }
      contents={
        <ContentWrapper>
          {regions.map((region, i) => (
            <Button
              padding="5px"
              onClick={() => handleClickRegion(region)}
              key={i}
            >
              {region}
            </Button>
          ))}
          <Button onClick={() => setIsSeeAll(true)} padding="5px">
            전체보기
          </Button>
          <Button onClick={() => navigate('/region')} padding="5px">
            지역 추가하기
          </Button>
        </ContentWrapper>
      }
    />
  );
};
