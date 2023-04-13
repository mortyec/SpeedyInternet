import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Helmet } from "react-helmet" 
import './App.css';
import Inicio from './paginas/Inicio';
import Corporativo from './paginas/Corporativo';
import Streaming from "./paginas/Streaming";
import Dual from "./paginas/Dual";


function App() {
  return (
    <>
    <BrowserRouter basename='/'>
      <Helmet>
        <title>Speedy</title>
        <meta name="description" content="Prez" />
      </Helmet>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/corporativo" element={<Corporativo />} />
          <Route path="/streaming" element={<Streaming />} />
          <Route path="/dual" element={<Dual />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
