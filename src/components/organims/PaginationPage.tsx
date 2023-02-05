import { useEffect,useState } from "react";
import Pagination from "../molecules/Pagination/Pagination"

const PaginationPage = () => {

    const [pages, setPages] = useState(9);

    const handleResize = () => {
      const width = window.innerWidth;
        if(width > 1214){
            setPages(9);            
        }
        if(width <=736){
            setPages(4);
        }
        if(width <=300){
            setPages(2);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [pages]);
  
    console.log('>>', pages);
    
    return (<Pagination pages={pages}/>)
}

export default PaginationPage