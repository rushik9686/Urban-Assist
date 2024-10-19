import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css'; 
import Navbar from './landing_page/Navbar';
import HomePage from './landing_page/home/HomePage';
import Aboutpage from './landing_page/about/aboutpage';
import ServicesPage from './landing_page/Services/ServicePage';
import SupportPage from './landing_page/Support/SupportPage';
import SignupPage from './landing_page/signup/SignupPage';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import FirstPage from './landing_page/FirstPage'; // Make sure FirstPage is correctly imported

// Layout component to conditionally render Navbar and Footer
function Layout() {
  const location = useLocation();
  
  // Check if the current route is the FirstPage
  const isFirstPage = location.pathname === '/';

  return (
    <>
      {!isFirstPage && <Navbar />} {/* Don't show Navbar on FirstPage */}
      
      <Routes>
        <Route path='/' element={<FirstPage />} /> {/* FirstPage loads at root */}
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='*' element={<NotFound />} /> {/* For invalid paths */}
      </Routes>

      {!isFirstPage && <Footer />} {/* Don't show Footer on FirstPage */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
