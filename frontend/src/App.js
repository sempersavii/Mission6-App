import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchAHouse from './pages/SearchAHouse';
import ShowAHouse from './pages/ShowAHouse';
import BookAView from './pages/BookAView';
import BookingConfirm from './pages/BookingConfirm';

import './App.css';
import './Grid.css';

import headLogo from "./images/main-logo.png"

const App = () => {
  return (
    <div className="App main-grid">
      {/* <Navbar /> */}
      <div className="grid-item" id="header">
        <div className="nav-container">
          <img src={headLogo} className="nav-logo"/>
          <p className="nav-item">Property Management</p>
          <p className="nav-item">Property Search</p>
          <p className="nav-item">Body Corporate</p>
          <p className="nav-item">Commercial</p>
          <p className="nav-item">Waiheke Escapes</p>
          <p className="nav-item">Contact Us</p>
        </div>
      </div>
      <div className="grid-item" id="main-content">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<SearchAHouse />} />
          <Route path="/showahouse" element={<ShowAHouse />} />
          <Route 
            path="/showahouse/:id"
            element={<ShowAHouse />}
          />
          <Route path="/bookaview" element={<BookAView />} />
          <Route path="/confirm" element={<BookingConfirm />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Footer /> */}
      <div className="grid-item" id="footer">
        <div className="footer-container">
          <div className="footer-list-div">
            <p className="footer-list-header">Property Management</p>
            <p className="footer-list-item">Why Choose Auckland Property Management?</p>
            <p className="footer-list-item">Our Financial Guarantees for Landlords - Residenial</p>
            <p className="footer-list-item">Onwer Client Login</p>
            <p className="footer-list-item">About Us</p>
            <p className="footer-list-item">Changing to APM</p>
            <p className="footer-list-item">Why use a Property Manager</p>
            <p className="footer-list-item">Request a Rental Appraisal</p>
            <p className="footer-list-item">Our Services</p>
            <p className="footer-list-item">Fees and Commissions</p>
            <p className="footer-list-item">Meet The Team</p>
            <p className="footer-list-item">Tips for Renting Your Property</p>
            <p className="footer-list-item">Complaints Process</p>
            <p className="footer-list-item">Useful Resources for Landlords</p>
            <p className="footer-list-item">Health and Safety</p>
            <p className="footer-list-item">What our clients say</p>
            <p className="footer-list-item">Refer a Friend</p>
            <p className="footer-list-item">Video Inspection Service</p>
            <p className="footer-list-item">Owner FAQs</p>
            <p className="footer-list-item">Help & Contact Us</p>
            <p className="footer-list-item">Privacy Policy</p>
          </div>
          <div className="footer-list-div">
            <p className="footer-list-header">Body Corporate</p>
            <p className="footer-list-item">Why Choose Auckland Property Management?</p>
            <p className="footer-list-item">Request a Body Corp Proposal</p>
            <p className="footer-list-item">About Us</p>
            <p className="footer-list-item">Our Services</p>
            <p className="footer-list-item">Developer Services</p>
            <p className="footer-list-item">New Owners</p>
            <p className="footer-list-item">Client Login</p>
            <p className="footer-list-item">Forms for Body Corporates</p>
            <p className="footer-list-item">Health and Safety for Body Corporates</p>
            <p className="footer-list-item">Body Corporate Insurance</p>
            <p className="footer-list-item">Pay Levies</p>
            <p className="footer-list-item">Guide to the Unit Titles Act 2010</p>
            <p className="footer-list-item">Owner's Responsibilities in the UTA 2010</p>
            <p className="footer-list-item">Maintenance for Body Corporates</p>
            <p className="footer-list-item">Update Contact Details</p>
            <p className="footer-list-item">Contact Us</p>
            <p className="footer-list-item">Useful resources</p>
            <p className="footer-list-item">Complaints Process</p>
          </div>
          <div className="footer-list-div">
            <p className="footer-list-header">Tenant Info Centre</p>
            <p className="footer-list-item">Why Choose Auckland Property Management?</p>
            <p className="footer-list-item">Tenant FAQs</p>
            <p className="footer-list-item">Maintenance</p>
            <p className="footer-list-item">Tenancy Handbook</p>
            <p className="footer-list-item">Useful Resources</p>
            <p className="footer-list-item">Inspection Guide</p>
            <p className="footer-list-item">Our Services</p>
            <p className="footer-list-item">Auckland Property Management Tenant Payment Portal</p>
          </div>
          <div className="footer-list-div">
            <p className="footer-list-header">Commercial</p>
            <p className="footer-list-item">Why Choose APM?</p>
            <p className="footer-list-item">About Us</p>
            <p className="footer-list-item">Meet The Commercial Team</p>
            <p className="footer-list-item">Our Commercial Services</p>
            <p className="footer-list-item">Developer Services</p>
            <p className="footer-list-item">Rent & Arrears Collection</p>
            <p className="footer-list-item">Facilities Management</p>
            <p className="footer-list-item">Contract Management</p>
            <p className="footer-list-item">Lease Advisory</p>
            <p className="footer-list-item">Financial Management</p>
            <p className="footer-list-item">Tenant Side Management</p>
            <p className="footer-list-item">Property Maintenance</p>
            <p className="footer-list-item">Community Grants & Projects</p>
            <p className="footer-list-item">Request a Proposal</p>
            <p className="footer-list-item">FAQs</p>
            <p className="footer-list-item">Commercial Health and Safety</p>
            <p className="footer-list-item">Commercial Propery Owners Insurance</p>
            <p className="footer-list-item">Complaints Process</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
