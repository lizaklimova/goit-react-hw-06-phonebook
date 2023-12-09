import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterSearchReducer } from './filterSearchSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filterSearch: filterSearchReducer,
  },
});

export const persistor = persistStore(store);
