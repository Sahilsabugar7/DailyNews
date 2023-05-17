import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  

  constructor() {
    super();
    console.log("this is constructor for NEws");
    this.state = {
      articles: [],
      loading: false, 
    };
  }

  async componentDidMount(){
  
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e5192c212d804056a27733f47a4650b8";
    let data= await fetch(url);
    let parseData= await data.json()
    this.setState({articles:parseData.articles})
  }


handleprv=()=>{
  console.log("previous")
}
handlenext=()=>
{
  console.log("next")
}



  render() {
    return (
      <div className="container my -3">
        <h1 style={{color:"darkslateblue"}}>
          <center>DAILY NEWS</center>
        </h1>
        <div className="row my-5" >
        {this.state.articles.map((element)=>{ return <div className="col-md-3 my-2" key={element.url}>
            <NewsItem
                
              title={element.title?element.title:""}
              description={element.description?element.description:""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>})}
          
        </div>
        <div className="container d-flex justify-content-between">
    <button className="btn btn-dark" onClick={this.handleprv}>Previous</button>
    <button className="btn btn-dark" onClick={this.handlenext}>Next</button>
  </div>
      </div>
    );
  }
}

export default News;
