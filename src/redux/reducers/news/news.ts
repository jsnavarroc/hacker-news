
import { SET_DATA, CLEAN_DATA } from './actions';
// reducer
const initialState = {
};

 const news =  (state = initialState, action:any) => {
  let stateCopy = { ...state };
  switch (action?.type) {
    case SET_DATA: {
      stateCopy = {...action?.payload?.process} ;
      return stateCopy;
    }
    case CLEAN_DATA: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
export default news;