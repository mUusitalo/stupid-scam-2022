import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Homepage from './components/Homepage'
import FakeLogin from './components/FakeLogin'
import EndPage from './components/EndPage';
import Email from './components/Email';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage />} path='/' />
        <Route element={<FakeLogin />} path='/login' />
        <Route element={<Email />} path='/mail' />
        <Route element={<EndPage />} path='/congratulations' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
