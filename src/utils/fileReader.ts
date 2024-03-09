type convertImageToBase64Props = {
  image: Blob;
  getImage: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const convertImageToBase64 = async ({
  image,
  getImage,
}: convertImageToBase64Props) => {
  const fileReader = new FileReader();

  fileReader.readAsDataURL(image);
  fileReader.onloadend = (progressEvent) => {
    if (
      !progressEvent?.target?.result ||
      typeof progressEvent.target.result === 'object'
    ) {
      return;
    }
    getImage(progressEvent.target.result);
  };
};
