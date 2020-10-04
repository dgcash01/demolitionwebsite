import React, { Component } from "react";
import "../Images.css";
import Popup from "../Popup";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        // eslint-disable-next-line
        "https://images.unsplash.com/photo-1599732596061-1f381074f115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1346&q=80", // eslint-disable-next-line
        "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80", // eslint-disable-next-line
        "https://images.unsplash.com/photo-1595569099963-77bf7706643a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80", // eslint-disable-next-line
        "https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80", // eslint-disable-next-line
        "https://images.unsplash.com/photo-1590504805713-2d8068dff391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", // eslint-disable-next-line
        "https://images.unsplash.com/photo-1495036019936-220b29b930ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ],
      showModal: false,
      popImageUrl: "",
    };
  }
  imageSubmitter = (element) => {
    element.preventDefault();
    let imageUrlArray = this.state.imageUrlArray;
    imageUrlArray.push(this.state.imageUrl);
    this.setState({
      imageUrlArray: imageUrlArray,
    });
  };

  handleLinkChange = (element) => {
    element.preventDefault();
    this.setState({
      imageUrl: element.target.value,
    });
  };

  handlePopup = (url) => {
    this.setState({
      showModal: !this.state.showModal,
      popImageUrl: url
    });
  };

  render() {
    let imageUrlArray = this.state.imageUrlArray;
    const images = imageUrlArray.map((url, index) => {
      // eslint-disable-next-line
      return (
        // eslint-disable-next-line
        <img
          className="singleImage"
          src={url}
          key={index}
          onClick={() => this.handlePopup(url)}
        />        
      );      
    });
    return (
      <div className="Images">
        <form onSubmit={this.imageSubmitter}>
          <input
            className="urlTextField"
            type="text"
            placeholder="please insert image URL"
            onChange={this.handleLinkChange}
          />
          <button type="submit" className="submitButton">
            Submit Image
          </button>
        </form>
        {images}
        {this.state.showModal ? (
          <Popup
            popImageUrl={this.state.popImageUrl}
            closePopup={this.handlePopup}
          />
        ) : null}
      </div>
    );
  }
}

export default Images;
