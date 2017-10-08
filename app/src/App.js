import React, {Component} from 'react';
import PageUsers from "./pages/Users";


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <PageUsers/>
            </div>
        );
    }
}

export default App;
