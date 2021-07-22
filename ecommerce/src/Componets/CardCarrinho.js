import React from 'react'
import Styled from 'styled-components';

const Card = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

class CardCarrinho extends React.Component{
    render(){
        return (
            <div className="cardCarrinho">
                <Card>
                    <h2>Carrinho</h2>
                    <p>2x Produto 1</p>
                    <p>2x Produto 1</p>
                    <p>2x Produto 1</p>
                    <p>Total: 5,00</p>
                </Card>
            </div>
        );
    }
}

export default CardCarrinho