import React, { Component } from "react";
import CardList from "../components/CardList.js";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry.js";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: "",
        };
    }

    async componentDidMount() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        this.setState({ robots: users });
    }

    onSearchCange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchCange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />;
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;
