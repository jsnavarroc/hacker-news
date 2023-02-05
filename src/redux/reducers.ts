import { combineReducers } from '@reduxjs/toolkit';
import news from './reducers/news/news'
import favorites from './reducers/favorites/favorites'

const rootReducer = combineReducers({
    news,
    favoritesIDs:favorites
});

export default rootReducer;
