import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((u) => this.setState({ monsters: u }));
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMontsers = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="search monster"
          handleSearch={this.handleSearch}
        />
        <CardList monsters={filteredMontsers}></CardList>
      </div>
    );
  }
}

export default App;
