import { ButtonList, ContainerInput, InputFilter, TriangleIcon } from "../atoms/Input";

const FilterSearch = () => {
    return(
       <ContainerInput>
        <InputFilter/>
        <ButtonList>
            <TriangleIcon />
        </ButtonList>
       </ContainerInput> 
    )
}

export default FilterSearch;