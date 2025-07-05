// import logo from './logo.svg';
import './App.css';
import NavbarComponent from './NavbarComponent';
import TimeslotComponent from './TimeslotComponent'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Home from './Pages/Home';
// import About from './Pages/About';
import CourseInfo from './CourseInfo';
import TeeTimes from './TeeTimes';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import TeeTimeConfirmation from './TeeTimeConfirmation';


function App() {

  return (
    <>
      <nav>
        <NavbarComponent />
      </nav>
      <Routes>
        <Route path="/tee_times" element={<TeeTimes />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course_info" element={<CourseInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/TeeTimeConfirmation" element={<TeeTimeConfirmation />}  />
      </Routes>

    </>
  )
}

export default App;
