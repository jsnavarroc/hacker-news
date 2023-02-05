/* action types */


export const UPDATE_FAVORITES = 'johan/UPDATE_FAVORITES';


export const updateFavorites = (favoritesIDs:number[]) => {
    return {
        type: UPDATE_FAVORITES,
        payload:{
            favoritesIDs
        }
    };
};
