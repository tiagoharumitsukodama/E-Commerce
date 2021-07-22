import './App.css';
import React from 'react'
import CardFiltro from './Componets/CardFiltro';
import CardProdutos from './Componets/CardProdutos';
import CardCarrinho from './Componets/CardCarrinho';

const listaProdutos = [
  {
    id: 1,
    name: "Foguete da Missão Lindo 11",
    value: 1000.0,
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Avião da Missão Apollo 11",
    value: 20000.0,
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Barco da Missão Apollo 11",
    value: 30000.0,
    imageUrl: "https://picsum.photos/200",
  }
]

class App extends React.Component {

  state = {
    filtroValorMaximo: "",
    filtroValorMínimo: "",
    filtroNome: "",
    produtosSelecionados: [
      {
        id: 1,
        quantidade: 4
      },
      {
        id: 2,
        quantidade: 3
      },
      {
        id: 3,
        quantidade: 2
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <CardFiltro />
        <CardProdutos 
          listaProdutos={listaProdutos}
          />
        <CardCarrinho 
          produtosSelecionados={this.state.produtosSelecionados}
          listaProdutos={listaProdutos}
          />
      </div>
    );
  }
}

export default App;
