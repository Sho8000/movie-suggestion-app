import { Component } from "../common/Component.js";

const BASE_CLASS:string = "footer";

export class Footer extends Component {
  render(): void {
    const children:JQuery<HTMLElement> = $(
      `<footer>
        <div class=${BASE_CLASS}>
          <h2 class="${BASE_CLASS}__sentence secondAnimation">Designed & Developed by Sho</h2>
        </div>
      </footer>`
    )
    
    this.parentElement.append(children)
  }
}
