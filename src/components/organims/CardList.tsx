
import { ContainerCards } from "../atoms/Card";
import CardInfo from "../molecules/CardInfo/CardInfo";
import { ICardInfoProps } from "../types";

const CardList = (props:{cardsInfo?:ICardInfoProps[]}) =>  {
    const {cardsInfo} =  props;
 
  
    return (
      <ContainerCards>
        {cardsInfo?.length === 0 ? (
         <CardInfo />
        ) : (
          cardsInfo?.map((cardInfo: ICardInfoProps, key:number) => (
            <CardInfo {...cardInfo}  key={key}/>
          ))
        )}

      </ContainerCards>
    );
}

export default CardList;