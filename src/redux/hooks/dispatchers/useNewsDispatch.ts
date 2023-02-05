import { cleanDataNews, setDataNews } from "../../reducers/news/actions";
import useActions from "../useActions";

const useDataNewsDispatch = () => {
    const setDataNewsD = useActions(setDataNews);
    const cleanDataNewsD = useActions(cleanDataNews);
    return {
        setDataNewsD,
        cleanDataNewsD,
    };
};

export default useDataNewsDispatch;
