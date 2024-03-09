import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './Login';
import { Join } from './Join';
import { FindEmail } from './FindEmail';
import { FindPassword } from './FindPassword';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/find-email" element={<FindEmail />} />
      <Route path="/find-password" element={<FindPassword />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
