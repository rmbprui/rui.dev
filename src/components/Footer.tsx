import { Typography, AppBar, Container, Toolbar, Box } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <footer>
      <AppBar
        position="static"
        sx={{
          display: 'flex',
          backgroundColor: (theme) => theme.palette.background.paper,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bottom: 0,
        }}
        color="transparent"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="div"
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CopyrightIcon sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2" noWrap>
                Rui Pereira | {new Date().getFullYear()}
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
  );
};

export default Footer;
