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
    imageUrl: "https://picsum.photos/201",
  },
  {
    id: 2,
    name: "Avião da Missão Apollo 11",
    value: 20000.0,
    imageUrl: "https://picsum.photos/202",
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
    filtroValorMinimo: "",
    filtroNome: "",
    produtosSelecionados: []
  }
  
  adicionarProdutoAoCarrinho = async (id) => {

    const jaAdicionado = this.state.produtosSelecionados.some( produto => {
      return produto.id===id 
    })

    if( !jaAdicionado ){
      const novoItem = {id, quantidade: 0}
      const listaComItem = [...this.state.produtosSelecionados, novoItem]
      await this.setState({ produtosSelecionados: listaComItem })
    } 

    const novaLista = this.state.produtosSelecionados.map( produto => {
      if(id === produto.id)
        return { ...produto, quantidade: produto.quantidade+1 }

      return produto
    })

    await this.setState({ produtosSelecionados: novaLista })
  }
  setInput = ob => {
    this.setState(ob)
  }

  render(){
    return (
      <div className="App">
        <CardFiltro 
          setInput={this.setInput}
        />
        <CardProdutos 
          listaProdutos={listaProdutos}
          adicionarProdutoAoCarrinho={this.adicionarProdutoAoCarrinho}
          filtros={{    
            filtroValorMaximo: this.state.filtroValorMaximo,
            filtroValorMinimo: this.state.filtroValorMinimo,
            filtroNome: this.state.filtroNome,
          }}
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
