import { Link } from "react-router-dom";


export default function SideBar() {


  return (

    <div className="sidebar" 
    style={{
      width: '15%',
      height: '100vh',
      backgroundColor: 'white',
    }}>

      <h1>Mother Screen</h1>

      <Link to="/Page/MotherScreen">Mother Screen</Link>

      <h1>Component Links </h1>

      <Link to="/component-1">Component 1 - CompanyProfile </Link><br/>
      <Link to="/component-2">Component 2 - VerificationsStatus</Link><br />
      <Link to="/component-3">Component 3 - Internships Listings</Link><br /> 
      <Link to="/component-4">Component 4 - Application List</Link><br />
      <Link to="/component-5">Component 5 - Shortlisted</Link><br />
      <Link to="/component-6">Component 6 - Slot Management</Link><br />
      <Link to="/component-7">Component 7 - Certificates</Link><br />
      <Link to="/component-8">Component 8 - Messages</Link><br />
      <Link to="/component-9">Component 9 - Notifications</Link><br />



      


    </div>

      );


}