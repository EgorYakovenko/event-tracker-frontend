import { createSelector } from '@reduxjs/toolkit';

import { selectNameFilter } from '../filter/selectors';

export const selectLoading = state => state.events.isLoading;

export const selectFilter = state => state.events.filter;

export const selectAllEvents = state => state.events.items;

export const selectError = state => state.events.error;

export const selectEvents = state => state.events.items;

export const selectFilteredEvents = createSelector(
  [selectEvents, selectNameFilter],
  (events, filter) => {
    return events.filter(event =>
      event.title.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
