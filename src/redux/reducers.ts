import { combineReducers } from '@reduxjs/toolkit';
import news from './reducers/news/news'
import favorites from './reducers/favorites/favorites'
import filters from './reducers/filters/filters'

const rootReducer = combineReducers({
    news,
    favoritesIDs:favorites,
    filters
});

export default rootReducer;
