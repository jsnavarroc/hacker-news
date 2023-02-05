
import { UPDATE_FAVORITES } from './actions';
// reducer
const initialState: number[] = [];

 const favorites =  (state = initialState, action:any) => {
  let stateCopy = { ...state };
  switch (action?.type) {
    case UPDATE_FAVORITES: {
      stateCopy = action?.payload?.favoritesIDs as number[] ;
      return stateCopy;
    }
  
    default: {
      return state;
    }
  }
}
export default favorites;