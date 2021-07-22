import React from 'react'
import Styled from 'styled-components'

const Card = Styled.div`
    min-width: 200px;
    width: 40%;
    height: 400px;
    transition: 0.3s;
    border: 1px solid black;
`
const Image = Styled.img`
    width: 100%;
    height: 50%;
`

class CardProduto extends React.Component{
    render(){

        const {nome,value,imageUrl} = this.props.produto

        return (
            <Card>
                <Image 
                    src={imageUrl} 
                    alt={nome}
                />
                <div>
                    <h4><b>{nome}</b></h4>
                    <p>{value}</p>
                </div>
            </Card>
        );
    }
}

export default CardProduto