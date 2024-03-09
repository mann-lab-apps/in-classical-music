import { Navigate, Route, Routes } from 'react-router-dom';
import { Artists } from './Artists';
import { Artist } from './Artist';
import { Write } from './Write';

type ArtistRoutesProps = {
  auth: any;
};

export const ArtistRoutes = ({ auth }: ArtistRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<Artists auth={auth} />} />
      <Route path="/write" element={<Write />} />
      <Route path="/:id" element={<Artist />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
