import './Vendas.css'
import { useAuth } from '../../utils/auth';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchVendasStart,
    fetchVendasSuccess,
    fetchVendasFailure,
    deleteVenda
} from '../../Store/VendasSlice';
import {
    faRightFromBracket,
    faAngleLeft,
    faTrashCan,
    faFilePen
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { calculateTotalVendas } from './VendasUtils'; // Importa as funções

const Vendas = () => {

    const { user } = useAuth();
    const vendasState = useSelector(state => state.vendas);
    const { vendas, loading, error } = vendasState;
    const dispatch = useDispatch();

    const [showConfirm, setShowConfirm] = useState(false);
    const [vendaToDelete, setVendaToDelete] = useState(null);
    const [msgDel, setMsgDel] = useState('');

    const handleDelete = (id) => {
        setVendaToDelete(id);
        setShowConfirm(true);
    }

    const confirmDelete = () => {
        setMsgDel('Venda deletada com sucesso!');
        dispatch(deleteVenda({ id: vendaToDelete }));
        setShowConfirm(false);
        setVendaToDelete(null);
        setTimeout(() => {
            setMsgDel('');
        }, 2200); // 2 segundos de espera
    }

    const cancelDelete = () => {
        setShowConfirm(false);
        setVendaToDelete(null);
    }

    useEffect(() => {
        if (vendas.length === 0) {
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

    const totalVendas = calculateTotalVendas(vendas);

    return (
        <>
            {user ? (
                <>
                    <div className="bg-page">
                        <Link className="btn link-voltar" to="/landing-page">
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </Link >
                        <div className="card-vendas">
                            <div className="title">
                                <h2>Gerenciamento de Vendas</h2>
                                <Link className="btn" to="/vendas/nova-venda">Cadastrar</Link >
                            </div>
                            <div className='tabela'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Vendedor</th>
                                            <th>Cliente</th>
                                            <th>Produto</th>
                                            <th>Status</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vendas.map(venda => (
                                            <React.Fragment key={venda.id}>
                                                <tr>
                                                    <td>{venda.id}</td>
                                                    <td>{venda.nomeVendedor}</td>
                                                    <td>{venda.nomeCliente}</td>
                                                    <td>{venda.produtoVendido}</td>
                                                    <td>{venda.ultimaAcao}</td>
                                                    <td>R$ {venda.valor}</td>
                                                    <td className="action-buttons">
                                                        <Link className="btn action" to={`/vendas/editar-venda/${venda.id}`}>
                                                            <FontAwesomeIcon icon={faFilePen} />
                                                        </Link>
                                                        <button className="" onClick={() => handleDelete(venda.id)}>
                                                            <FontAwesomeIcon icon={faTrashCan} />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="divider"></tr>
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5>Total:</h5>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div className="total-vendas">
                                                    <h5>R$ {totalVendas}</h5>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr className="divider"></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    {showConfirm && (
                        <div className="modal">
                            <div className="modal-content">
                                <h3>Confirmar Exclusão</h3>
                                <p>Você tem certeza que deseja excluir esta venda?</p>
                                <button className="btn" onClick={confirmDelete}>Sim</button>
                                <button className="btn" onClick={cancelDelete}>Não</button>
                            </div>
                        </div>
                    )}
                    {msgDel && (
                        <div className="msg-del">{msgDel}</div>
                    )}
                </>
            ) : (
                <>
                    <div className="bg-page">Usuário não logado. Favor, realizar login</div>
                    <Link className="btn link-voltar" to='/login'>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </Link>
                </>
            )}
        </>
    );
};

export default Vendas;
