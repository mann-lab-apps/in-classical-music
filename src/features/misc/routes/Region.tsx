import { useEffect, useState } from 'react';
import { StackedLayout } from '@/components/Layout';
import { RegionSelectForm } from '../components';
import { storage } from '@/utils/storage';
import { Button, Slider } from '@/components/Elements';
import {
  BoxTitle,
  Description,
  SelectedRegion,
  SelectedRegions,
  Wrapper,
} from './Region.style';
import { TiDeleteOutline } from 'react-icons/ti';

export const Region = () => {
  const [regions, setRegions] = useState<any[]>([]);

  useEffect(() => {
    updateRegions();
  }, []);

  const updateRegions = () => {
    const storageRegions = storage.getValue('regions');
    const storageRegionsArray = storageRegions
      ? storageRegions?.split(',')
      : [];
    setRegions(storageRegionsArray);
  };

  const deleteRegion = (index: number) => {
    const newRegions = regions.filter((region, i) => i !== index);
    setRegions(newRegions);
    storage.setValue('regions', newRegions.join(','));
  };

  return (
    <StackedLayout title="지역 추가하기">
      <Wrapper>
        <SelectedRegions>
          <BoxTitle>추가된 지역 목록</BoxTitle>
          {regions.length ? (
            <Slider gap="10px">
              {regions.map((region, i) => (
                <SelectedRegion key={i}>
                  {region}

                  <Button
                    variant="surface"
                    padding="5px"
                    onClick={() => deleteRegion(i)}
                    startIcon={<TiDeleteOutline />}
                  ></Button>
                </SelectedRegion>
              ))}
            </Slider>
          ) : (
            <Description>추가된 지역이 없습니다</Description>
          )}
        </SelectedRegions>
        <RegionSelectForm onSuccess={() => updateRegions()} />
      </Wrapper>
    </StackedLayout>
  );
};
