import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LoginSignUp from './pages/LoginSignUp';
import Appointments from './pages/Appointments';
import Chat from './pages/Chat';
import VideoCall from './pages/VideoCall';
import Journal from './pages/Journal';
import UserSettings from './pages/UserSettings';

const App = () => (
<Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/video-call" element={<VideoCall />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/settings" element={<UserSettings />} />
      </Route>
    </Routes>
  </Router>
)

export default App;
