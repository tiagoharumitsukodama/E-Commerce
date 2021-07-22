import React from 'react'
import Styled from 'styled-components'

const Card = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

class CardFiltro extends React.Component{

    render(){
        return (
            <div className="cardFiltro">
                <Card>
                    <h2>Filtros</h2>
                    
                    <label>Valor máximo</label>
                    <input />

                    <label>Valor mínimo</label>
                    <input />

                    <label>Filtrar por nome</label>
                    <input />
                </Card>
            </div>
        );
    }
}


export default CardFiltro