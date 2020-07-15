import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class JokeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      setup: "",
      punchline: "",
      showPunchline: false, //show punchline only on click of button
      showSetup: false,
    };
  }

  componentDidMount() {
    this.nextJoke();
  }

  punchline_is = () => {
    this.setState({
      showPunchline: true,
    });
  };

  nextJoke = () => {
    this.setState({
      showPunchline: false,
      showSetup: false,
    });
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((result) => {
        let { setup, punchline } = result.data; //result.data is an obj that contains joke present in setup prop and joke ans in punchline prop of the obj.
        this.setState({
          setup: setup,
          punchline: punchline,
          showSetup: true,
        });
      })
      .catch((error) => {
        console.log("couldnt fetch joke", error);
      });
  };

  render() {
    return (
      <>
        {this.state.showSetup ? (
          <div class="jk scale-in-center">{this.state.setup}</div>
        ) : null}
        {this.state.showPunchline ? (
          <div class="pl scale-in-center">{this.state.punchline}</div>
        ) : null}
        <div class="next ">
          <Button
            onClick={this.punchline_is}
            variant="primary"
            size="lg"
            className="bt1"
          >
            Tell Me!
          </Button>
        </div>
        <div class="next">
          <Button
            onClick={this.nextJoke}
            variant="success"
            size="lg"
            className="bt2"
          >
            Next Joke
          </Button>
        </div>
      </>
    );
  }
}
