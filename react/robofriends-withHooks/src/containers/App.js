import React, { useEffect, useState } from "react";
import CardList from "../components/CardList.js";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry.js";
import "./App.css";

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function grabUsers() {
            setRobots([]);
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const users = await response.json();
            setRobots(users);
        }
        grabUsers();
    }, []);

    function onSearchChange(event) {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    const buttonClicked = () => {
        return setCount(count + 1);
    };

    return (
        <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <button
                onClick={buttonClicked}
            >{`Click me! Count:${count}`}</button>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />;
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;
