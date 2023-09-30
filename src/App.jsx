import { Component } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";

export default class App extends Component {
  onSubmit = (value) => {};

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery />
        <Button>Load more</Button>
      </div>
    );
  }
}
