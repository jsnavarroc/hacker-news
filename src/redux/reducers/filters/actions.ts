/* action types */


export const SET_TECHNOLOGY = 'johan/SET_TECHNOLOGY';
export const CLEAN_TECHNOLOGY= 'johan/CLEAN_TECHNOLOGY';
export const SET_TAP_LIST = 'johan/SET_TAP_LIST';
export const CLEAN_TAP_LIST= 'johan/CLEAN_TAP_LIST';

/* Action Creators */
export const setTechnology = (technology:string) => {
    return {
        type: SET_TECHNOLOGY,
        payload: {
            technology,
        },
    };
};
export const cleanTechnology = () => {
    return {
        type: CLEAN_TECHNOLOGY,
    };
};
export const setTapList = (tap:string) => {
    return {
        type: SET_TAP_LIST,
        payload: {
            tap,
        },
    };
};
export const cleanTapList = () => {
    return {
        type: CLEAN_TAP_LIST,
    };
};


