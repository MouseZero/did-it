import uuid from "uuid/v4";
import React, { Component } from "react";
import { HABIT_KEY } from "./constants";

export default class CreateHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: ""
      }
    };
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      }
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const habits = JSON.parse(localStorage.getItem(HABIT_KEY)) || {};
    const habit = {
      habitId: uuid(),
      ...this.state.fields
    };
    localStorage.setItem(
      HABIT_KEY,
      JSON.stringify({
        ...habits,
        [habit.habitId]: habit
      })
    );
  };
  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <h1>Create Habit</h1>
        <input required name="title" type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
