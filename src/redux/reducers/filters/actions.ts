/* action types */


export const SET_TECHNOLOGY = 'johan/SET_TECHNOLOGY';
export const CLEAN_TECHNOLOGY= 'johan/CLEAN_TECHNOLOGY';

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


