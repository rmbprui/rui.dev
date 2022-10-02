import { Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Components
import Layout from '../components/Layout';
import ToolModel from '../components/ToolModel';

const StyledTool = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
  padding: theme.spacing(2),
  borderRadius: '50%',
  aspectRatio: '1/1',
}));

const Homepage = () => {
  return (
    <Layout footer>
      <Container style={{ flex: 1 }}>
        <Typography variant="h1" align="center">
          Rui Pereira
        </Typography>
        <Typography variant="h5" align="center">
          Currently experimenting with:
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          style={{ marginTop: 0 }}
        >
          <Grid item xs={12} sm={6} md={4} p={4}>
            <StyledTool elevation={3}>
              <Typography variant="body1">Three JS</Typography>
              <ToolModel model="./models/threejs.glb" />
            </StyledTool>
          </Grid>
          <Grid item xs={12} sm={6} md={4} p={4}>
            <StyledTool elevation={3}>
              <Typography variant="body1">React</Typography>
              <ToolModel model="./models/react.glb" />
            </StyledTool>
          </Grid>
          <Grid item xs={12} sm={6} md={4} p={4}>
            <StyledTool elevation={3}>
              <Typography variant="body1">Node JS</Typography>
              <ToolModel model="./models/nodejs.glb" />
            </StyledTool>
          </Grid>
          <Grid item xs={12} sm={6} md={4} p={4}>
            <StyledTool elevation={3}>
              <Typography variant="body1">Javascript</Typography>
              <ToolModel model="./models/javascript.glb" />
            </StyledTool>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Homepage;
