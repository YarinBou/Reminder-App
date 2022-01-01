import React from "react";
import Reminders from "../Reminders";
import { Paper } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import Popup from "../components/Popup";
import "../App.css";

class ListTimersScreen extends Reminders {
  state = {
    reminders: [],
    currentReminder: "",
    alertReminder: "",
    date: "",
    buttonPopup: false,
    time:Date.now()
  };

  render() {
    return (
      <div className="app">
        <Popup
          trigger={this.state.buttonPopup}
          setTrigger={() => this.setState({ buttonPopup: false })}
          alertReminder={this.state.alertReminder}
        ></Popup>
            {this.state.reminders.map((reminder) => (
              <React.Fragment key={reminder._id}>
                <Paper className="flex reminder_container">
                  <Checkbox
                    checked={reminder.completed}
                    onClick={() => this.handleUpdate(reminder._id)}
                    color="primary"
                  />
                  <div
                    className={
                      reminder.completed ? "reminder line_through" : "reminder"
                    }
                  >
                    {"Task: "+reminder.reminder+". "}
                    {reminder.completed ? "Date: "+new Date(reminder.date).toString() 
                    : "time in seconds: "+ Math.abs(new Date(reminder.date) - new Date(Date.now()))/1000}
                  </div>
                  <Button
                    onClick={() => this.handleDelete(reminder._id)}
                    color="secondary"
                  >
                    delete
                  </Button>
                </Paper>
              </React.Fragment>
            ))}
          </div>
    );
  }
}

export default ListTimersScreen;
