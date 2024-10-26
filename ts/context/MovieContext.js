export class MovieContext {
    static instance = null;
    _item = [{
            Title: "",
            Poster: "",
            Plot: "",
            Director: "",
            Language: "",
            Actors: "",
            Ratings: [{}],
            Awards: "",
        }];
    _flag = false;
    _fetchError = false;
    _stateChangeFunctions = [];
    constructor() { }
    static getInstance() {
        if (!MovieContext.instance) {
            MovieContext.instance = new MovieContext();
        }
        return MovieContext.instance;
    }
    get item() {
        return this._item;
    }
    get flag() {
        return this._flag;
    }
    setflag() {
        this._flag = true;
    }
    get fetchError() {
        return this._fetchError;
    }
    setfetchError(value) {
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
    setItem(movieItem) {
        this._item = [];
        this._item.push(movieItem);
        this.updateOnStateChange();
    }
    setOnStateChange(stateChangeFunction) {
        this._stateChangeFunctions.push(stateChangeFunction);
        this.updateOnStateChange();
    }
    updateOnStateChange() {
        this._stateChangeFunctions.forEach((stateChangeFunction) => {
            stateChangeFunction();
        });
    }
}
//# sourceMappingURL=MovieContext.js.map