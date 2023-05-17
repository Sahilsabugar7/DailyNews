import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  

  constructor() {
    super();
    console.log("this is constructor for NEws");
    this.state = {
      articles: [],
      loading: false, 
      page:1
    };
  }

  async componentDidMount(){
  
    let url="https://newsapi.org/v2/everything?q=apple&from=2023-05-16&to=2023-05-16&sortBy=popularity&apiKey=e5192c212d804056a27733f47a4650b8";
    let data= await fetch(url);
    let parseData= await data.json()
    this.setState({articles:parseData.articles,totalResults:parseData.totalResults})
  }


handleprv= async()=>{
  console.log("previous")

  let url=`https://newsapi.org/v2/everything?q=apple&from=2023-05-16&to=2023-05-16&sortBy=popularity&apiKey=e5192c212d804056a27733f47a4650b8&page=${this.state.page-1}`;
    let data= await fetch(url);
    let parseData= await data.json()
    this.setState({
      page:this.state.page -1,
      articles:parseData.articles})
}
handlenext= async ()=>{
  console.log("next");
  if(this.state.page +1 >Math.ceil(this.state.totalResults/20)){

  }
  else{
  let url=`https://newsapi.org/v2/everything?q=apple&from=2023-05-16&to=2023-05-16&sortBy=popularity&apiKey=e5192c212d804056a27733f47a4650b8&page=${this.state.page+1}&pageSize=20`;
    let data= await fetch(url);
    let parseData= await data.json()
    this.setState({
      page:this.state.page +1,
      articles:parseData.articles})}
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
    <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleprv}>Previous</button>
    <button className="btn btn-dark" onClick={this.handlenext}>Next</button>
  </div>
      </div>
    );
  }
}

export default News;
