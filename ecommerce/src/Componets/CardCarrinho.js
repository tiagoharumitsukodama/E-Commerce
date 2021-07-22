import React from 'react'
import Styled from 'styled-components';

const Card = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
    padding: 1rem;
`
const ListaItens = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    margin: 1rem 0;
    width:90%;
`
const Item = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: .7rem;
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

                                return <Item key={id}>
                                        {`${quantidade}x ${produtoDados.name}`}
                                        <button onClick={() => this.props.removerProdutoCarrinho(id)}>Remover</button>
                                    </Item>
                            })
                        }
                    </ListaItens>
                    <p>
                        <strong>Total a pagar: </strong>
                        R$:
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