import React from 'react'
import Styled from 'styled-components'
import CardProduto from './CardProduto';

const Card = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

const Board = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 1rem;
    justify-items: center;
    align-items: center;

    width: 100%;
    margin: 2rem 0;
    padding: 1rem 0;
`

class CardProdutos extends React.Component{

    state = {
        ordenacao: ''
    }

    adicionarProdutoAoCarrinho = (id) => {
        this.props.adicionarProdutoAoCarrinho(id)
    }

    render(){
        const {filtroValorMaximo, filtroValorMinimo, filtroNome} = this.props.filtros

        return (      
            <div className="cardProdutos">
                <Card>
                    <h2>Produtos</h2>
                    <p>Filtros:</p>
                    <p>{filtroValorMaximo}:{filtroValorMinimo} e {filtroNome}</p>
                    <Board>
                        {
                            this.props.listaProdutos.map((produto, index) => {
                                return (
                                    <CardProduto 
                                        key={index}
                                        produto={produto}
                                        adicionarProdutoAoCarrinho={this.adicionarProdutoAoCarrinho}
                                        />
                                );
                            })
                        }
                    </Board>
                </Card>
            </div>
        );
    }
}

export default CardProdutos