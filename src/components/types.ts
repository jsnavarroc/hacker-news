export interface ICardInfoProps  {
    created_at?:string;
    story_title?:string;
    author?: string
    story_id?: number;
    story_url?: string;
    updateFavorites?:(id:number) => void;
  }