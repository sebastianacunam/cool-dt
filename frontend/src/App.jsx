import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import DetailDestiny from './components/DetailDestiny/DetailDestiny';
import CreateDestiny from './components/CreateDestiny/CreateDestiny';
import PutDestiny from './components/PutDestiny/PutDestiny';
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/destiny/:id" element={<DetailDestiny />} />
        <Route path="/create" element={<CreateDestiny />} />
        <Route path="/update/:id" element={<PutDestiny />} />
      </Routes>
    </BrowserRouter>  
  );
}


