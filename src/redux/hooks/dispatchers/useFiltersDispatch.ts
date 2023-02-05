import { setTechnology, cleanTechnology } from "../../reducers/filters/actions";
import useActions from "../useActions";

const useFiltersDispatch = () => {
    const setTechnologyD = useActions(setTechnology);
    const cleanTechnologyD = useActions(cleanTechnology);
    return {
        setTechnologyD,
        cleanTechnologyD
    };
};

export default useFiltersDispatch;
