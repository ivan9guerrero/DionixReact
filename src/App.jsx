import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />

      </Routes>
      <ItemListContainer saludo = "Bienvenido a mi ecommerce" />
    </BrowserRouter>
  );
}

export default App