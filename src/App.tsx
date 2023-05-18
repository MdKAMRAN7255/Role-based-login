import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Index from './component/LoginPage';
import AdminLogin from './component/LoginPage/AdminLogin/adminLogin';
import MentorLogin from './component/LoginPage/MentorLogin/mentorLogin';
import TraineeLogin from './component/LoginPage/TraineeLogin/traineeLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}> 
            <Route path='/adminLogin' element={<AdminLogin />}/>
            <Route path='/mentorLogin' element={<MentorLogin />} />
            <Route path='/traineeLogin' element={<TraineeLogin />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
