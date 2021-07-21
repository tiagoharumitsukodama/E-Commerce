import React from 'react'
import Styled from 'styled-components'
import CardProduto from './CardProduto';

const Card = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    background: green;
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

    background: yellow;
`

class CardProdutos extends React.Component{
    render(){
        return (      
            <div className="cardProdutos">
                <Card>
                    <h2>Produtos</h2>
                    <Board>
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </Board>
                </Card>
            </div>
        );
    }
}

export default CardProdutos