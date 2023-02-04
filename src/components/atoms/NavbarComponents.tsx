import styled from "styled-components";
import { TitleLogo } from "./Paragraph";


export const Nav = styled.div`
  width: 90rem;
  height: 7.125rem;
  margin: 0 0 4.375rem;
  padding: 2.75rem 67.625rem 2.625rem 4.375rem;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    padding: 2.75rem 67.625rem 2.625rem 1rem;
    transition: all 0.3s ease-in-out;
  }
`;


export const Logo = styled(TitleLogo)`
  padding: 1rem 0;
  color:  ${props => props.theme.color};
  text-decoration: none;
  width: 13rem;
  height: 1.75rem;
  object-fit: contain;
`;


