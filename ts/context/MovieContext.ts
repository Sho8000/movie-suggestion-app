export interface Movie {
  Title: string;
  Poster?: string;
  Plot?: string;
  Director?: string;
  Language?: string;
  Actors?: string;
  Ratings?: [{
    Source?: string;
    Value?: number | string;
  }];
  Awards?: string;
}

type stateChangeFunction = () => void;

export class MovieContext {
  private static instance: MovieContext | null = null;

  private _item: Movie[] = [{
    Title: "",
    Poster: "",
    Plot: "",
    Director: "",
    Language: "",
    Actors: "",
    Ratings: [{}],
    Awards: "",
  
  }] 
  private _flag: boolean = false;
  private _fetchError: boolean = false;
  _stateChangeFunctions: stateChangeFunction[] = [];
  private constructor(){}

  static getInstance(): MovieContext{
    if(!MovieContext.instance){
      MovieContext.instance = new MovieContext();
    }
    return MovieContext.instance;
  }

  get item(): Movie[]{
    return this._item;
  }

  get flag(): boolean{
    return this._flag;
  }

  setflag(){
    this._flag = true;
  }

  get fetchError(): boolean{
    return this._fetchError;
  }

  setfetchError(value:boolean){
    this._fetchError = value;
  }
/* 
  get title(): string | null{
    return this._title;
  }

  set title(title :string){
    this._title = title;
  }
 */
  setItem(movieItem: Movie):void{
    this._item = [];
    this._item.push(movieItem);

    this.updateOnStateChange();
  }

  setOnStateChange(stateChangeFunction: stateChangeFunction): void {
    this._stateChangeFunctions.push(stateChangeFunction);

    this.updateOnStateChange();
  }

  private updateOnStateChange():void{
    this._stateChangeFunctions.forEach((stateChangeFunction) => {
      stateChangeFunction();
    });
  }
  
}