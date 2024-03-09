import { Route, Routes } from 'react-router-dom';
import { Chats } from './Chats';
import { Chat } from './Chat';

export const ChatRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Chats />} />
      <Route path="/:id" element={<Chat />} />
    </Routes>
  );
};
