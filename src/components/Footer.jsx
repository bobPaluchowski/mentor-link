import {BottomNavigation, BottomNavigationAction } from '@mui/material';
import { CalendarMonth, Chat, VideoCall, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => (
  <BottomNavigation>
    <BottomNavigationAction label="Appointments" icon={<CalendarMonth />} component={Link} to="/appointments" />
    <BottomNavigationAction label="Chat" icon={<Chat />} component={Link} to="/chat" />
    <BottomNavigationAction label="Video Call" icon={<VideoCall />} component={Link} to="/video-call" />
    <BottomNavigationAction label="Journal" icon={<Edit />} component={Link} to="/journal" />
  </BottomNavigation>
);

export default Footer;
