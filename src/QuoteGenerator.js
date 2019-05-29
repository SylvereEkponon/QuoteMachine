import React from "react";
import { quotesData } from "./quotesData";

export class QuoteGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      data: quotesData,
      quote: "Judge a man by his questions rather than his answers",
      author: "Voltaire"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const length = this.state.data.length;
    const randomIdx = Math.floor(Math.random() * length);
    const newQuote = this.state.data[randomIdx];
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    });
  }
  render() {
    return (
      <div id="quote-box" className="quote-box">
        <h1 id="text">{this.state.quote}</h1>
        <h2 id="author">{this.state.author}</h2>
        <a 
        id="tweet-quote" 
        href="https://twitter.com/intent/tweet">Tweet</a>
        <button id="new-quote" onClick={this.handleSubmit}>New Quote</button>
      </div>
    );
  }
}
