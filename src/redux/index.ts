import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistConfig: PersistConfig<any> = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['favoritesIDs'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        });
    },
});

export const persistor = persistStore(store);

export default store;
