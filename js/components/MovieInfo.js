"use strict";
/* import { Component } from "../common/Component.js";
import { MovieContext } from "../context/MovieContext.js";
import { GetMovie } from "./GetMovie.js";

//have to input
const BASE_CLASS:string = ""

export interface Movie {
  Title: string;
  Poster: string;
  Plot: string;
  Director: string;
  Language: string;
  Actors: string;
  Ratings: object[];
  Awards: string;
}

interface IState {
  movies: Movie[];
}

interface IProps{}

interface IContext {
  movieInfo: MovieContext;
}

export class MovieInfo extends Component<IState,IProps,IContext>{
  constructor(parentElement:JQuery<HTMLElement>
  ){
    super(
      parentElement,
      {},
      { movies: []},
      { movieInfo: MovieContext.getInstance() }
    )

    this.loadMovie();
  }

  async loadMovie(): Promise<void>{
   const movies = await this.getMovie();

   this.setState((state) => ({ ...state, movies }));
  }

  async getMovie(){
    const response = await fetch(`http://www.omdbapi.com/?apikey=a152b50f&t=${this.context.movieInfo.title}`);

    if(!response.ok){
      throw new Error("Something went wrong while getting movie");
    }

    return response.json();
  }

  render(){
    console.log("hey",this.state.movies);
  }
} */ 
//# sourceMappingURL=MovieInfo.js.map