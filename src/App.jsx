import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer saludo = "Bienvenido a mi ecommerce" />
    </div>
  );
}

export default App