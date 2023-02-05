import { motion } from "framer-motion";
import styled from "styled-components";


export const BoxOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`; 

export const IconOption = styled.img`
  width: 1.5rem;
  margin-right:  0.813rem;
`


export const ContainerOptions =  styled.div`
  position: relative;
  width: 15rem;
`;
export const ModalContainer =styled(motion.div)`
  position: absolute;
  left: 28.7%;
  transform: translateY(-24.9%);
  width: 100%;
  padding: 0rem 0.5rem 0rem 0.625rem;
  box-shadow: 0 2px 2px 0 #dad8d8;
  background-color: #fff; 
  z-index: 2;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    left: 6.7%;
    transition: all 0.3s ease-in-out;
  }
`;

