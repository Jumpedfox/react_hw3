import React, { Component } from 'react';
import Searchbar from 'components/searchbar/searchbar';
import ImageGallery from 'components/imagegallery/imagegallery';
import NextButton from 'components/nextbutton/nextbutton';
import Modal from 'components/modal/modal';

class Appwrapper extends Component {
  state = {
    gallery: [],
    inputValue: '',
    pageNumber: 1,
    openModal: false,
    modalSrc: '',
  };

  myWord = e => {
    this.setState({ inputValue: e.target.value });
  };

  loadPage = async e => {
    return await fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.state.inputValue}&page=${this.state.pageNumber}&per_page=10&key=28915282-07b03790ae60aa1f49b68439f`
    )
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Error fetching data');
      })
      .then(response => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...response.hits],
        }));
      });
  };

  loadPics = async e => {
    e.preventDefault();
    await this.setState({ gallery: [] });
    await this.loadPage();
    await this.setState({ buttonDisplay: 'nextButton' });
  };

  nextPage = async () => {
    await this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
    await this.loadPage();
  };

  openModal = e => {
    this.setState({ modalSrc: e.target.dataset.source });
  };

  closeModal = () => {
    this.setState({ modalSrc: '' });
  };

  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <>
        <Searchbar myWord={this.myWord} loadPics={this.loadPics} />
        <ImageGallery gallery={this.state.gallery} openModal={this.openModal} />
        {this.state.gallery.length >= 1 && (
          <NextButton
            nextPage={this.nextPage}
            buttonDisplay={this.state.buttonDisplay}
          />
        )}
        {this.state.modalSrc !== '' && (
          <Modal
            gallery={this.state.gallery}
            overlayDisplay={this.state.overlayDisplay}
            modalSrc={this.state.modalSrc}
            closeModal={this.closeModal}
          />
        )}
        {''}
      </>
    );
  }
}
export { Appwrapper };
