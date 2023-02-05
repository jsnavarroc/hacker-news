
import { SET_TECHNOLOGY, CLEAN_TECHNOLOGY, SET_TAP_LIST, CLEAN_TAP_LIST } from './actions';
// reducer
const initialState = {
  technology:'react',
  tap:'All'
};

 const filters =  (state = initialState, action:any) => {
  let stateCopy = { ...state };
  switch (action?.type) {
    case SET_TECHNOLOGY: {
      stateCopy.technology = action?.payload?.technology as string ;
      return stateCopy;
    }
    case CLEAN_TECHNOLOGY: {
      stateCopy.technology =  initialState.technology;
      return stateCopy;
    }
    case SET_TAP_LIST: {
      stateCopy.tap =  action?.payload?.tap as string;
      return stateCopy;
    }
    case CLEAN_TAP_LIST: {
      stateCopy.tap =  initialState.tap;
      return stateCopy;
    }
    default: {
      return state;
    }
  }
}
export default filters;