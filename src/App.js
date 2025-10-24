import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Survival } from './pages/quizzes/survival/Survival';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survival" element={<Survival />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
