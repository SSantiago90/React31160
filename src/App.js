import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">   
        <NavBar />
        <ItemListContainer titulo="Hola Mundo" />
        <ItemListContainer titulo="Hola Coder" />
        <ItemListContainer titulo="Otra Prop" />
    </div>
  );
}

export default App;
