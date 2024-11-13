// src/App.js
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import history from './history'; 
import Landing from './components/Landing';
import Index from './components/Index'; // Asegúrate de que la ruta es correcta
import MediaDetails from './components/ui/MediaDetails'; // Asegúrate de que la ruta es correcta


function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/index" element={<Index />} /> 
        <Route path="/media/:id" element={<MediaDetails />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;