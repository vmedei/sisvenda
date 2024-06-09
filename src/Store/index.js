import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import VendasReducer from './VendasSlice';
import { loadState, saveState } from './localStorage'; // Importando funções de persistência

const persistedState = loadState(); // Carregando o estado persistido

const store = configureStore({
    reducer: {
        user: UserReducer,
        vendas: VendasReducer,
    },
    preloadedState: persistedState // Usando o estado persistido na inicialização da store
});

store.subscribe(() => {
  saveState({
    user: store.getState().user, // Salvando apenas o estado do usuário
    vendas: store.getState().vendas // Salvando apenas o estado das vendas
  });
});

export default store;
