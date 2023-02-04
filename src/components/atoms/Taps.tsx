import styled from "styled-components";
import { BLUE_COLOR } from "../resources/constants_colors";

interface TapProps {
    active?: boolean;
}
export const Tap = styled.div<TapProps>`
  min-width: 6.125rem;
  height: 1.938rem;

  padding: 0.188rem 1rem 0 1.063rem;
  border-radius: 2px;
  border: 1px solid ${(props) => (props.active ? `${BLUE_COLOR}` : '#d6d6d6')};
  text-align: center;
  cursor: pointer;
  
  &:hover {
    border-color: ${BLUE_COLOR};
    & > span {
      color:  ${BLUE_COLOR};
    }
  };
  & > span{
    color: ${props => (props.active ? `${BLUE_COLOR}` : '#606060')};
  };
`;

export  const BoxTaps = styled.div`
   display: flex;
   justify-content: center;
   @media (max-width: 212px) {
    display: block;
    min-width: 12rem;
    margin:  0 1rem 0  1rem;
  }
`