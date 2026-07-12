
import {BrowserRouter} from 'react-router-dom';
import MainContent from './MainContent';
import SideBar from './SideBar';


export default function RouteFile() {

  
  return (
    <div className="route-file" style={{ display: 'flex'}}> 
      <BrowserRouter>
        <SideBar />
        <MainContent />
      </BrowserRouter>
    </div>
  );
}