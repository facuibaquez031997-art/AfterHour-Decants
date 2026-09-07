import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css'
import { Routes,Route } from "react-router-dom";
import Catalogo from "./components/Catalogo";
import Nosotros from "./components/Nosotros";


ReactDOM.createRoot(document.getElementById("root")!).render(
 <BrowserRouter>
  <Routes>
        <Route path="/" element= {<App/>}>
            <Route path="/catalogo" element={<Catalogo/>} />
            <Route path="/nosotros" element={<Nosotros/>} />
        </Route>
    </Routes>
 </BrowserRouter>
);

