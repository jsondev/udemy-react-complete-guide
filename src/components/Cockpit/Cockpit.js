import React from "react";
import styles from "./Cockpit.css";

const cockpit = props => {
  const classes = [];

  let btnClass = "";

  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is working!!</p>
      <button
        className={btnClass}
        style={styles.Button}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
