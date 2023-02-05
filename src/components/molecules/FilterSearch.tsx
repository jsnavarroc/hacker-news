import { ButtonList, ContainerInput, InputFilter, TriangleIcon } from "../atoms/Input";
interface IFilterSearchProps {
    onClick:(e:any) => void;
    onChange:(e:any) => void;
    value:string;
}
const FilterSearch = (props:IFilterSearchProps) => {
    return(
       <ContainerInput>
        <InputFilter  onChange={props.onChange} placeholder={"Search technology"} value={props.value}/>
        <ButtonList onClick={props.onClick}>
            <TriangleIcon />
        </ButtonList>
       </ContainerInput> 
    )
}

export default FilterSearch;