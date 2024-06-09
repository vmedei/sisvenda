import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mockUsers from './mockUsers';  // Importa os dados mockados

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        // Simulação de uma chamada de API com dados mockados
        const user = mockUsers.find(
            user => user.email === userCredentials.email && user.password === userCredentials.password
        );

        if (user) {
            // Simulação de uma resposta bem-sucedida
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } else {
            // Simulação de uma falha na autenticação
            throw new Error('Credenciais inválidas');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;