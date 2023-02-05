import { updateFavorites } from "../../reducers/favorites/actions";
import useActions from "../useActions";

const useFavoritesIDsDispatch = () => {
    const updateFavoritesD = useActions(updateFavorites);
    return {
        updateFavoritesD,
    };
};

export default useFavoritesIDsDispatch;
