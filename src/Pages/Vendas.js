import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Vendas.css'
import {
    fetchVendasStart,
    fetchVendasSuccess,
    fetchVendasFailure,
    deleteVenda
} from '../Store/VendasSlice';

const Vendas = () => {
    
    const vendasState = useSelector(state => state.vendas);
    const { vendas, loading, error } = vendasState;
    
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteVenda({id: id}));
    }

    useEffect(() => {
        if (vendas.length === 0) {
            // Se não houve nenhuma venda no estado Redux, buscamos os dados mockados
            dispatch(fetchVendasStart());
            try {
                dispatch(fetchVendasSuccess());
            } catch (err) {
                dispatch(fetchVendasFailure(err.toString()));
            }
        }
    }, [dispatch, vendas]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div class="bg-page">
            <Link class="btn link-voltar" to="/landing-page">VOLTAR</Link >
            <div class="tabela">
                <h1>Gerenciamento de Vendas</h1>
                <Link class="btn" to="/vendas/nova-venda">Nova Venda</Link >
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Vendedor</th>
                        <th>Cliente</th>
                        <th>Produto</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                    {vendas.map((venda, index) => (
                        <>
                            <tr key={index}>
                                <td>{venda.id}</td>
                                <td>{venda.nomeVendedor}</td>
                                <td>{venda.nomeCliente}</td>
                                <td>{venda.produtoVendido}</td>
                                <td>{venda.ultimaAcao}</td>
                                <td>
                                    <Link class="btn action" to={`/vendas/editar-venda/${venda.id}`}>Editar</Link>
                                    <button class="action" onClick={() => handleDelete(venda.id)}>Excluir</button>
                                </td>
                            </tr>
                            <td class="divider"></td>
                        </>
                    ))}
                    </tbody>
                </table>

            </div>
            
        </div>
    );
};

export default Vendas;
