import {useState, useEffect} from 'react';
import axios, { AxiosResponse } from "axios";
import useDataNewsDispatch from '../../../redux/hooks/dispatchers/useNewsDispatch';

interface IuseGetData {
    loading: boolean;
    response:  [];
    error: unknown;
}

const getData = async (setProcess: React.Dispatch<React.SetStateAction<IuseGetData>>) => {
    setProcess((prev) => ({
        ...prev,
        loading: true,
    }));
    
    try {
        const response = await axios.get("https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0");
      
        const dataFilter = response.data?.hits?.map((news:any) => ({
            created_at:news?.created_at,
            story_title:news?.story_title,
            author: news?.author,
            story_id: news?.story_id,
            story_url: news?.story_url,
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
    const [process, setProcess] = useState<IuseGetData>({
        loading: false,
        response: [],
        error: null,
      });

      useEffect(() => {
        getData(setProcess)
      }, [])
   
      useEffect(() => {
        if(process.loading === false && (process?.response?.length > 0 || process.error)){
          setDataNewsD(process);
        }
      }, [process])
      


      return process;

}

export default useGetData;