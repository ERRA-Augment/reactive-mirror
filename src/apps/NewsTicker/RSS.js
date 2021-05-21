

var feed = ("https://www.nasa.gov/rss/dyn/breaking_news.rss")


function RSS() {
    return (
    (feed)
    )
}

export default RSS


// 

// let Parser = require('rss-parser');
// let parser = new Parser();

// (async () => {

//   let feed = await parser.parseString('http://feeds.bbci.co.uk/news/world/rss.xml#');
//   console.log(feed.title);








// import {}


// export default class App extends React.Component<Props, State> {
//   constructor(props: {}) {
//        super(props);
//        this.state = { feed: [] };
//   }

//   async componentDidMount() {
//       const feed = await parser.parseURL('https://www.reddit.com/.rss');
//       this.setState({ feed });
//   }

//   render() {
//       return (
//       <div>
//           <h1>RSS Feed</h1>
//           this.state.feed.map((item, i) => (
//               <div key={i}>
//                   <h1>item.title</h1>
//                   <a href="">item.link</a>
//               </div>
//           ))
//       </div>
//       );
//   }
// }

// import * as rssParser from 'react-native-rss-parser';
// import React from 'react'
// const cors = require('cors')

// function RSS() {
//   return fetch('https://www.nasa.gov/rss/dyn/breaking_news.rss')
//   .then((response) => response.text())
//   .then((responseData) => rssParser.parse(responseData))
//   .then((rss) => {
//     console.log(rss.title);
//     console.log(rss.items.length);
//   });
// }

// export default RSS


// import Parser from 'rss-parser'

// let Parser = require('rss-parser');
// let parser = new Parser();

// (async () => {

//   let feed = await parser.parseString('http://feeds.bbci.co.uk/news/world/rss.xml#');
//   console.log(feed.title);
 

// import FeedParser from 'feedparser'

// var FeedParser = require('feedparser');
// var fetch = require('node-fetch'); // for fetching the feed

// var req = fetch('https://www.nasa.gov/rss/dyn/breaking_news.rss')
// var feedparser = new FeedParser([options]);

// req.then(function (res) {
//   if (res.status !== 200) {
//     throw new Error('Bad status code');
//   }
//   else {
//     // The response `body` -- res.body -- is a stream
//     res.body.pipe(feedparser);
//   }
// }, function (err) {
//   // handle any request errors
// });

// feedparser.on('error', function (error) {
//   // always handle errors
// });

// feedparser.on('readable', function () {
//   // This is where the action is!
//   var stream = this; // `this` is `feedparser`, which is a stream
//   var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
//   var item;

//   while (item = stream.read()) {
//     console.log(item);
//   }
// });










    // export default class FetchDataFromRSSFeed extends Component {
    //   constructor() {
    //     super();
    //     this.state = {
    //       items: []
    //     };
    //   }

    //   async componentDidMount() {
    //     try {
          
    //       const response = await fetch(
    //         "http://feeds.bbci.co.uk/news/world/rss.xml#"
    //       );
    //       const json = await response.json();
    //       this.setState({ items: json.items });
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    //   render() {
    //     console.log(this.state);
    //     return (
    //       <div class="inline-flex space-x-10">
    //         {this.state.items.map(item => (
    //           <li key={item.guid}>
    //             <a target="_blank" rel="noopener noreferrer" href={item.link}>
    //               {item.title}
    //             </a>
    //           </li>
    //         ))}
    //       </div>
    //     );
    //   }
    // }