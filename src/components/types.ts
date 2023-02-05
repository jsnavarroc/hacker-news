export interface ICardInfoProps  {
    created_at?:string;
    story_title?:string;
    author?: string;
    objectID?:string;
    parent_id?:string;
    story_id?:string;
    story_url?: string;
    created_at_i?: number;
  }

  export type OptionI =  {
    icon: any;
    text: string;
  };
  
  export interface IOptionsInputProps {
    options:OptionI[];
    isOpen:boolean;
    onChange: (option:string) => void;
  }

  export interface IuseFiltersSelector {
    technology:string;
}

export interface IuseGetData {
  loading: boolean;
  response:  [];
  error: unknown;
}
