import { createSlice } from '@reduxjs/toolkit';
import mockVendas from './mockVendas';

const initialState = {
    vendas: mockVendas, // Estado inicial das vendas, pode ser uma lista vazia
    loading: false,
    error: null
};

const vendasSlice = createSlice({
    name: 'vendas',
    initialState,
    reducers: {
        fetchVendasStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchVendasSuccess(state) {
            state.loading = false;
            state.vendas = mockVendas;
        },
        fetchVendasFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        addVenda(state, action) {
            state.vendas.push(action.payload);
        },
        updateVenda(state, action) {
            
            const { id, nomeVendedor, nomeCliente, produtoVendido, ultimaAcao } = action.payload;

            const updVenda = state.vendas.find(vendas => vendas.id === id);

            if (updVenda) {
                updVenda.nomeVendedor = nomeVendedor;
                updVenda.nomeCliente = nomeCliente;
                updVenda.produtoVendido = produtoVendido;
                updVenda.ultimaAcao = ultimaAcao;
            }
        },
        deleteVenda(state, action) {
            const { id } = action.payload;
            state.vendas = state.vendas.filter(venda => venda.id !== id);
        }
    }
});

export const {
    fetchVendasStart,
    fetchVendasSuccess,
    fetchVendasFailure,
    addVenda,
    updateVenda,
    deleteVenda
} = vendasSlice.actions;

export default vendasSlice.reducer;
