import { useSelector } from 'react-redux';

import { AppSelector } from '../../redux/store.types';

const useAppSelector: AppSelector = useSelector;

export default useAppSelector;
