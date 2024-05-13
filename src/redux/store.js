import { configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from './events/slice';
import { filtersReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    filters: filtersReducer,
  },
});
