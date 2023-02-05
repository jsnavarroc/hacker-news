import { setTechnology, cleanTechnology, setTapList, cleanTapList, pageSelected } from "../../reducers/filters/actions";
import useActions from "../useActions";

const useFiltersDispatch = () => {
    const setTechnologyD = useActions(setTechnology);
    const cleanTechnologyD = useActions(cleanTechnology);
    const setTapListD = useActions(setTapList);
    const cleanTapListD = useActions(cleanTapList);
    const setpageSelectedD= useActions(pageSelected);
    return {
      setTechnologyD,
      cleanTechnologyD,
      setTapListD,
      cleanTapListD,
      setpageSelectedD
    };
};

export default useFiltersDispatch;
