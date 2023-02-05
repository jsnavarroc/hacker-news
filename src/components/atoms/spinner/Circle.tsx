import React from 'react'
import styled, { Keyframes, keyframes } from 'styled-components'
import { BLUE_COLOR } from '../../resources/constants_colors';

export const BoxCenterContainer = styled.div`
  width: 100%;
  display: flex;
  height: 98vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const motion = (): Keyframes => keyframes`
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`

interface CircleProps {
  color?: string;
  size?: number;
  sizeUnit?: string;
}



const CircleSpinner = styled.div<CircleProps>`
  display: inline-block;
  width: ${p => `${p.size}${p.sizeUnit}`};
  height: ${p => `${p.size}${p.sizeUnit}`};
  margin: 6px;
  z-index:21;
  border-radius: 50%;
  background: ${p => p.color};
  animation: ${() => motion()} 3.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index:20;
  justify-content: center;
  @supports (backdrop-filter: blur(5px)) or (--webkit-backdrop-filter: blur(5px)) {
    & {
      background-color: rgba(0, 195, 255, 0.2);
      backdrop-filter: blur(5px);
    }
  }
`;

const Circle: React.FC<CircleProps> = ({ color, size, sizeUnit }) => (
  <Overlay>
    <BoxCenterContainer>
      <CircleSpinner color={color} size={size} sizeUnit={sizeUnit} />
    </BoxCenterContainer>
  </Overlay>
)

Circle.defaultProps = {
  size: 50,
  color: BLUE_COLOR,
  sizeUnit: 'px'
}

export default Circle