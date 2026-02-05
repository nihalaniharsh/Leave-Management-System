
import { useState, useEffect } from "react";
import { fetchLeaves } from "../services/leaveApi";
import LeaveTable from "../components/LeaveTable";




function LeavesPage() {
  const [leaves, setLeaves] = useState([]);




  const loadLeaves = async () => {
    const res = await fetchLeaves();
    setLeaves(res.data || []); 
  };

  useEffect(() => {
    loadLeaves();
  }, []);




  return (
    <div className="container my-4">
      <h1 className="mb-4 text-center"
      >All Leave Requests</h1>
      <LeaveTable leaves={leaves} reload={loadLeaves} />
    </div>
  );
}

export default LeavesPage;
