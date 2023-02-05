
import { SET_TECHNOLOGY, CLEAN_TECHNOLOGY } from './actions';
// reducer
const initialState = {
  technology:'react'
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
    default: {
      return state;
    }
  }
}
export default filters;