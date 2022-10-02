import { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

type Props = PropsWithChildren<{
  navbar?: boolean;
  children?: React.ReactNode;
  footer?: boolean;
}>;

const Layout = ({ navbar, footer, children }: Props) => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {navbar && <Navbar />}
      <Box
        component="div"
        sx={{
          display: 'flex',
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
      {footer && <Footer />}
    </Box>
  );
};

export default Layout;
