import {
  Chat,
  ChatInformation,
  Image,
  RecentMessage,
  TextBox,
  UnreadCount,
  Username,
  Wrapper,
} from './Chatlist.style';
import { Button, Link } from '@/components/Elements';
import { Empty } from '@/features/misc';

type ChatlistProps = {
  chats: any[];
};

export const Chatlist = ({ chats }: ChatlistProps) => {
  return (
    <Wrapper>
      {chats.length ? (
        chats.map((chat, i) => (
          <Link to={`/chats/${chat.user.id}`} key={i} textDecoration="none">
            <Chat>
              <Image src={chat.user.image} />
              <TextBox>
                <ChatInformation>
                  <Username>{chat.user.username}</Username>
                  {chat.recentMessage.createdAt} ・ {chat.user.region}
                </ChatInformation>
                <RecentMessage>{chat.recentMessage.content}</RecentMessage>
              </TextBox>
              <UnreadCount>{chat.unreadCount}</UnreadCount>
            </Chat>
          </Link>
        ))
      ) : (
        <Empty
          phrase={'진행 중인 채팅이 없습니다\n대화 상대를 찾아보세요'}
          actionButton={
            <Link to="/community" textDecoration="none">
              <Button padding="10px" variant="primaryContainer">
                커뮤니티 둘러보기
              </Button>
            </Link>
          }
        />
      )}
    </Wrapper>
  );
};
