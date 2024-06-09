import './NovaVenda.css'
import React, { useState } from 'react'
import { useAuth } from '../../utils/auth';
import { addVenda } from '../../Store/VendasSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket,
    faAngleLeft,
    faFloppyDisk
} from '@fortawesome/free-solid-svg-icons';

function NovaVenda() {

    const { user } = useAuth();

    const [nomeVendedor, setNomeVendedor] = useState('');
    const [nomeCliente, setNomeCliente] = useState('');
    const [produtoVendido, setProdutoVendido] = useState('');
    const [ultimaAcao, setUltimaAcao] = useState('');
    const [valor, setValor] = useState('');
    const [msgAdd, setMsgAdd] = useState('');

    const vendas = useSelector((state) => state.vendas.vendas);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setMsgAdd('Venda adicionada com sucesso!');
        const valorConvertido = parseFloat(valor);
        dispatch(addVenda({ id: vendas.length + 1, nomeVendedor, nomeCliente, produtoVendido, ultimaAcao, valor: valorConvertido }));
        setTimeout(() => {
            setMsgAdd('');
            navigate('/vendas');
        }, 2200); // 2 segundos de espera
    }

    return (
        <>
            {user ? (
                <>
                    <div className='bg-page'>
                        <Link className="btn link-voltar" to="/vendas">
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </Link >
                        <div className='card-nova-venda'>
                            <h2>Adicionar nova venda</h2>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label>Vendedor: </label>
                                    <input
                                        required
                                        className='text'
                                        type="text"
                                        name="nomeVendedor"
                                        value={nomeVendedor}
                                        onChange={(e) => setNomeVendedor(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Cliente: </label>
                                    <input
                                        required
                                        className='text'
                                        type="text"
                                        name="nomeCliente"
                                        value={nomeCliente}
                                        onChange={(e) => setNomeCliente(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Produto: </label>
                                    <div className='radio'>
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
                                <div className='form-group'>
                                    <label>Ultima Ação: </label>
                                    <select
                                        required
                                        name="ultimaAcao"
                                        value={ultimaAcao}
                                        onChange={(e) => setUltimaAcao(e.target.value)}
                                    >
                                        <option disabled defaultValue value="">Selecione uma ação</option>
                                        <option value="Orçamento Enviado">Orçamento Enviado</option>
                                        <option value="Aguardando Pagamento">Aguardando Pagamento</option>
                                        <option value="Venda Concluída">Venda Concluída</option>
                                    </select>
                                </div>
                                <div className='form-group-valor'>
                                    <label>Valor: </label>
                                    <div className='valor-group'>
                                        <p>R$</p>
                                        <input
                                            required
                                            type="number"
                                            name="valor"
                                            value={valor}
                                            onChange={(e) => setValor(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <button className='btn-salvar'>
                                    Salvar <FontAwesomeIcon icon={faFloppyDisk} />
                                </button>
                            </form>
                        </div>
                    </div>
                    {msgAdd && (
                        <div className="msg-add">{msgAdd}</div>
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
    )
}

export default NovaVenda
