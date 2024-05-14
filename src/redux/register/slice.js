import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const registerSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
  },
  extraReducers: builder =>
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
    }),
});

export default registerSlice.reducer;
