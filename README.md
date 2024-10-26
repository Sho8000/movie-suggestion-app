# Final Project

## Description

In this assignment, you will be creating a "Movie Suggestion App", where a user will be able to view information about the movie he/she will search for. 

## Objectives

- You should use TypeScript for this project
- You must use OOP conventions, such as declaring components and encapsulating the logic within the component itself. If the component needs some data, data should be passed as props into it.
- Implement the functionalities. 

## Functionalities
- The user should be greeted with a loading spinner when entering the website. (BONUS: If the loading spinner is only visible for the first time entering the website. On subsequent refresh, it should not show the spinner).
- When the spinner goes away, the user should be shown the page where the movie details are not visible at first. In the same page, a search bar needs to be displayed where the user can search for a movie. 
- Searching for a movie should show details about the movie like Ratings, Actors, Plot, Director etc. (BONUS: have safety checks for errors or empty submissions)
- The website should use the layout as defined in the project [**demo**](https://youtu.be/EYJGDVMW5D8)  video below. 
- The website needs to be responsive and aesthetically pleasing showing a minimalist design pattern. 
- You should call the API to get the information about the movie a user is searching for.
- BONUS: You may add subtle animations using GSAP. 


## API Endpoint: 

- For this project, you will be using the movie details endpoint from [http://www.omdbapi.com/](http://www.omdbapi.com/). 
- The API is free but an API key needs to be generated in order to use it. 
- You have to call the api using url params similar to this: 
```javascript
`http://www.omdbapi.com/?apikey=[yourkey]&t=[movietitle]`
```
>  Where you have to place your API_KEY and the MOVIE_TITLE (that the user searches for). 
- Make sure that the MOVIE_TITLE you pass does not have any spaces or special characters in between, otherwise your API response will be bad.". 
- You can make use of this [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams) to convert string to URL search params.
- You do not need a backend for this, to make the API call, you can use `fetch` call from the client side to retrieve the data. 

## Tips & Notes: 
- Explore the project structure to see how OOP and TS is used in the project. Specifically look at the `components` folder and files such as `ProductItem.ts`, `ProductList.ts` etc. These files were intentionally left for your reference.
- You may delete these unused files from the project once you're done with the implementation. 
- The `tsconfig.json` file is configured such that any changes you make in the "ts" will be reflected in the "js" folder. 
- Better use GRID LAYOUT instead of Flexbox to create the layout of the website, it will be easier for you to implement responsiveness. 


## Get Started 
### Step 1 - Install the dependencies

```bash
npm install
```

### Step 2 - Run the scripts using

```bash
npm run dev
```



## Project Demo Link:

* The Project Demo link is [**HERE**](https://youtu.be/EYJGDVMW5D8) 


## Marking Criteria
* Implement the required functionality for the Movie Suggestion App (as stated in the "Functionalities" Section)
* Correct use of OOP (like encapsulation, abstraction etc..)
* Code readability.
* Good UI/UX
* Correct use of Git

## Submission Details
* You are required to make incremental commits. It can be on the main branch or preferably on feature branches. 
* <u>Presentation</u> to be heald on **25th Oct 2024** during class time
* You must have presenation slides for the presentation day. 
* <u>Dealine to push your last commit is</u> **25th Oct 2024 11:59pm**
* This project is **INDIVIDUAL**, meaning the code you submit must be your own owenership.


## Plagiarism
* You can co-ordinate with other students but the work you submit **MUST** be yours. 
* Code may be similar in certain cases, but if a direct correlation is found between 2 students, both students will be penalized and be reported to the school management. 
# movie-suggestion-app
