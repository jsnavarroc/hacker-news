import {useState, useEffect} from 'react';
import axios from "axios";
import useDataNewsDispatch from '../../../redux/hooks/dispatchers/useNewsDispatch';
import useFiltersSelector from '../../../redux/hooks/selectors/useFiltersSelector';
import { IuseFiltersSelector, IuseGetData } from '../../types';
import useFavoritesIDsSelector from '../../../redux/hooks/selectors/useFavoritesIDsSelector';
import { ALL, MY_FAVES } from '../../resources/constants_app';


const getData = async (filters:IuseFiltersSelector, setProcess: React.Dispatch<React.SetStateAction<IuseGetData>>) => {
    setProcess((prev) => ({
        ...prev,
        loading: true,
    }));
    
    try {
        const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${filters.technology}&page=0`);
        const dataFilter = response.data?.hits?.map((news:any) => ({
            created_at:news?.created_at,
            story_title:news?.story_title,
            author: news?.author,
            objectID: news?.objectID,
            parent_id: news?.parent_id,
            story_id: news?.story_id,
            story_url: news?.story_url,
            created_at_i: news?.created_at_i,
        }))
        setProcess((prev) => ({
            ...prev,
            loading: false,
            response: dataFilter,
        }));
    } catch (error) {
        setProcess((prev) => ({
            ...prev,
            loading: false,
            error: {
                obj: error,
                code: "ErrorExternalApi",
            },
        })); 
    }

 }


const useGetData = () => {
    const {setDataNewsD} = useDataNewsDispatch();
    const filters = useFiltersSelector()
    const {favoritesIDs} = useFavoritesIDsSelector()
    const [process, setProcess] = useState<IuseGetData>(() =>({
        loading: false,
        response: [],
        error: null,
      }));

      useEffect(() => {
        if(filters.tap===ALL){
          getData(filters, setProcess);
          return () => {
            setProcess({
              loading: false,
              response: [],
              error: null,
            });
          };
        }
        if(filters.tap===MY_FAVES){
            setProcess((prev) => ( {...prev, response: favoritesIDs}));
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [filters.technology, filters.tap])
 
      useEffect(() => {
        if(process.loading === false && (process?.response?.length > 0 || process.error)){
          setDataNewsD(process);
        }
      }, [process])
      


      return process;

}

export default useGetData;