import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    contry: "in",
    pagesize: 8,
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
      loading: false,
      page: 1,
    };
  }

  async update() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contry}&category=${this.props.category}&apiKey=e5192c212d804056a27733f47a4650b8&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
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

  render() {
    return (
      <div className="container my -3">
        <h1 style={{ color: "darkslateblue" }}>
          <center>DAILY NEWS</center>
        </h1>
        <div style={{ textAlign: "center" }}>
          {this.state.loading && <Spinner />}
        </div>

        <div className="row my-5">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3 my-2" key={element.url}>
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
        <div className="container d-flex justify-content-between">
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
        </div>
      </div>
    );
  }
}

export default News;
