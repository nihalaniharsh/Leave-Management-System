
import { updateLeaveStatus } from "../services/leaveApi";

function LeaveTable({leaves= [], reload}){

    const changeStatus = async(id, status)=>{
      await updateLeaveStatus(id, status)
      reload();
    };

    return(
        <div className="table-responsive" 
           style={{
        maxHeight: "400px",
        overflowY: "auto",
        scrollbarWidth: "none", 
        msOverflowStyle: "none" 
      }}
    >
      <style>
        {`
          .table-responsive::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* Chrome/Safari */
          }
            `}
            </style>

        <table className="table table-striped table-hover align-middle mb-0">
            <thead className="table-light sticky-top">
                <tr>
                    <th>Employee Name</th>
                    <th>Leave Type</th>
                    <th>From → To</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {leaves.length === 0 && (
                    <tr>
                        <td colSpan='5' className="text-center text-muted">
                            No leave requests found.
                        </td>
                    </tr>
                )}
                {leaves.map(l=>(
                 <tr key={l._id}>
                    <td>{l.employeeName}</td>
                    <td>{l.leaveType}</td>
                    <td>{l.fromDate?.slice(0,10)} → {l.toDate.slice(0, 10)}</td>
                     <td>
                          <span
                  className={`badge ${
                    l.status === "Approved"
                      ? "bg-success"
                      : l.status === "Rejected"
                      ? "bg-danger"
                      : "bg-warning text-dark"
                  }`}
                >
                  {l.status}
                </span>
                     </td>
                     <td>
                        {l.status?.toLowerCase() === "pending" && (
  <>
    <button onClick={() => changeStatus(l._id, "Approved")} className="btn btn-sm btn-success me-2">Approve</button>
    <button onClick={() => changeStatus(l._id, "Rejected")} className="btn btn-sm btn-danger">Reject</button>
  </>
)}
                     </td>
                 </tr>
                ))}
            </tbody>
        </table>

      
        </div>
    );
}

export default LeaveTable;
