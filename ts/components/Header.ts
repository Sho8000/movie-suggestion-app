import { Component } from "../common/Component.js";
import { MovieContext } from "../context/MovieContext.js";

const BASE_CLASS:string = "header";

interface HeaderProps {
  movieInfo:MovieContext;
}

export class Header extends Component<{},{},HeaderProps> {
  constructor(parentElement: JQuery<HTMLElement>){
    super(
      parentElement,
      {},
      {},
      { movieInfo: MovieContext.getInstance() }  
    )

  }

  async setMovie(title: string | null){
    let movieItems = await this.getMovie(title)
    if(movieItems.Response === "True"){
      this.context.movieInfo.setfetchError(false);
      this.context.movieInfo.setflag();
    } else{
      this.context.movieInfo.setfetchError(true);
    }
    this.context.movieInfo.setItem(movieItems)
    return movieItems
  }

  async getMovie(title: string | null){
     const response = await fetch(`https://www.omdbapi.com/?apikey=a152b50f&t=${title}`);
 
     if(!response.ok){
       throw new Error("Something went wrong while getting movie");
     }
     return response.json();
   }
 
  render(): void {
    let searchBar:JQuery<HTMLElement> = $(``);
    const children:JQuery<HTMLElement> = $(`
      <div class="firstPage">
        <div class="firstAnimationContainer">
          <h1 class="firstAnimation">Movie Search APP</h1>
          <h1 class="firstAnimation">by</h1>
          <h1 class="firstAnimation">Sho Yoshimura</h1>
        </div>
      </div>
      <header class="${BASE_CLASS}">
        <div class="${BASE_CLASS}__Contents">
          <div class="${BASE_CLASS}__mainTitle">
            <h1 class="secondAnimation"> &nbsp Sho!W &nbsp Movie &nbsp App</h1>
          </div>
          <div class="${BASE_CLASS}__Search secondAnimation"></div>
        </div>
      </header>
    `);

    //to change the style of serchBar
    searchBar = $(
      `<div class="${BASE_CLASS}__firstSearch">
        <input type="search" placeholder="Enter a movie title..." class="${BASE_CLASS}__firstInput" id="getTitle">
        <p class="findingError hide">Non Existent,,,</p>
        <button class="${BASE_CLASS}__searchBtn" id="searchBtn">Search Movie</button>
      </div>
      <div class="${BASE_CLASS}__secondSearch hide">
        <input type="search" placeholder="Search again... PRESS ENTER" class="${BASE_CLASS}__secondInput" id="secondInput">
        <p class="findingError hide">Non Existent,,,</p>
      </div>`
    )

    children.find(`.${BASE_CLASS}__Search`).append(searchBar);
    if(this.parentElement.find("header").length===0){
      this.parentElement.append(children);
    } else{
      children.find(`.${BASE_CLASS}__Search`).append(searchBar);
    }

    $("#searchBtn").on("click",async ()=>{
      let result = "";
      let seachedItem:string | null = $("#getTitle").val()!.toString();
      result = await this.setMovie(seachedItem);
      if(this.context.movieInfo.item[0].Title){
        this.parentElement.find(`.${BASE_CLASS}__firstSearch`).addClass("hide");
        this.parentElement.find(`.${BASE_CLASS}__secondSearch`).removeClass("hide");
        this.parentElement.find(`.findingError`).addClass(`hide`);
        this.parentElement.find(`.fixHeightwhileNoImg`).addClass(`hide`)
      } else{
        this.parentElement.find(`.findingError`).removeClass(`hide`)
        this.parentElement.find(`.fixHeightwhileNoImg`).removeClass(`hide`)
      }
      $("#getTitle").val("")
    })

    $("#secondInput").on("keypress",async (e)=>{
      if(e.which === 13){
        let result = ""
        let seachedItem:string | null = $("#secondInput").val()!.toString();
        result = await this.setMovie(seachedItem);
        if(this.context.movieInfo.item[0].Title){
          this.parentElement.find(".movieFrame").removeClass("hide")
          this.parentElement.find(`.findingError`).addClass(`hide`);
          this.parentElement.find(`.fixHeightwhileNoImg`).addClass(`hide`)
          $("#secondInput").val("")
        } else{
          this.parentElement.find(".movieFrame").addClass("hide");
          this.parentElement.find(`.findingError`).removeClass(`hide`);
          this.parentElement.find(`.fixHeightwhileNoImg`).removeClass(`hide`)
          $("#secondInput").val("")
        }  
      }
    })

    //@ts-ignore
    var tlFadeFirst = gsap.timeline();

    tlFadeFirst.to(".firstAnimation",{
      scaleY: 1,
      opacity: 1,
      stagger: 0.5,
      duration:0.5,
    }).then(()=>{
      tlFadeFirst.to(".firstPage",{
        opacity:0,
        delay:0
      })
    }).then(()=>{
      tlFadeFirst.to(".firstPage",{
        scale:0,
        delay:0
      })
    }).then(()=>{
      tlFadeFirst.to(".secondAnimation",{
        opacity:1,
        stagger:0.5,
        delay:0.3,
        scaleY:1,
      })
    })
  }
}
