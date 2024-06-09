import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { addVenda } from '../Store/VendasSlice';
import { useDispatch, useSelector } from 'react-redux';

function NovaVenda() {

    const [nomeVendedor, setNomeVendedor] = useState('');
    const [nomeCliente, setNomeCliente] = useState('');
    const [produtoVendido, setProdutoVendido] = useState('');
    const [ultimaAcao, setUltimaAcao] = useState('');

    const vendas = useSelector((state) => state.vendas.vendas);
    console.log(vendas);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addVenda({ id: parseInt(vendas.length + 1), nomeVendedor, nomeCliente, produtoVendido, ultimaAcao }));
        navigate('/vendas');
    }

    return (
        <div>
            <Link to="/vendas">Voltar</Link >
            <h3>Adicionar nova Venda</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Vendedor: </label>
                    <input
                        type="text"
                        name="nomeVendedor"
                        placeholder='Nome Vendedor'
                        value={nomeVendedor}
                        onChange={(e) => setNomeVendedor(e.target.value)}
                    />
                </div>
                <div>
                    <label>Cliente: </label>
                    <input
                        type="text"
                        name="nomeCliente"
                        placeholder='Nome Cliente'
                        value={nomeCliente}
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
                                checked={produtoVendido === 'Produto A'}
                                onChange={(e) => setProdutoVendido(e.target.value)}
                            />
                            Produto A
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="produtoVendido"
                                value="Produto B"
                                checked={produtoVendido === 'Produto B'}
                                onChange={(e) => setProdutoVendido(e.target.value)}
                            />
                            Produto B
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="produtoVendido"
                                value="Produto C"
                                checked={produtoVendido === 'Produto C'}
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
                        value={ultimaAcao}
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

export default NovaVenda
