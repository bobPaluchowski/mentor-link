import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LoginSignUp from './pages/LoginSignUp';
import Appointments from './pages/Appointments';
import Chat from './pages/Chat';
import VideoCall from './pages/VideoCall';
import Journal from './pages/Journal';
import UserSettings from './pages/UserSettings';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const isAuthenticated = true; // Replace with actual authenticationlogic

// const App = () => (
// <Router>
//     <Routes>
//       <Route element={<Layout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<LoginSignUp />} />
//         <Route path="/appointments" element={<Appointments />} />
//         <Route path="/chat" element={<Chat />} />
//         <Route path="/video-call" element={<VideoCall />} />
//         <Route path="/journal" element={<Journal />} />
//         <Route path="/settings" element={<UserSettings />} />
//       </Route>
//     </Routes>
//   </Router>
// )

const App = ({ children}) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <Router>
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginSignUp />} />
      <Route element={<Layout />}>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/appointments" element={isAuthenticated ? <Appointments /> : <Navigate to="/login" />} />
        <Route path="/chat" element={isAuthenticated ? <Chat /> : <Navigate to="/login" />} />
        <Route path="/video-call" element={isAuthenticated ? <VideoCall /> : <Navigate to="/login" />} />
        <Route path="/journal" element={isAuthenticated ? <Journal /> : <Navigate to="/login" />} />
        <Route path="/settings" element={isAuthenticated ? <UserSettings /> : <Navigate to="/login" />} />
      </Route>
    </Routes>
  </Router>
  </LocalizationProvider>
);
export default App;
