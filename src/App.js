import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ProductDetail from './Pages/ProductDetail';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/productdetail/:id" element={<ProductDetail/>} />

      </Routes> 
    </BrowserRouter>
  );
}

export default App;
