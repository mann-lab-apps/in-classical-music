import { useDisclosure } from '@/hooks/useDisclosure';
import { Contents, Overlay, TriggerWrapper } from './Dialog.style';
import { useEffect } from 'react';

type DialogProps = {
  triggerButton: React.ReactNode;
  contents: React.ReactNode;
  isClose?: boolean;
};

export const Dialog = ({
  triggerButton,
  contents,
  isClose = false,
}: DialogProps) => {
  const { isOpen, close, toggle } = useDisclosure();
  const handleClickContents = () => {};

  useEffect(() => {
    close();
  }, [close, isClose]);
  return (
    <>
      <Overlay isOpen={isOpen} onClick={close}></Overlay>
      <Contents isOpen={isOpen} onClick={handleClickContents}>
        {contents}
      </Contents>
      <TriggerWrapper onClick={toggle}>{triggerButton}</TriggerWrapper>
    </>
  );
};
