import {useState} from 'react';
import { ContainerCards } from "../atoms/Card";
import CardInfo from "../molecules/CardInfo/CardInfo";
import { ICardInfoProps } from "../types";

const CardList = (props:{cardsInfo?:ICardInfoProps[]}) =>  {
    const {cardsInfo} =  props;
    const [favorites, setFavorites] =useState([]);

      const updateFavorites = (story_id:number) => {
        const newFavoritesIDs = favorites.slice();
        if(newFavoritesIDs.includes(story_id as never)){
            newFavoritesIDs.splice(newFavoritesIDs.indexOf(story_id as never), 1);
            setFavorites(newFavoritesIDs)
        }else{
          setFavorites([...favorites,story_id as  never]) 
        }
        
      }
    
    return (
      <ContainerCards>
        {cardsInfo?.length === 0 ? (
         <CardInfo />
        ) : (
          cardsInfo?.map((cardInfo: ICardInfoProps, key:number) => (
            <CardInfo {...cardInfo}  updateFavorites={updateFavorites} key={key}/>
          ))
        )}

      </ContainerCards>
    );
}

export default CardList;