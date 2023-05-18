import React, { Component } from "react";

export class BussinessNewsItem extends Component {
  render() {

    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BussinessNewsItem;
