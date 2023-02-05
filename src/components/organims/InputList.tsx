import {useState,useEffect} from 'react'
import useFiltersDispatch from '../../redux/hooks/dispatchers/useFiltersDispatch';

import FilterSearch from "../molecules/FilterSearch"
import OptionsInput from "../molecules/OptionsInput"
import { OPTIONS_INPUT } from '../resources/constants_app';

const useInputList = () => {
    const {cleanTechnologyD,setTechnologyD} = useFiltersDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState(() => OPTIONS_INPUT)
    const [value, setValue] = useState('React')
 
    const onClick = () => {
        if(value===""){
            setIsOpen(!isOpen)
        }else{
            setIsOpen(true)
            setOptions(OPTIONS_INPUT)
        }
    }

    const onChangeInput = (e:any) => {
        setIsOpen(true)
        const searchClean = e.target.value.split(" ").join("").toLowerCase();      
        const newOptions = options.filter(option => option.text.split(" ").join("").toLowerCase().includes(searchClean))
        setValue(e.target.value)
        if (searchClean!=="" && newOptions.length > 0) {
            setOptions(newOptions)
        }else {
            setOptions(OPTIONS_INPUT)
        }
        if(searchClean===""){
            setIsOpen(false)
        }
       
    }

    const onChangeOption = (option:string) => {
        setValue(option)
        setIsOpen(false)
    }

    useEffect(() => {
        const findOption = OPTIONS_INPUT.findIndex(option => option.text.toLowerCase() === value.toLowerCase())
        if(findOption!==-1){
            setTechnologyD(value.toLowerCase())
        }

    }, [cleanTechnologyD, setTechnologyD, value])
    return {
        onClick,
        onChangeInput,
        onChangeOption,
        options,
        isOpen,
        value
    }
}
const InputList = () => {
   const {onClick,onChangeInput,onChangeOption,options,isOpen,value} = useInputList()
  
    return (
        <>
         <FilterSearch onClick={onClick} onChange={onChangeInput} value={value}/>
         <OptionsInput options={options} isOpen={isOpen} onChange={onChangeOption} />
        </>
    )
}
export default InputList;