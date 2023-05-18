import React, { Component } from "react";

export class NewsItem extends Component {
  render() {

    let {title,description,imageUrl,newsUrl,author,publish,source}=this.props;

return(
    <div className="card" style={{width: "18rem"}}>
      <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'84%',zIndex:'1'
    }}>
    {source}</span>
    <span class="visually-hidden">unread messages</span>
  <img src={!imageUrl?"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small class="text-muted">Author: {!author?"unknown":author} on </small></p>
    <p class="card-text"><small class="text-muted">Date : {new Date(publish).toGMTString()}  </small></p>

    <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
  </div>

 
</div>
)
  }
}

export default NewsItem;
