import React from "react";
import Reminders from "../Reminders";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Popup from "../components/Popup";
import "../App.css";

class TimerScreen extends Reminders {
  state = {
    reminders: [],
    currentReminder: "",
    alertReminder: "",
    date: "",
    buttonPopup: false,
  };

  render() {
    return (
      <div className="app">
        <div className="app-title">
          <h2>Tasks Reminder</h2>
        </div>
        <Popup
          trigger={this.state.buttonPopup}
          setTrigger={() => this.setState({ buttonPopup: false })}
          alertReminder={this.state.alertReminder}
        ></Popup>
        <div className="app-input">
          <form onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              type="text"
              required={true}
              placeholder="What do you want to do?"
              value={this.state.currentReminder}
              onChange={this.handleChange}
            />
            <DatePicker
              className="form-control"
              selected={this.state.date}
              value={this.state.date}
              onChange={(date) => this.setState({ date: date })}
              showTimeSelect
              timeFormat="HH:mm aa"
              timeIntervals={1}
              timeCaption="Time"
              dateFormat="MMMM d, yyyy h:mm"
              placeholderText="When do you want do it?"
            />
            <button className="btn btn-primary btn-block" type="submit">
              Add Reminder
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TimerScreen;
