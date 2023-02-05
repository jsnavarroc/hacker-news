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

const useCardInfo = (props: ICardInfoProps) => {
//   const { favoritesIDs } = useFavoritesIDsSelector();
//   const { updateFavoritesD } = useFavoritesIDsDispatch();
  const [img, setImg] = useState(hollowHeart);
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
    props?.updateFavorites && props?.story_id && props?.updateFavorites(props?.story_id);
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
