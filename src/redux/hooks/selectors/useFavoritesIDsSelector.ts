
import { RootState } from '../../store.types';
import useAppSelector from '../useSelector';


const favoritesIDs = (state: RootState) => state.favoritesIDs;

const useFavoritesIDsSelector = () => {
    return {
        favoritesIDs: useAppSelector(favoritesIDs),
    };
};

export default useFavoritesIDsSelector;
