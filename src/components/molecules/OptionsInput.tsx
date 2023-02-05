import { BoxOption, ContainerOptions, IconOption, ModalContainer } from "../atoms/OptionList";
import { OptionInputText } from "../atoms/Paragraph";
import { IOptionsInputProps } from '../types';


const OptionsInput = (props:IOptionsInputProps) => {
    const {options, isOpen} =props;
    const containerOptionsVariants = {
      open: {
        y: '-25%',
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 },
        },
      },
      closed: {
        y:  '-25%',
        opacity: 0,
         transition: {
          y: { stiffness: 1000 },
        },
      },
    };
    return (
        <ContainerOptions>
          <ModalContainer 
          variants={containerOptionsVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}>
            {options.map((option, key) => (
              <BoxOption key={`${key}-option`} onClick ={() => props.onChange(option.text)}>
                <IconOption src={option.icon} />
                <OptionInputText>{option.text}</OptionInputText>
              </BoxOption>
            ))}
          </ModalContainer>
        </ContainerOptions>
    );
}

export default OptionsInput;