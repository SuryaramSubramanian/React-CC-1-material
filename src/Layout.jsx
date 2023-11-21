// Layout.js
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';

const Layout = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    <Navbar />
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 8 }}> 
      {children}
    </Box>
  </Box>
);
export default Layout;