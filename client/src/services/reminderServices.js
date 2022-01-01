import axios from "axios";
const apiUrl = "/api/reminders";

export function getReminders() {
    return axios.get(apiUrl);
}

export function addReminder(reminder) {
    return axios.post(apiUrl, reminder);
}

export function updateReminder(id, reminder) {
    return axios.put(apiUrl + "/" + id, reminder);
}

export function deleteReminder(id) {
    return axios.delete(apiUrl + "/" + id);
}