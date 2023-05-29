import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    contry: "in",
    pagesize: 10,
    category: "sports",
  };

  static propTypes = {
    contry: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("this is constructor for NEws");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
  }

  async update() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contry}&category=${this.props.category}&apiKey=${this.props.apiKeys}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.update();
  }

  handleprv = async () => {
    console.log("previous");

    this.setState({
      page: this.state.page - 1,
    });
    this.update();
  };
  handlenext = async () => {
    console.log("next");

    this.setState({
      page: this.state.page + 1,
    });
    this.update();
  };

  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };



  fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    
    this.setState({page : this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contry}&category=${this.props.category}&apiKey=${this.props.apiKeys}&pagesize=${this.props.pagesize}&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
      
    })
    
    
  };

  render() {
    return (
      <div className="container my -3">
        <h1 style={{ color: "darkslateblue",marginTop:'75px'}}>
          <center>DAILY NEWS OF {this.capitalizeFirstLetter(this.props.category)}</center>
        </h1>
        <div style={{ textAlign: "center" }}>
          {this.state.loading && <Spinner />}
        </div>

<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4><center><Spinner/></center></h4>}
        >

        <div className="container">
        <div className="row my-5">
          {/* {!this.state.loading && */}{
            


            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publish={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-success"
            onClick={this.handleprv}
          >
            Previous
          </button>
          <button
            className="btn btn-success"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            onClick={this.handlenext}
          >
            Next
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
