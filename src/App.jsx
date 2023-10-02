import { Component } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import * as API from "./components/services/api";
import Loader from "./components/Loader/Loader";
import { useState } from "react";

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
    this.setState({ isLoading: true });

    const { searchImages, page } = this.state;
    try {
      const res = await API.searchImgs(searchImages, API_KEY, page);
      // console.log("res: ", res.hits);

      this.setState({ gallery: res.hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      // вимикаємо індикатор завантаження в файналі бо тут відпрацює в любому випадку не залежно як проміс виконався
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.serachAllimages();
  }

  onSubmit = (values) => {
    if (values.search === this.state.searchImages) {
      alert("Ви саме зараз це і шукаєте");
      return;
    }
    this.setState({ searchImages: values.search, gallery: [], page: 1 });
  };

  render() {
    const { gallery, searchImages } = this.state;
    const showItems =
      Array.isArray(this.state.gallery) && this.state.gallery.length;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoading && <Loader />}
        {this.state.error && <p className="error">{this.state.error}</p>}
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
