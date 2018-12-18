import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    //initialise state to contain empty array of pets
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    //request all pets from Seattle
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        let pets;

        //check it exists
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({ pets });
      });
  }

  handleTitleClick() {
    alert("you clicked the title");
  }

  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Jon" animal="Dog" breed="Lab" />
        <Pet name="Martina" animal="Cat" breed="Ginger" />
        <Pet name="Milky" animal="Horse" breed="Pieball" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
