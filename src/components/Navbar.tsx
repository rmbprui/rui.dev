import { Visibility } from '@mui/icons-material';
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  Tooltip,
  Button,
} from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
      color="default"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ maxHeight: '60px' }}>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                fontFamily: 'sans-serif',
                fontWeight: 600,
                letterSpacing: '.2rem',
                color: 'inherit',
              }}
            >
              Rui Pereira
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              flexGrow: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Tooltip title="Preview SmartFeed">
              <Button variant="text" color="secondary">
                <Visibility sx={{ mr: 1 }} />
                Preview
              </Button>
            </Tooltip>
            <Button variant="contained">Action</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
