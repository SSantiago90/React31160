import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">   
        <NavBar />
        <ItemListContainer titulo="Hola Mundo" />
        <hr/>
        <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;
