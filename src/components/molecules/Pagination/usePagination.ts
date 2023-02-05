import { useState, useCallback, useEffect } from "react";
import useFiltersDispatch from "../../../redux/hooks/dispatchers/useFiltersDispatch";
import { IPaginationProps } from "../../types";

const usePagination = (props: IPaginationProps) => {
  const [pageSelected, setPageSelected] = useState(0);  
  const {setpageSelectedD} = useFiltersDispatch()
  const [numberPages, setNumberPages] = useState({start:0, end:0})


  useEffect(() => {
    setNumberPages({ start: 0, end: props.pages });
    
  }, [props.pages])

  const onIncrease = () => {
    setPageSelected(prev => ++prev)
    if(pageSelected===numberPages.end-1 && numberPages.end<50){
      setNumberPages(prev =>{
        const add = (numberPages.end+props.pages) > 50 ? 50-numberPages.end:props.pages;
        return{
          start:prev.start+props.pages, 
          end:prev.end+add
        }
      })
    }
  };

 const onDecrease = () => {
    setPageSelected(prev => prev!==0?--prev:0)
    if(pageSelected===numberPages.start && numberPages.start>0){
      const less = 50-numberPages.end === 0 ? (50-numberPages.start):props.pages;

      setNumberPages(prev =>({start:prev.start-props.pages, end:prev.end-less}))
    }
  }
  const onAddPages = () => {
    const add = (numberPages.end+props.pages) > 50 ? 50-numberPages.end:props.pages;
    setNumberPages(prev =>({start:prev.start+props.pages, end:prev.end+add}))
    setPageSelected(numberPages.start+props.pages)
  }
  const onLessPages = () => {
    const less = 50-numberPages.end === 0 ? (50-numberPages.start):props.pages;
    setNumberPages(prev =>({start:prev.start-props.pages, end:prev.end-less}))
    setPageSelected(numberPages.start-props.pages)
  }
  const onSelectPage = useCallback((key:number) => {
    setPageSelected(key)
  }, []); 

  console.log('>>>', props.pages);
  useEffect(() => {
    setpageSelectedD(pageSelected)
  },[pageSelected])

  return {
    numberPages,
    pageSelected,
    onIncrease,
    onDecrease,
    onAddPages,
    onLessPages,
    onSelectPage,
  }
 
}

export default usePagination;