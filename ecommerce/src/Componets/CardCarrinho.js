import React from 'react'
import Styled from 'styled-components';

const Card = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`
const ListaItens = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    margin: 1rem 0;
`

class CardCarrinho extends React.Component{
    render(){
        return (
            <div className="cardCarrinho">
                <Card>
                    <h2>Carrinho</h2>
                    <ListaItens>
                        {
                            this.props.produtosSelecionados.map( produtoSelecionado => {
                                const id = produtoSelecionado.id
                                const quantidade = produtoSelecionado.quantidade
                                const [produtoDados] = this.props.listaProdutos.filter( produto => produto.id===id )

                                return <p>{`${quantidade}x ${produtoDados.name}`}</p>
                            })
                        }
                    </ListaItens>
                    <p>
                        <strong>Total: </strong>
                        {
                            this.props.produtosSelecionados.reduce( (total,produtoSelecionado) => {
                                const id = produtoSelecionado.id
                                const quantidade = produtoSelecionado.quantidade
                                const [produtoDados] = this.props.listaProdutos.filter( produto => produto.id===id )

                                return total+quantidade*produtoDados.value    
                            }, 0)
                        }
                    </p>
                </Card>
            </div>
        );
    }
}

export default CardCarrinho