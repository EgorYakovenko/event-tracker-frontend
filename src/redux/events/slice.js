import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents } from './operations';

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: bulder =>
    bulder
      .addCase(fetchEvents.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      }),
});

export const eventsReducer = eventsSlice.reducer;
