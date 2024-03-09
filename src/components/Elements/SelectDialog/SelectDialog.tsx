import { Dialog } from '../Dialog';
import { Wrapper } from './SelectDialog.style';

type SelectDialogProps = {
  triggerButton: React.ReactNode;
  buttons: React.ReactNode;
};

export const SelectDialog = ({ triggerButton, buttons }: SelectDialogProps) => {
  return (
    <Dialog
      triggerButton={triggerButton}
      contents={<Wrapper>{buttons}</Wrapper>}
    />
  );
};
