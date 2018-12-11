const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Larry",
        animal: "Dog",
        breed: "Lhasa Apso"
      }),
      React.createElement(Pet, {
        name: "Paul",
        animal: "Cat",
        breed: "Ginger"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Parrot"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
