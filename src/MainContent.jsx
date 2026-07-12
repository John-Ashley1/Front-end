import {Routes, Route} from 'react-router-dom';
import MotherScreen from "./MotherScreen/MotherScreen";

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
      </Routes>



    </div>
  );
}

