import { useState } from "react";
import { ICardInfoProps } from "../../types";
import { filledHeart, hollowHeart } from "../../../assets/icons/Icons";
import useFavoritesIDsSelector from "../../../redux/hooks/selectors/useFavoritesIDsSelector";
import useFavoritesIDsDispatch from "../../../redux/hooks/dispatchers/useFavoritesIDsDispatch";

const calculateHours = (date:string) => {
    const currentDate = Date.now();
    const originalDate = new Date(date).getTime();
    const hoursPassed = (currentDate - originalDate) / (1000 * 60 * 60);
    return Math.floor(hoursPassed);

}

const updateFavorites = (props: ICardInfoProps, favoritesIDs:ICardInfoProps[], updateFavoritesD:any) => {
  const {objectID, parent_id, story_id,created_at_i} = props
  const newFavoritesIDs = favoritesIDs.slice() as ICardInfoProps[];

  const existNewsKey =newFavoritesIDs.findIndex((news:ICardInfoProps) =>  news.parent_id === parent_id && news.objectID ===objectID && news.story_id === story_id && news.created_at_i === created_at_i )
 
  if(existNewsKey!==-1){
   
    const updateData=newFavoritesIDs.filter((news) =>  news.parent_id !== parent_id && news.objectID !==objectID && news.story_id !== story_id && news.created_at_i !== created_at_i)
    
      updateFavoritesD(updateData)
  }else{
    updateFavoritesD([...newFavoritesIDs,props]) 
  }
}

const useCardInfo = (props: ICardInfoProps) => {
  const { favoritesIDs } = useFavoritesIDsSelector();
  const { updateFavoritesD } = useFavoritesIDsDispatch();
  const [img, setImg] = useState(() =>{
    const {objectID, parent_id, story_id, created_at_i} = props
    const existNewsKey =favoritesIDs.findIndex((news:ICardInfoProps) => news.parent_id === parent_id && news.objectID ===objectID && news.story_id === story_id && news.created_at_i === created_at_i )

    return existNewsKey!==-1? filledHeart:hollowHeart
  });
  const { created_at, author, story_title } = props;
  
 
  const toggleImage = () => {  
    if (img === hollowHeart) {
      setImg(filledHeart);
    } else {
      setImg(hollowHeart);
    }
  };
  

  const onClick = (e: any) => {
    e.preventDefault();
    toggleImage();
    props?.objectID && updateFavorites(props, favoritesIDs, updateFavoritesD);
  }
  return {
    onClick,
    img,
    horasRedondeadas: created_at ? calculateHours(created_at) : 0,
    author: author || "author",
    story_title: story_title || "Nothing is loaded.",
  };
};

export default useCardInfo;
