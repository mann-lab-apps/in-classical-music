import { Route, Routes } from 'react-router-dom';
import { Users } from './Users';
import { User } from './User';
import { Profile } from './Profile';
import { EditProfile } from './EditProfile';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/:id" element={<User />} />
      <Route path="/profile/edit" element={<EditProfile />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
};
