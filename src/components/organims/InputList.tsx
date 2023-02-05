import {useState} from 'react'
import { angular, react, vue } from "../../assets/icons/Icons";

import FilterSearch from "../molecules/FilterSearch"
import OptionsInput from "../molecules/OptionsInput"
import { OptionI } from '../types';

const InputList = () => {

    const [isOpen, setIsOpen] = useState(false);
    const options:OptionI[] = [
      {
        icon: angular,
        text: "Angular",
      },
      {
        icon: react,
        text: "React",
      },     
      {
        icon: vue,
        text: "Vue",
      },
    ];
    const onClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
         <FilterSearch onClick={onClick}/>
         <OptionsInput options={options} isOpen={isOpen}/>
        </>
    )
}
export default InputList;