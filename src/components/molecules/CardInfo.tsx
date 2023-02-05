import { useState } from 'react';
import { clock, filledHeart, hollowHeart } from "../../assets/icons/Icons";
import { Card, ContentCard, LeftColumn, RightColumn, TitleCard } from "../atoms/Card"
import { InfoCard, SmallTitle } from "../atoms/Paragraph"

const CardInfo = () => {
    const [img, setImg] = useState(hollowHeart);

    const toggleImage = () => {
      if (img === hollowHeart) {
        setImg(filledHeart);
      } else {
        setImg(hollowHeart);
      }
    };
    return (
        <Card 
        onClick={toggleImage}
        whileHover={{ opacity: 0.5}}
        whileTap={{opacity:0.5}}
        transition={{  duration: 0.1 }}
        >
        <ContentCard>
            <LeftColumn>
              <TitleCard>
                 <img src={clock}/>
                 <SmallTitle>3 hours ago by author</SmallTitle>         
              </TitleCard>
                <InfoCard>Yes, React is taking over front-end development. The question is whay.</InfoCard> 
            </LeftColumn>
          
            <RightColumn>
                <img src={img}/>
            </RightColumn>
        </ContentCard>
        </Card>
    )
}

export default CardInfo;