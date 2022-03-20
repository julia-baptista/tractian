import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfoProvider from './context/infoProvider';
import HomePage from './pages/HomePage';
import Assets from './pages/Assets';
import Asset from './pages/Asset';
import Companies from './pages/Companies';
import Units from './pages/Units';
import Users from './pages/Users';
import Graphics from './pages/Graphics';
import NavBar from './components/Navbar';
import Error from './pages/Error';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <InfoProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<Assets/>} />
            <Route path="/assets/:id" element={<Asset/>} />
            <Route path="/empresas" element={<Companies/>} />
            <Route path="/unidades" element={<Units/> } />
            <Route path="/usuarios" element={<Users/> } />
            <Route path="/graficos" element={<Graphics/> } />
            <Route path="*" element={<Error /> } />
          </Routes>
          <Footer />
      </BrowserRouter>
      </InfoProvider>
    </div>
  );
}

export default App;
