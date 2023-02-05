import { ButtonList, ContainerInput, InputFilter, TriangleIcon } from "../atoms/Input";
interface IFilterSearchProps {
    onClick:() => void
}
const FilterSearch = (props:IFilterSearchProps) => {
    return(
       <ContainerInput>
        <InputFilter/>
        <ButtonList onClick={props.onClick}>
            <TriangleIcon />
        </ButtonList>
       </ContainerInput> 
    )
}

export default FilterSearch;