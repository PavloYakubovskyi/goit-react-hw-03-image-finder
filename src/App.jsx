import { Component } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import * as API from "./components/services/api";

const API_KEY = "38952282-40725538619d219cb8ed057cd";

export default class App extends Component {
  state = {
    gallery: null,
    searchImages: "",
    page: 1,
    isLoading: false,
    error: null,
  };

  serachAllimages = async () => {
    const { searchImages, page } = this.state;
    try {
      const res = await API.searchImgs(searchImages, API_KEY, page);
      console.log("res: ", res.hits);

      this.setState({ gallery: res.hits });
    } catch (error) {}
  };

  componentDidMount() {
    this.serachAllimages();
  }

  onSubmit = (value) => {};

  render() {
    const { gallery, searchImages } = this.state;
    const showItems =
      Array.isArray(this.state.gallery) && this.state.gallery.length;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          items={gallery}
          searchValue={searchImages}
          showItems={showItems}
        />
        <Button>Load more</Button>
      </div>
    );
  }
}
