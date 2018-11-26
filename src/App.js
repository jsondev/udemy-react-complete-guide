import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 'hjdkfhuaj', name: "Max", age: "24" },
            { id: 'fdhuiaf3', name: "Manu", age: "29" },
            { id: 'fdai3osd', name: "Stephanie", age: "30" }
        ]
    }


    /**
     *  Updates a single person
     */
    nameChangedHandler = (event, id) => {
        
        //  finds the single person to update by their id
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        //  creates a new object with the fetched person
        const person = {
            ...this.state.persons[personIndex]
        }

        // alternative approach to creating the fetched person object
        // const person = Object.assign({}, this.state.persons[personIndex]);

        //  updates the name of the fetched person
        person.name = event.target.value;

        //  creates a copy of the persons array
        const persons = [...this.state.persons];

        // point to where the update should take place
        persons[personIndex] = person;

        // update the fetched person in the persons array
        this.setState({
            persons: persons
        });
    }

    /**
     * Deletes a single person
     */
    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} key={index} changed={(event) => this.nameChangedHandler(event, person.id)} />
                        })
                    }
                </div>
            )
        }
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is working!!</p>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
