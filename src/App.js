/* import ItemListContainer from "./components/ItemListContainer"; */
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">   
        <NavBar />
       {/*  <ItemListContainer titulo="Alquiler de Películas" />      */}      
        <ItemDetailContainer id={8}/>
    </div>
  );
}

export default App;
