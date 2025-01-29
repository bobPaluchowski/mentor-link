import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => (
<div style={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }}>
  <Navbar />
    <main style={{ flex: 1, padding: '20px' }}>
    <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
