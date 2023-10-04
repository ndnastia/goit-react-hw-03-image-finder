import { Component } from "react";

import style from "./App.module.css"

import { fetchImages } from "helpers/api";
import { Loader } from "./Loader/Loader";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";


export class App extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    searchedPostId: null,
  }

  fetchAllImages = async () => {
    try {
      this.setState({ isLoading: true });
      const images = await fetchImages();
      
      this.setState({ images: images.hits })
      
    } catch (error) {
      this.setState({ error: error.message })
    } finally {
      this.setState({ isLoading: false })
    }
  }
  componentDidMount() {
    this.fetchAllImages();
  }
  render() {
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;
    
    return (
        <div className={style['App']}>
        <Searchbar />
        {this.state.isLoading && <Loader />}
        {this.state.error && <p className={style["error"]}>{this.state.error}</p>}
        {showImages && <ImageGallery images={this.state.images} />}
        
        
    </div>
      )
    }
  
}
