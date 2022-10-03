import "./App.css";
import React from "react";

class App extends React.Component {
  // Criando construtor
  constructor(props) {
    super(props);

    //definindo o estado inicial
    this.state = {
      clicked: false,

      buttonStyle: {
        backgroundColor: "#dc3545",
        borderWidth: "1px",
        borderColor: "#333333",
      },
    };
  }
  changeClicked() {
    this.setState({ clicked: !this.state.clicked });
  }
  getLabel() {
    if (this.state.clicked) {
      return "Está Ligado!";
    } else {
      return "Está desligado";
    }
  }

  render() {
    return (
      <button onClick={() => this.changeClicked()} className="btn btn-primary">
        {this.getLabel()}
      </button>
    );
  }
}

export default App;
