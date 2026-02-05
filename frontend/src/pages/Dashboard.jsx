import { useState, useEffect } from "react";
import { fetchLeaves } from "../services/leaveApi";
//import ApplyLeave from "../componentsApplyLeave";


function Dashboard() {
  const [leaves, setLeaves] = useState([]);

  const loadLeaves = async () => {
    const res = await fetchLeaves();
    setLeaves(res.data);
  };




  useEffect(() => {
    loadLeaves();
  }, []);

  const pending = leaves.filter((l) => l.status?.toLowerCase() === "pending").length;
  const approved = leaves.filter((l) => l.status === "Approved").length;
  const rejected = leaves.filter((l) => l.status === "Rejected").length;

  return (


    <div>
      <h1 className="mb-4 text-center">Leave Management Dashboard</h1>

      <div className="row text-center mb-4 ">
        <div className="col-md-4 mb-3">
          <div className="card text-bg-warning text-center p-3">Pending: {pending}</div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-bg-success text-center p-3">Approved: {approved}</div>
        </div>
        
        <div className="col-md-4 mb-3">
          <div className="card text-bg-danger text-center p-3">Rejected: {rejected}</div>
        </div>
        
      </div>

        

      
      
    </div>
  );
}

export default Dashboard;

