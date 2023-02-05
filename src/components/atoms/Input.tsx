import styled from "styled-components";
import { Triangle } from '../../assets/icons/Icons'
import { BLUE_COLOR } from "../resources/constants_colors";
export const ContainerInput = styled.div`
  display: flex;
  width: 15rem;
  height: 2rem;
  margin: 2.375rem 2.5rem;
  margin-left:  4.375rem;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    margin:  2.5rem 1rem 2.375rem 1rem ;
    width: auto;
    min-width: 12rem;
    max-width: 15rem;
    transition: all 0.3s ease-in-out;
  }
`;
export const InputFilter = styled.input`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: none;
  width: 100%;
  height: 100%;
  margin-left: 0;
  font-family: Roboto;
  padding-left:5px;
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

export const ButtonList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 10%;
    cursor: pointer;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    &:hover {
      background-color: ${BLUE_COLOR};
      & > svg {
        fill:  white;
      }
    };
`
export const Rectangle =  styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid black;
` 

export const TriangleIcon = styled(Triangle)`
  transform: rotate(180deg);
  width: 0.9rem;
`


