
import { IuseFiltersSelector } from '../../../components/types';
import { RootState } from '../../store.types';
import useAppSelector from '../useSelector';


const technology = (state: RootState) => state.filters.technology;

const useFiltersSelector = ():IuseFiltersSelector => {
    return {
        technology: useAppSelector(technology),
    };
};

export default useFiltersSelector;
