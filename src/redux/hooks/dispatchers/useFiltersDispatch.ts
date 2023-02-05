import { setTechnology, cleanTechnology, setTapList, cleanTapList } from "../../reducers/filters/actions";
import useActions from "../useActions";

const useFiltersDispatch = () => {
    const setTechnologyD = useActions(setTechnology);
    const cleanTechnologyD = useActions(cleanTechnology);
    const setTapListD = useActions(setTapList);
    const cleanTapListD = useActions(cleanTapList);
    return {
      setTechnologyD,
      cleanTechnologyD,
      setTapListD,
      cleanTapListD,
    };
};

export default useFiltersDispatch;
