import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfoProvider from './context/infoProvider';
import HomePage from './pages/HomePage';
import Assets from './pages/Assets';
import Companies from './pages/Companies';
import Units from './pages/Units';
import Users from './pages/Users';
import Graphics from './pages/Graphics';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <InfoProvider>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/solucoes" element={<Assets/>} />
            <Route exact path="/empresas" element={<Companies/>} />
            <Route exact path="/unidades" element={<Units/> } />
            <Route exact path="/usuarios" element={<Users/> } />
            <Route exact path="/graficos" element={<Graphics/> } />
          </Routes>
        </InfoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
