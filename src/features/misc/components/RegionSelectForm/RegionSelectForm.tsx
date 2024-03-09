import { Form, SelectField } from '@/components/Form';
import { useEffect, useState } from 'react';
import { getRegions } from '../../api';
import { Button } from '@/components/Elements';
import { FieldValues } from 'react-hook-form';
import { Column, SelectBox, Wrapper } from './RegionSelectForm.style';
import { storage } from '@/utils/storage';

type RegionSelectFormProps = {
  onSuccess?: () => void;
};

export const RegionSelectForm = ({ onSuccess }: RegionSelectFormProps) => {
  const [city, setCity] = useState<any>();
  const [town, setTown] = useState<any>();
  const [village, setVillage] = useState<any>();
  const [cityCodes, setCityCodes] = useState<any>({});
  const [townCodes, setTownCodes] = useState<any>({});
  const [villageCodes, setVillageCodes] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await getRegions('*00000000');
      let newCityCodes: any = {};
      for (let regcode of data.regcodes) {
        const name: string = regcode.name;
        const code: string = regcode.code;
        newCityCodes[name] = code;
      }
      setCityCodes(newCityCodes);
      setCity('서울특별시');

      const newTownCodes = await getTownCodes('11000000');
      setTownCodes(newTownCodes);
      setTown('종로구');

      const newVillageCodes = await getVillageCodes('11110000');
      setVillageCodes(newVillageCodes);
      setVillage('청운동');
    })();
  }, []);

  useEffect(() => {
    if (!city) {
      return;
    }
    const cityCode = cityCodes[city] as string;
    (async () => {
      const newTownCodes = await getTownCodes(cityCode);
      if (newTownCodes) {
        setTownCodes(newTownCodes);
        setTown(Object.keys(newTownCodes)[0]);
      }
    })();
  }, [city, cityCodes]);

  useEffect(() => {
    if (!town) {
      return;
    }
    const townCode = townCodes[town] as string;
    (async () => {
      const newVillageCodes = await getVillageCodes(townCode);
      if (newVillageCodes) {
        setVillageCodes(newVillageCodes);
        setVillage(Object.keys(newVillageCodes)[0]);
      }
    })();
  }, [city, cityCodes, town, townCodes]);

  const handleSubmit = (values: FieldValues) => {
    console.log(city, town, village);
    const regions = storage.getValue('regions');
    const newRegions = regions ? regions.split(',') : [];
    newRegions.push(`${city} ${town} ${village}`);
    console.log(newRegions);
    storage.setValue('regions', newRegions.join(','));
    if (onSuccess) {
      onSuccess();
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState, setValue }) => (
        <Wrapper>
          <SelectBox>
            <Column>
              <SelectField
                registration={register('city', {
                  onChange: (event) => setCity(event.target.value),
                })}
                error={formState.errors['city']}
                options={Object.keys(cityCodes)}
                defaultValue={city}
              />
            </Column>
            <Column>
              <SelectField
                registration={register('town', {
                  onChange: (event) => setTown(event.target.value),
                })}
                error={formState.errors['town']}
                options={Object.keys(townCodes)}
                defaultValue={town}
              />
            </Column>
            <Column>
              <SelectField
                registration={register('village', {
                  onChange: (event) => setVillage(event.target.value),
                })}
                error={formState.errors['village']}
                options={Object.keys(villageCodes)}
                defaultValue={village}
              />
            </Column>
          </SelectBox>
          <Button
            type="submit"
            variant="primary"
            padding="5px"
            fontSize="medium"
          >
            추가하기
          </Button>
        </Wrapper>
      )}
    </Form>
  );
};

const getTownCodes = async (cityCode: string) => {
  const { data } = await getRegions(`${cityCode.slice(0, 2)}*000000`);
  let newTownCodes: any = {};
  for (let regcode of data.regcodes) {
    let name: string = regcode.name;
    const code: string = regcode.code;
    let nameList = name.split(' ');
    nameList.shift();
    name = nameList.join(' ');
    if (!name) {
      continue;
    }
    newTownCodes[name] = code;
  }
  return newTownCodes;
};

const getVillageCodes = async (townCode: string) => {
  const { data } = await getRegions(`${townCode.slice(0, 4)}*`);
  let newVillageCodes: any = {};
  for (let regcode of data.regcodes) {
    let name: string = regcode.name;
    const code: string = regcode.code;
    let nameList = name.split(' ');
    nameList.shift();
    nameList.shift();
    name = nameList.join(' ');
    if (!name) {
      continue;
    }
    newVillageCodes[name] = code;
  }
  return newVillageCodes;
};
