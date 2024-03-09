import { useState } from 'react';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { Buttons, Description, Wrapper } from './ConfirmationDialog.style';

type ConfirmationDialogProps = {
  triggerButton: React.ReactNode;
  description: string;
  confirmationButton: React.ReactNode;
  cancelButtonText?: string;
};

export const ConfirmationDialog = ({
  triggerButton,
  description,
  confirmationButton,
  cancelButtonText = '취소',
}: ConfirmationDialogProps) => {
  const [isClose, setIsClose] = useState<boolean>(false);

  const handleClickCancel = () => {
    setIsClose(true);
  };
  return (
    <Dialog
      triggerButton={triggerButton}
      isClose={isClose}
      contents={
        <Wrapper>
          <Description>{description}</Description>
          <Buttons>
            <Button
              variant="secondary"
              onClick={handleClickCancel}
              padding="5px"
            >
              {cancelButtonText}
            </Button>
            {confirmationButton}
          </Buttons>
        </Wrapper>
      }
    />
  );
};
