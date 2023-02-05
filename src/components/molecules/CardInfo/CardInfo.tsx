import { clock} from "../../../assets/icons/Icons";
import { Card, ContentCard, LeftColumn, LikeIncon, RightColumn, TitleCard } from "../../atoms/Card"
import { InfoCard, SmallTitle } from "../../atoms/Paragraph"
import { ICardInfoProps } from '../../types';
import useCardInfo from './useCardInfo';






const CardInfo = (props:ICardInfoProps) => {

  const { onClick, horasRedondeadas, img, author, story_title } = useCardInfo(props);

    return (
      <Card
        whileHover={{ opacity: 0.5 }}
        whileTap={{ opacity: 0.5 }}
        transition={{ duration: 0.1 }}
        href={props?.story_url || ''}
        target={'_blank'}
      >
        <ContentCard>
     
          <LeftColumn>
            <TitleCard>
              <img src={clock} />
              <SmallTitle>{`${horasRedondeadas} hours ago by ${author}`}</SmallTitle>
            </TitleCard>
            <InfoCard>
              {story_title}
            </InfoCard>
          </LeftColumn>

          <RightColumn>
            <LikeIncon
              src={img}
              onClick={onClick}
              whileHover={{ scale:1.2}}
            />
          </RightColumn>
        </ContentCard>
      </Card>
    );
}

export default CardInfo;