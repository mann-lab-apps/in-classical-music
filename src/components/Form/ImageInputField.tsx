import { ChangeEvent, useState } from 'react';
import { FileInputField, FileInputFieldProps } from './FileInputField';
import { Image, LabelComponent } from './ImageInputField.style';
import { convertImageToBase64 } from '@/utils/fileReader';

type ImageInputFieldProps = {} & FileInputFieldProps;

export const ImageInputField = ({
  label = '이미지',
  error,
  registration,
}: ImageInputFieldProps) => {
  const [imageBase64, setImageBase64] = useState<string>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event?.target?.files?.length) {
      return;
    }
    convertImageToBase64({
      image: event?.target?.files[0],
      getImage: setImageBase64,
    });
  };

  return (
    <FileInputField
      labelComponent={
        imageBase64 ? (
          <LabelComponent>
            <Image src={imageBase64} />
          </LabelComponent>
        ) : (
          <LabelComponent>선택된 이미지가 없습니다</LabelComponent>
        )
      }
      label={label}
      error={error}
      registration={registration}
      onChange={handleChange}
      accept="image/*"
    />
  );
};
