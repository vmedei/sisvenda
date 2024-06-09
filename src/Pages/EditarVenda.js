import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateVenda } from '../Store/VendasSlice';
import { useDispatch, useSelector } from 'react-redux';

function EditarVenda() {

    const { id } = useParams();
    const vendas = useSelector((state) => state.vendas);
    const venda = vendas.vendas.filter(f => f.id == id);

    const { nomeVendedor, nomeCliente, produtoVendido, ultimaAcao } = venda[0];

    const [updNomeVendedor, setNomeVendedor] = useState(nomeVendedor);
    const [updNomeCliente, setNomeCliente] = useState(nomeCliente);
    const [updProdutoVendido, setProdutoVendido] = useState(produtoVendido);
    const [updUltimaAcao, setUltimaAcao] = useState(ultimaAcao);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateVenda({
            id: id,
            nomeVendedor: updNomeVendedor,
            nomeCliente: updNomeCliente,
            produtoVendido: updProdutoVendido,
            ultimaAcao: updUltimaAcao,
        }));
        navigate('/vendas');
    }

    return (
        <div>
            <Link to="/vendas">Voltar</Link >
            <h3>Atualizar Venda</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Vendedor: </label>
                    <input
                        type="text"
                        name="nomeVendedor"
                        placeholder='Nome Vendedor'
                        value={updNomeVendedor}
                        onChange={(e) => setNomeVendedor(e.target.value)}
                    />
                </div>
                <div>
                    <label>Cliente: </label>
                    <input
                        type="text"
                        name="nomeCliente"
                        placeholder='Nome Cliente'
                        value={updNomeCliente}
                        onChange={(e) => setNomeCliente(e.target.value)}
                    />
                </div>
                <div>
                    <label>Produto: </label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="produtoVendido"
                                value="Produto A"
                                checked={updProdutoVendido === 'Produto A'}
                                onChange={(e) => setProdutoVendido(e.target.value)}
                            />
                            Produto A
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="produtoVendido"
                                value="Produto B"
                                checked={updProdutoVendido === 'Produto B'}
                                onChange={(e) => setProdutoVendido(e.target.value)}
                            />
                            Produto B
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="produtoVendido"
                                value="Produto C"
                                checked={updProdutoVendido === 'Produto C'}
                                onChange={(e) => setProdutoVendido(e.target.value)}
                            />
                            Produto C
                        </label>
                    </div>
                </div>
                <div>
                    <label>Ultima Ação: </label>
                    <select
                        name="ultimaAcao"
                        value={updUltimaAcao}
                        onChange={(e) => setUltimaAcao(e.target.value)}
                    >
                        <option disabled defaultValue value="">Selecione uma ação</option>
                        <option value="Orçamento Enviado">Orçamento Enviado</option>
                        <option value="Pagamento Pendente">Pagamento Pendente</option>
                        <option value="Venda Concluída">Venda Concluída</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditarVenda