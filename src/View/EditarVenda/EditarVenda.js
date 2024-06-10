import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../utils/auth';
import { updateVenda } from '../../Store/VendasSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faRightFromBracket, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function EditarVenda() {

    const { user } = useAuth();

    const { id } = useParams();
    const vendas = useSelector((state) => state.vendas);
    const venda = vendas.vendas.filter(f => f.id == id);

    const { nomeVendedor, nomeCliente, produtoVendido, ultimaAcao, valor } = venda[0];

    const [updNomeVendedor, setNomeVendedor] = useState(nomeVendedor);
    const [updNomeCliente, setNomeCliente] = useState(nomeCliente);
    const [updProdutoVendido, setProdutoVendido] = useState(produtoVendido);
    const [updUltimaAcao, setUltimaAcao] = useState(ultimaAcao);
    const [updValor, setValor] = useState(valor);
    const [msgUpd, setMsgUpd] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setMsgUpd('Venda atualizada com sucesso!');
        const valorConvertido = parseFloat(updValor);
        dispatch(updateVenda({
            id: id,
            nomeVendedor: updNomeVendedor,
            nomeCliente: updNomeCliente,
            produtoVendido: updProdutoVendido,
            ultimaAcao: updUltimaAcao,
            valor: valorConvertido,
        }));
        setTimeout(() => {
            setMsgUpd('');
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

                            <h2>Atualizar venda</h2>

                            <form onSubmit={handleSubmit}>

                                <div className='form-group'>
                                    <label>Vendedor: </label>
                                    <input
                                        required
                                        className='text'
                                        type="text"
                                        name="nomeVendedor"
                                        value={updNomeVendedor}
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
                                        value={updNomeCliente}
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

                                <div className='form-group'>
                                    <label>Ultima Ação: </label>
                                    <select
                                        required
                                        name="ultimaAcao"
                                        value={updUltimaAcao}
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
                                            value={updValor}
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
                    {msgUpd && (
                        <div className="msg-add">{msgUpd}</div>
                    )}
                </>
            ) : (
                // Se o usuário não estiver logado, é exibida uma mensagem para fazer login e um botão com link para a página de login.
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

export default EditarVenda