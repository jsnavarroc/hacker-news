
import { IuseFiltersSelector } from '../../../components/types';
import { RootState } from '../../store.types';
import useAppSelector from '../useSelector';


const technology = (state: RootState) => state.filters.technology;
const tap = (state: RootState) => state.filters.tap;

const useFiltersSelector = ():IuseFiltersSelector => {
    return {
        technology: useAppSelector(technology),
        tap: useAppSelector(tap),
    };
};

export default useFiltersSelector;
