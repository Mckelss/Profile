import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { clients } from './data/clients.js';
import BusinessCard from './pages/BusinessCard.jsx';
import NotFound from './pages/NotFound.jsx';

function ClientRoute() {
  const { slug } = useParams();
  const client = clients[slug];
  return client ? <BusinessCard client={client} /> : <NotFound />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/card/${Object.keys(clients)[0]}`} replace />} />
      <Route path="/card/:slug" element={<ClientRoute />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
