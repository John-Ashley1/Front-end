import {Routes, Route} from 'react-router-dom';
import MotherScreen from "./MotherScreen/MotherScreen";
import Companyprofile from "./Components Folder/Company/Companyprofile";
import EditProfile from "./Components Folder/Company/EditProfile";
import VerificationStatus from "./Components Folder/Company/VerificationStatus";
import InternshipListing from "./Components Folder/Company/InternshipListings";
import CreateInternship from "./Components Folder/Company/CreateInternship";
import ApplicationList from "./Components Folder/Company/ApplicationList";
import ApplicantDetails from "./Components Folder/Company/ApplicantDetails";
import Shortlisted from "./Components Folder/Company/Shortlisted";
import SlotManagement from "./Components Folder/Company/SlotManagement";
import Certificates from "./Components Folder/Company/Certificates";
import Messages from "./Components Folder/Company/Messages";
import Notifications from "./Components Folder/Company/Notifications";
import NotificationDetails from "./Components Folder/Company/NotificationDetails";


export default function MainContent() {
  return (
    <div className="main-content"

    style={{
      width: '80%',
      height: '100vh',
      backgroundColor: 'grey',
    }}>


      <Routes>
        <Route path="/Page/StudentProfile/ProfileBox" element={<div>Component 1</div>} />
        <Route path="/Page/MotherScreen" element={<MotherScreen/>} />
        <Route path="/component-1" element={<Companyprofile/>} />
        <Route path="/component-1/edit" element={<EditProfile/>} />
        <Route path="/component-2" element={<VerificationStatus/>} />
        <Route path="/component-3" element={<InternshipListing/>} />
        <Route path="/component-3/post" element={<CreateInternship/>} />
        <Route path="/component-4" element={<ApplicationList/>} />
        <Route path="/component-4/:applicantId" element={<ApplicantDetails/>} />
        <Route path="/component-5" element={<Shortlisted/>} />
        <Route path="/component-6" element={<SlotManagement/>} />
        <Route path="/component-7" element={<Certificates/>} />
        <Route path="/component-8" element={<Messages/>} />
        <Route path="/component-9" element={<Notifications/>} />
        <Route path="/component-9/:notificationId" element={<NotificationDetails/>} />
      </Routes>



    </div>
  );
}