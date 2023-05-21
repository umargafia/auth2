import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!token,
    user: JSON.stringify(user),
    token,
    loading: false,
  },
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
    loginUser: (state, action) => {
      state.loading = true;
      const user = action.payload;
      state.user = JSON.stringify(user.data);
      state.token = user.token;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(user.data));
      localStorage.setItem('token', user.token);
      state.loading = false;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.clear();
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
