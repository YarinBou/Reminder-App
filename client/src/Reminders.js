import { Component } from "react";
import {
    addReminder,
    getReminders,
    updateReminder,
    deleteReminder,
} from "./services/reminderServices";

class Reminders extends Component {
    state = {
        reminders: [],
        currentReminder: "",
        alertReminder: "",
        date: "",
        buttonPopup: false,
        time: Date.now(),
    };

    async componentDidMount() {
        try {
            const { data } = await getReminders();
            this.setState({ reminders: data });
            this.interval = setInterval(() => this.timer(), 1);
        } catch (error) {
            console.log(error);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentReminder: input.value });
    };

    handleSubmit = async(e) => {
        e.preventDefault();
        const originalReminders = this.state.reminders;
        try {
            const { data } = await addReminder({
                reminder: this.state.currentReminder,
                date: new Date(this.state.date),
            });
            const reminders = originalReminders;
            reminders.push(data);
            this.setState({ reminders, currentReminder: "", date: "" });
        } catch (error) {
            console.log(error);
        }
    };

    handleUpdate = async(currentReminder) => {
        const originalReminders = this.state.reminders;
        try {
            const reminders = [...originalReminders];
            const index = reminders.findIndex(
                (reminder) => reminder._id === currentReminder
            );
            reminders[index] = {...reminders[index] };
            reminders[index].completed = !reminders[index].completed;
            this.setState({ reminders });
            await updateReminder(currentReminder, {
                completed: reminders[index].completed,
            });
        } catch (error) {
            this.setState({ reminders: originalReminders });
            console.log(error);
        }
    };

    timer() {
        let current = new Date(Date.now());
        this.setState({ time: current });
        const relevent_reminders = this.state.reminders.filter(
            (reminder) => reminder.completed === false
        );
        const old_reminders = relevent_reminders.filter(
            (reminder) => new Date(reminder.date) < current
        );
        old_reminders.map((reminder) =>
            this.handleUpdate((reminder.completed = true))
        );
        const popup_reminders = relevent_reminders.filter(function(reminder) {
            let dis = current.getTime() - new Date(reminder.date).getTime();
            if (dis <= 2000 && dis > 0) {
                return true;
            }
            return false;
        });
        if (popup_reminders.length > 0) {
            let alert_rem = popup_reminders[0];
            this.setState({ buttonPopup: true, alertReminder: alert_rem });
        }
    }

    handleDelete = async(currentReminder) => {
        const originalReminders = this.state.reminders;
        try {
            const reminders = originalReminders.filter(
                (reminder) => reminder._id !== currentReminder
            );
            this.setState({ reminders });
            await deleteReminder(currentReminder);
        } catch (error) {
            this.setState({ reminders: originalReminders });
            console.log(error);
        }
    };
}

export default Reminders;