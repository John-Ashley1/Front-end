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

      <Link to="/component-1">Component 1 - Profile Box </Link>


      


    </div>

      );


}