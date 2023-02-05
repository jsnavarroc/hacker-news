/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypedUseSelectorHook } from 'react-redux';

import store from './';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppSelector = TypedUseSelectorHook<RootState>;

export type Action<T = any> = {
    type: string;
    payload?: T;
};

export type ActionFunction<T = any, K = any> = (state: T, action: Action<K>) => void;
