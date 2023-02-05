/* action types */


export const SET_DATA = 'johan/SET_DATA';
export const CLEAN_DATA = 'johan/CLEAN_DATA';

/* Action Creators */
export const setDataNews = (process:any) => {
    return {
        type: SET_DATA,
        payload: {
            process,
        },
    };
};
export const cleanDataNews = () => {
    return {
        type: CLEAN_DATA,
    };
};


