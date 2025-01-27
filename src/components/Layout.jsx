import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => (
<>
  <Navbar />
    <main style={{ flex: 1, padding: '20px' }}>
    <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
