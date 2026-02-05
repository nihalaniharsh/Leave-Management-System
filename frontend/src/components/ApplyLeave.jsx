import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { createLeave } from "../services/leaveApi";

function ApplyLeave({onSuccess}){
    // const navigate = useNavigate();
   const [data, setData] = useState({
    employeeName: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: ""
   });

   const handleChange = e => setData({...data, [e.target.name]: e.target.value});

   const submitLeave = async(e) =>{
    e.preventDefault();
    await createLeave(data);

    //navigate("/leaves");
    onSuccess();
    setData({employeeName:"", leaveType:"", fromDate:"", toDate:"", reason:""});
   };

   return(
     <div className="d-flex justify-content-center mb-4 ">
    <form onSubmit={submitLeave}    className="p-4 border rounded shadow-sm w-100"
        style={{ maxWidth: "500px" }} >

 <h3 className="text-center mb-4">Apply for Leave</h3>

        <div className="mb-3">
              <label className="form-label">Employee Name</label>
        <input type="text" className="form-control" name="employeeName" placeholder="Employee Name" value={data.employeeName} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
            <label className="form-label">Leave Type</label>
        <select className="form-select" name="leaveType" value={data.leaveType} onChange={handleChange} required>
            <option value="">Select Leave Type</option>
            <option value="Sick">Sick</option>
            <option value="Casual">Casual</option>
            <option value="Paid">Paid</option>
        </select>
        </div>
        <div className="row mb-3">
            <div className="col">
              <label className="form-label">From</label>
        <input className="form-control" type="date" name="fromDate" value={data.fromDate} onChange={handleChange} required/>
        </div>
         <div className=" col ">
               <label className="form-label">To</label>
        <input className="form-control" type="date" name="toDate" value={data.toDate} onChange={handleChange}/>
        </div>
        </div>
        <div className="mb-3">
            <label className="form-label">Reason</label>
        <textarea className="form-control" name="reason" placeholder="Reason for leave" value={data.reason} onChange={handleChange} rows="3"/>
        </div>
        <button type="submit" className="btn btn-primary w-100">Apply Leave</button>
    </form>
    </div>
   );
}

export default ApplyLeave;