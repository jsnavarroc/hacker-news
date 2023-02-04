import styled from "styled-components";

export const Input = styled.div`
   width: 15rem;
  height: 2rem;
  margin: 2.375rem 2.5rem;
  margin-left:  4.375rem;
  padding: 0.313rem 0.75rem 0.313rem 0.75rem;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    margin:  2.5rem 1rem 2.375rem 1rem ;
    width: auto;
    min-width: 12rem;
    max-width: 15rem;
    transition: all 0.3s ease-in-out;
  }
`;
