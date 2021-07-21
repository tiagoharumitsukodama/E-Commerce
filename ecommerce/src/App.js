import './App.css';
import CardFiltro from './Componets/CardFiltro';
import CardProdutos from './Componets/CardProdutos';
import CardCarrinho from './Componets/CardCarrinho';

function App() {
  return (
    <div className="App">
      <CardFiltro />
      <CardProdutos />
      <CardCarrinho />
    </div>
  );
}

export default App;
