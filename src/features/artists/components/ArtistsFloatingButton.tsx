import { Button, SelectDialog, Tooltip } from "@/components/Elements";
import { PiMusicNotesPlusFill } from "react-icons/pi";
import { Wrapper } from "./ArtistsFloatingButton.style";
import { useNavigate } from "react-router-dom";

type ArtistsFloatingButtonProps = {
  auth: any;
};

export const ArtistsFloatingButton = ({ auth }: ArtistsFloatingButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/artists/write");
  };
  if (!auth) {
    return (
      <Wrapper>
        <Tooltip text="로그인 후 이용가능합니다">
          <Button
            startIcon={<PiMusicNotesPlusFill />}
            variant="primary"
            padding="20px"
            borderRadius="50%"
          ></Button>
        </Tooltip>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Button
        onClick={handleClick}
        startIcon={<PiMusicNotesPlusFill />}
        variant="primary"
        padding="20px"
        borderRadius="50%"
      ></Button>
    </Wrapper>
    // <SelectDialog
    //   triggerButton={
    //     <Wrapper>
    //       <Button
    //         startIcon={<PiMusicNotesPlusFill />}
    //         variant="primary"
    //         padding="20px"
    //         borderRadius="50%"
    //       ></Button>
    //     </Wrapper>
    //   }
    //   buttons={
    //     <>
    //       <Button variant="surface" padding="10px">
    //         아티스트 프로필
    //       </Button>
    //       <Button variant="surface" padding="10px">
    //         연주회
    //       </Button>
    //     </>
    //   }
    // />
  );
};
