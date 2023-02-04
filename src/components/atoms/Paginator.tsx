import styled from "styled-components";
import { BLUE_COLOR, GREY_COLOR } from "../resources/constants_colors";
interface PageOptionProps {
    active?: boolean;
}
export const PageOption = styled.div<PageOptionProps>`
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
  padding: 0.375rem 0.75rem 0.25rem;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  background-color: ${props => (props.active ? `${BLUE_COLOR}` : '#fff')};
  cursor: pointer;
  text-align: center;
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
    & > span  {
      color:  white;
    }
  };
  & > span {
    width: 0.5rem;
    height: 1.375rem;
    color: ${props => (props.active ? `${BLUE_COLOR}` : '#606060')};
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
