import React, { Component } from 'react';
import styles from './App.css';
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
     * Deletes a single person by taking in an unique identifier
     */
    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();

        // creates a copy of the persons array
        const persons = [...this.state.persons];

        // cuts the person out of the array
        persons.splice(personIndex, 1);

        // updates the array
        this.setState({ persons: persons });
    }

    /**
     * Toggles adding and removing the list of people from the view
     */
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }
    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
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
            style.backgroundColor = 'red';
        
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push(styles.red);
        }
        if (this.state.persons.length <= 1) {
            classes.push(styles.bold);
        }

        return (
            
                <div className={styles.App}>
                    <h1>Hi, I'm a React App</h1>
                    <p className={classes.join(' ')} >This is working!!</p>
                    <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>
            
        );
    }
}

export default App;
