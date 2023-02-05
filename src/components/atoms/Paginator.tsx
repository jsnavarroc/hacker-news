import styled from "styled-components";
import { Triangle } from "../../assets/icons/Icons";
import { BLUE_COLOR, GREY_COLOR } from "../resources/constants_colors";
interface PageOptionProps {
    active?: boolean;
}
export const PageOption = styled.button<PageOptionProps>`
  min-width: 2rem;
  margin-left: 0.5rem;
  padding: 0.375rem 0.75rem 0.25rem;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
  background-color: ${props => (props.active ? `${BLUE_COLOR}` : '#fff')};
  cursor: pointer;
  display: flex;
  place-items: center;
  &.pageOption:hover{
    border-color: ${BLUE_COLOR};
    background-color: ${BLUE_COLOR};
    & > span  {
      color:  white;
    }
  };
  &.pageChangeOption:hover{
    border-color: ${GREY_COLOR};
    background-color: ${GREY_COLOR};
    & > svg  {
      fill:  white;
    }
  };
  &.pageInfinityOption:hover{
    border-color: ${GREY_COLOR};
    background-color: ${GREY_COLOR};
    & > span  {
      color:  white;
    }
  };
  & > span {
    user-select:none;
    /* width: 0.5rem; */
    height: 1.375rem;
    color: ${props => (props.active ? `white` : `${GREY_COLOR}`)};
  }
`;

export const BoxPagination = styled.div`
   display: flex;
   justify-content: center;
 
   
`

export const ContainerPagination = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 6rem;
   margin-bottom: 6rem;
`

export const TriangleIconLeft = styled(Triangle)`
  transform: rotate(270deg);
  width: 0.9rem;
`

export const TriangleIconRight = styled(Triangle)`
  transform: rotate(90deg);
  width: 0.9rem;
`
