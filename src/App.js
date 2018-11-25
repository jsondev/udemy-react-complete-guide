import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: "24" },
            { name: "Manu", age: "29" },
            { name: "Stephanie", age: "30" }
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: "24" },
                { name: "Manu", age: "29" },
                { name: "Stephanie", age: "30" }
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: "Max", age: "24" },
                { name: event.target.value, age: "29" },
                { name: "Stephanie", age: "30" }
            ]
        })
    }
    render() {
        const style = {
            backgroundColor:'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        }
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is working!!</p>
                <button style={style} onClick={() => this.switchNameHandler("Max!!!")}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} />
                <Person name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    click={this.switchNameHandler.bind(this, "James!")} />
            </div>
        );
    }
}

export default App;
