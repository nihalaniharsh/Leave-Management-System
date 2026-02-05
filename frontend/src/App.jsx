// import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import ApplyLeave from './components/ApplyLeave'
// import LeaveTable from './components/LeaveTable'
import Dashboard from './pages/Dashboard'
//import LeaveTable from './components/LeaveTable';
 import LeavesPage from "./pages/LeavesPage";
 import Footer from "./components/Footer"

const App = () => {
  return (

    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-4'>

        <div className='container'>
          <Link className='navbar-brand' to="/">Leave Management</Link>
          <div>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className="nav-link" to="/">Dashboard</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/apply-leave">Apply Leave</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/leaves">Leave Table</Link>
              </li>

            </ul>
          </div>
        </div>

      </nav>

      {/* here we create routes */}
      <div className='container'>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/apply-leave' element={<ApplyLeave onSuccess={() => {}} />} />
         <Route path="/leaves" element={<LeavesPage />} />
      </Routes>

      </div>

      <Footer/>
      
    </div>
      




  );
}

export default App