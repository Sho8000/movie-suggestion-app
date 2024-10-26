import { Component } from "../common/Component.js";
import { MovieContext } from "../context/MovieContext.js";
const BASE_CLASS = "movieFrame";
export class MovieFrame extends Component {
    constructor(parentElement) {
        super(parentElement, {}, {}, { movieInfo: MovieContext.getInstance() });
        this.context.movieInfo.setOnStateChange(() => this.render());
    }
    render() {
        this.parentElement.empty();
        let switchHide = "hide";
        let movieItems = this.context.movieInfo.item;
        let movieActors = [];
        let movieRatingSource = "";
        let movieRatingValue = "";
        let movieRatingSourceArray = [];
        let movieRatingValueArray = [];
        if (this.context.movieInfo.flag === true) {
            switchHide = "";
            if (movieItems[0].Actors !== undefined || this.context.movieInfo.item[0].Ratings !== undefined) {
                movieActors = movieItems[0].Actors.split(",");
                this.context.movieInfo.item[0].Ratings.forEach(element => {
                    movieRatingSource = element.Source;
                    movieRatingSourceArray.push(movieRatingSource);
                    movieRatingValue = element.Value;
                    movieRatingValueArray.push(movieRatingValue);
                });
            }
        }
        const children = $(`<div class="fixHeightwhileNoImg"></div>
      <div class="movieFrame switchHide ${switchHide}">
        <div class="movieFrame__gridContainer">
          <div class="movieFrame__titleArea">
            <h2 class="thirdAnimation">${movieItems[0].Title}</h2>
          </div>
          <div class="movieFrame__imgArea">
            <img src="${movieItems[0].Poster}" alt="poster" class="thirdAnimation">
          </div>
          <div class="movieFrame__plotArea thirdAnimation">
            <div class="movieFrame__plotArea__plot">
              <h3 class="movieFrame__plotArea__plot__h2 plot">plot</h3>
              <p class="movieFrame__plotArea__plot__p plotcontent">${movieItems[0].Plot}</p>
            </div>
            <div class="movieFrame__plotArea__director">
              <h3 class="movieFrame__plotArea__director__h3 director">Director</h2>
              <p class="movieFrame__plotArea__director__p directorcontent">${movieItems[0].Director}</p>
            </div>
          </div>
          <div class="movieFrame__languageArea thirdAnimation">
            <h3 class="movieFrame__languageArea__contents">Language:</h3>
            <p class="movieFrame__languageArea__contents">${movieItems[0].Language}</p>
          </div>
          <div class="movieFrame__actorsArea thirdAnimation">
            <div class="movieFrame__actorsArea__Contents">
              <h3 class="movieFrame__actorsArea__title">Actors:</h3>
              <ul class="ActorsList">
              </ul>
            </div>
          </div>
          <div class="movieFrame__ratingsArea thirdAnimation">
            <div class="movieFrame__ratingsArea__contents">
              <h3 class="movieFrame__ratingsArea__title">Ratings:</h3>
              <ul class="ratingList">
              </ul>
            </div>
          </div>          
          <div class="movieFrame__emptyArea"></div>          
          <div class="movieFrame__awardsArea thirdAnimation">
            <h3 class="movieFrame__awardsArea__contents">Awards:</h3>
            <p class="movieFrame__awardsArea__contents">${movieItems[0].Awards}</p>
          </div>          
        </div>
      </div>`);
        for (let i = 0; i < movieActors.length; i++) {
            const actor = $(`<li>${movieActors[i]}</li>`);
            children.find(".ActorsList").append(actor);
        }
        for (let i = 0; i < movieRatingSourceArray.length; i++) {
            const rating = $(`<li>${movieRatingSourceArray[i]} (${movieRatingValueArray[i]})</li>`);
            children.find(".ratingList").append(rating);
        }
        this.parentElement.append(children);
        //@ts-ignore
        var tlFadeSecond = gsap.timeline();
        tlFadeSecond.fromTo(".thirdAnimation", {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.5
        });
    }
}
//# sourceMappingURL=MovieFrame.js.map