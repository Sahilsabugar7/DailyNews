import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "ESPN",
      },
      author: "ESPN Staff",
      title: "Mumbai Indians Clinch Thrilling Victory in IPL Final",
      description:
        "The Mumbai Indians emerged victorious in a nail-biting final match of the Indian Premier League (IPL) against the Chennai Super Kings.",
      url: "https://www.espn.com/cricket/story/_/id/12345678/mumbai-indians-clinch-thrilling-victory-ipl-final",
      urlToImage: "https://www.livemint.com/lm-img/img/2023/04/18/1600x900/CRICKET-IND-IPL-T20-HYDERABAD-MUMBAI-54_1681841246734_1681841258231.jpg",
      publishedAt: "2023-05-17T10:15:00Z",
      content:
        "In a thrilling showdown, the Mumbai Indians secured a sensational victory in the final of the Indian Premier League (IPL). The match, held at Wankhede Stadium in Mumbai, saw intense competition betwee…",
    },
    {
      source: {
        id: null,
        name: "Times of India",
      },
      author: "TOI Sports",
      title: "Delhi Capitals' Star Player Sets New Record in IPL Season",
      description:
        "The star player of the Delhi Capitals achieved a remarkable feat in the recently concluded Indian Premier League (IPL) season, setting a new record for most runs scored in a single season.",
      url: "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/delhi-capitals-star-player-sets-new-record-in-ipl-season/articleshow/1234567.cms",
      urlToImage: "https://www.insidesport.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-27-at-08.13.23.jpg?w=690",
      publishedAt: "2023-05-17T08:30:00Z",
      content:
        "In a stunning display of skill and consistency, the star player of the Delhi Capitals made history in the Indian Premier League (IPL) season. With a phenomenal performance throughout the tournament, …",
    },
    {
      source: {
        id: null,
        name: "Sportskeeda",
      },
      author: "Sportskeeda Staff",
      title: "Rajasthan Royals Appoint New Head Coach for Next IPL Season",
      description:
        "The Rajasthan Royals have announced the appointment of a new head coach for the upcoming season of the Indian Premier League (IPL).",
      url: "https://www.sportskeeda.com/cricket/rajasthan-royals-appoint-new-head-coach-next-ipl-season",
      urlToImage:"https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/12/rajasthan-royals-stats-in-ipl-2022.jpeg",
      publishedAt: "2023-05-16T16:45:00Z",
      content:
        "The Rajasthan Royals have made a significant change in their coaching staff by appointing a new head coach for the next edition of the Indian Premier League (IPL). The decision was made after a thor…",
    },
    {
      source: {
        id: null,
        name: "The Hindu",
      },
      author: "Sports Desk",
      title:
        "Kolkata Knight Riders Captain Ruled Out of Remainder of IPL Season",
      description:
        "The Kolkata Knight Riders will have to face a major setback as their captain has been ruled out of the remaining matches of the Indian Premier League (IPL) due to injury.",
      url: "https://www.thehindu.com/sport/cricket/kolkata-knight-riders-captain-ruled-out-of-remainder-of-ipl-season/article1234567.ece",
      urlToImage:
        "https://c.ndtvimg.com/2023-05/s6hlu59o_nitish-rana-rinku-singh-bcci_625x300_14_May_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
      publishedAt: "2023-05-15T14:20:00Z",
      content:
        "In a disappointing turn of events for the Kolkata Knight Riders, their captain will be unable to participate in the remaining matches of the Indian Premier League (IPL) due to a severe injury. The te…",
    },
    {
      source: {
        id: null,
        name: "Cricbuzz",
      },
      author: "Cricbuzz Staff",
      title: "Royal Challengers Bangalore Secure Playoffs Spot in IPL",
      description:
        "The Royal Challengers Bangalore have secured their place in the playoffs of the Indian Premier League (IPL) with a crucial victory in their recent match against the Sunrisers Hyderabad.",
      url: "https://www.cricbuzz.com/cricket-news/123456/royal-challengers-bangalore-secure-playoffs-spot-ipl",
      urlToImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHanY2l1BF1qZkjcLFvkXDT00iHhPQD2MTyQ&usqp=CAU    ",
      publishedAt: "2023-05-15T12:05:00Z",
      content:
        "In a thrilling encounter, the Royal Challengers Bangalore secured their spot in the playoffs of the Indian Premier League (IPL). The team emerged victorious in a crucial match against the Sunrisers …",
    },
    {
      source: {
        id: null,
        name: "NDTV Sports",
      },
      author: "NDTV Correspondent",
      title: "IPL Auction Set to Take Place Next Month",
      description:
        "Cricket fans are eagerly awaiting the Indian Premier League (IPL) auction, which is scheduled to take place next month. The auction will see teams vying for the best players to strengthen their squads.",
      url: "https://sports.ndtv.com/cricket/ipl-auction-set-to-take-place-next-month-1234567",
      urlToImage: "https://static.toiimg.com/thumb/msid-91510461,width-1280,resizemode-4/91510461.jpg",
      publishedAt: "2023-05-14T18:50:00Z",
      content:
        "Excitement is building among cricket enthusiasts as the Indian Premier League (IPL) auction is slated to happen in the coming month. The auction will witness intense bidding wars as teams aim to stre…",
    },
    {
      source: {
        id: null,
        name: "The Times of India",
      },
      author: "TOI Sports",
      title: "Chennai Super Kings' Star Bowler Wins IPL's Purple Cap",
      description:
        "The star bowler of the Chennai Super Kings was awarded the prestigious Purple Cap for being the highest wicket-taker in the recently concluded Indian Premier League (IPL).",
      url: "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/chennai-super-kings-star-bowler-wins-ipls-purple-cap/articleshow/1234567.cms",
      urlToImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0FwLc0Gvkju-wudq3ogANI6GK4QyIiWTxw&usqp=CAUhttps://www.livemint.com/lm-img/img/2023/04/08/600x338/MSD_1680939467746_1680939467937_1680939467937.jpg",
      publishedAt: "2023-05-14T15:30:00Z",
      content:
        "The Chennai Super Kings can celebrate another accolade as their star bowler clinched the prestigious Purple Cap in the Indian Premier League (IPL). With exceptional bowling performances throughout t…",
    },
    
    {
      source: {
        id: null,
        name: "Cricbuzz",
      },
      author: "Cricbuzz Staff",
      title:
        "Sunrisers Hyderabad's Star All-Rounder Wins IPL's Most Valuable Player Award",
      description:
        "The star all-rounder of the Sunrisers Hyderabad was honored with the Most Valuable Player (MVP) award in the Indian Premier League (IPL) for his outstanding performances throughout the tournament.",
      url: "https://www.cricbuzz.com/cricket-news/123456/sunrisers-hyderabad-star-all-rounder-wins-ipl-most-valuable-player-award",
      urlToImage: "https://static.toiimg.com/thumb/msid-91043715,width-1280,resizemode-4/91043715.jpg",
      publishedAt: "2023-05-11T16:55:00Z",
      content:
        "The Sunrisers Hyderabad can take pride in their star all-rounder who was recognized as the Most Valuable Player (MVP) of the Indian Premier League (IPL). His exceptional performances with both bat a…",
    },
  ];

  constructor() {
    super();
    console.log("this is constructor for NEws");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my -3">
        <h2>
          <center>DAILY NEWS</center>
        </h2>
        <div className="row my-5" >
        {this.state.articles.map((element)=>{ return <div className="col-md-3 my-2" key={element.url}>
            <NewsItem
                
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>})}
          
        </div>
      </div>
    );
  }
}

export default News;
