import { Navigate, Route, Routes } from 'react-router-dom';
import { Concerts } from './Concerts';
import { Concert } from './Concert';

export const ConcertRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Concerts />} />
      <Route path="/:id" element={<Concert />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
