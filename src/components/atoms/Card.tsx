import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  cursor: pointer;
  height: 5.625rem;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 12rem;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 360px) {
    height: auto;
    min-height: 5.625rem;
    transition: all 0.3s ease-in-out;
  }
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.875rem 2.5rem; 
  margin:  0 1rem 0  4.375rem;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin:  0 1rem 0  1rem;
    transition: all 0.3s ease-in-out;
  }
`;



export const ContentCard = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    @media (max-width: 360px) {
      display: block;
    }
`;

export const LeftColumn = styled.div`
   border-radius: 6px;
   width: 100%;
   padding: 0.875rem 0 0 1.625rem;
`;



export const RightColumn = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgba(96, 96, 96, 0.06);
   border-radius: 6px;
   width: 4.25rem;
   @media (max-width: 360px) {
    width: 100%;
    padding:  1rem;
   }

`;

export const TitleCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    margin-right: 0.5rem;
  }  
`;


export const IconContainer = styled.div`
  width: 24px;
  height: 22px;
  position: relative;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  img {
    width: 24px;
    height: 22px;
  }
`;
