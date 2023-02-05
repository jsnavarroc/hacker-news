
import { RootState } from '../../store.types';
import useAppSelector from '../useSelector';


const newsState = (state: RootState) => state.news;

const useSkillsSelector = () => {
    return {
        newsState: useAppSelector(newsState),
    };
};

export default useSkillsSelector;
