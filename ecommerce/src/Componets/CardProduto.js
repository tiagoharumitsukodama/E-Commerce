import React from 'react'
import Styled from 'styled-components'

const Card = Styled.div`
    min-width: 200px;
    width: 40%;
    height: 400px;
    transition: 0.3s;
    border: 1px solid black;

    background: white;
`

const Image = Styled.img`
    width: 100%;
    height: 50%;
`

class CardProduto extends React.Component{
    render(){
        return (
            <Card>
                <Image 
                    src="https://picsum.photos/200/300" 
                    alt="Avatar" 
                />
                <div>
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </Card>
        );
    }
}

export default CardProduto