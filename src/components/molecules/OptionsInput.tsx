import { angular, react, vue } from "../../assets/icons/Icons";
import { BoxOption, ContainerOptions, IconOption, ModalContainer } from "../atoms/OptionList";
import { OptionInputText } from "../atoms/Paragraph";

const OptionsInput = () => {
    const Options = [
      {
        icon: angular,
        text: "Angular",
      },
      {
        icon: react,
        text: "React",
      },     
      {
        icon: vue,
        text: "Vue",
      },
    ];

    return (
      <>
        <ContainerOptions>
          <ModalContainer>
            {Options.map((option, key) => (
              <BoxOption key={`${key}-option`}>
                <IconOption src={option.icon} />
                <OptionInputText>{option.text}</OptionInputText>
              </BoxOption>
            ))}
          </ModalContainer>
        </ContainerOptions>
      </>
    );
}

export default OptionsInput;