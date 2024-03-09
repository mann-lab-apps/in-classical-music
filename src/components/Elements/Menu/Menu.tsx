import { useDisclosure } from '@/hooks/useDisclosure';
import { Contents, Overlay, TriggerWrapper, Wrapper } from './Menu.style';

type MenuProps = {
  triggerButton: React.ReactNode;
  contents: React.ReactNode;
  isLeft?: boolean;
  closeOnClickContents?: boolean;
};

export const Menu = ({
  triggerButton,
  contents,
  isLeft = true,
  closeOnClickContents = true,
}: MenuProps) => {
  const { isOpen, close, toggle } = useDisclosure();
  const handleClickContents = () => {
    if (closeOnClickContents) {
      close();
    }
  };
  return (
    <>
      <Overlay isOpen={isOpen} onClick={close} />
      <Wrapper isOpen={isOpen}>
        <TriggerWrapper onClick={toggle}>{triggerButton}</TriggerWrapper>
        <Contents isOpen={isOpen} isLeft={isLeft} onClick={handleClickContents}>
          {contents}
        </Contents>
      </Wrapper>
    </>
  );
};
