import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// *1- instalar y configurar react-router
// *2- Actualizar los <Links> de la NavBar
// * 3- Actualizar el ItemListContainer para usar useParams()
// * 4- Actualizar el ItemDetailContainer para usar useParams()


function App() {
  return (
    <div className="App">   
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/movie/:itemid" element={ <ItemDetailContainer/>} />                
          <Route path="/" element={<ItemListContainer titulo="Hola desde React Router" />} />
          <Route path="/category/:categoryid" element={<ItemListContainer titulo="Categoría de Productos" />} />
        </Routes>         
        </BrowserRouter>
    </div>
  );
}

export default App;
