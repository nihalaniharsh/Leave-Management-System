import axios from "axios";

const API = "http://localhost:5000/api/leaves";


//sending a get request used to retrive all leave requests from the backend.
export const fetchLeaves = () => axios.get(API);
//sending a post request to API data is the object containing the leave detail
export const createLeave = (data) => axios.post(API, data);
//sending a put request to the backend to update specific leave 
//used to change the status of a leave like (approved , rejected).
export const updateLeaveStatus = (id, status) =>
    axios.put(`${API}/${id}`, {status});