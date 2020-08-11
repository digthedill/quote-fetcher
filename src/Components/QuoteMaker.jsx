import React, { Component } from "react";
import "./QuoteBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class QuoteMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteArray: [],
      currentQuote: "",
      text: "",
      author: "",
      isLoading: true,
    };
  }
  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          quoteArray: data,
          currentQuote: data[Math.floor(Math.random() * data.length)],
          isLoading: false,
        })
      );
  }
  update = () => {
    this.setState({ isLoading: true });
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          quoteArray: data,
          currentQuote: data[Math.floor(Math.random() * data.length)],
          isLoading: false,
        })
      );
  };

  render() {
    const twitter = <FontAwesomeIcon icon={["fab", "twitter"]} size="xs" />;
    return (
      <div className="quoteBox container clearfix" id="quote-box">
        <p id="text">
          <span className="h1">" </span>
          {this.state.isLoading ? "... loading" : this.state.currentQuote.text}
          <span className="h1"> "</span>
        </p>
        <p id="author" className="footer">
          -{this.state.currentQuote.author}
        </p>

        <footer className="page-footer">
          <a
            id="tweet-quote"
            className=""
            href="https://twitter.com/intent/tweet"
          >
            {twitter}
          </a>
          <button
            id="new-quote"
            onClick={this.update}
            className="btn btn-warning btn-md center m-2"
          >
            Next
          </button>
        </footer>
      </div>
    );
  }
}

export default QuoteMaker;
