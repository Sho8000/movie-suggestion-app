import { Component } from "./common/Component.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { MovieFrame } from "./components/MovieFrame.js";

export class App extends Component {
  render(): void {
    new Header(this.parentElement);
    const children = $(`<main></main>`);

    new MovieFrame(children);

    this.parentElement.append(children);
    new Footer(this.parentElement);
  }
}
