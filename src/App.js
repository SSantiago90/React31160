import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import CartView from "./components/CartView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <div className="App">   
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/movie/:itemid" element={ <ItemDetailContainer/>} />                
              <Route path="/" element={<ItemListContainer titulo="Hola desde React Router" />} />
              <Route path="/category/:categoryid" element={<ItemListContainer titulo="Categoría de Productos" />} />
              <Route path="/cart" element={<CartView />} />
            </Routes>         
        </BrowserRouter>     
      </CartContextProvider>
    </div>
  );
}

export default App;
