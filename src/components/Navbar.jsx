import { AppBar, Toolbar, IconButton, Avatar } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
// import { ThemeContextProvider} from '../../src/context/ThemeContext';

const Navbar = () => {
  // const { mode, toggleTheme } = ThemeContextProvider();

  return (
  <AppBar position="sticky">
    <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1}}>
        <h1>Mentor Link</h1>
        </Link>
        {/* <IconButton onClick={toggleTheme} color="inherit"> */}
        <IconButton  color="inherit">
        {/* {mode === 'light' ? <Brightness4 /> : <Brightness7 />} */}
        </IconButton>
        <IconButton>
        {/* TODO: use actual image */}
        <Avatar src="/placeholder-user.jpg" />
        </IconButton>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
