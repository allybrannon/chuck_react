import React, { Component } from "react";

class Quote extends Component {
  state = {
    quote: "Fetching a quote..."
  };

  componentDidMount() {
    this.setState({
      quote: "Chuck says stay inside!"
    });
  }

  render() {
    const { quote } = this.state;
    return (
      <div>
        <p>{quote}</p>
      </div>
    );
  }
}

export default Quote;
