import { Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { GitHub } from "@mui/icons-material";

// Components
import Layout from "../components/Layout";
import ToolModel from "../components/ToolModel";

const models = [
  {
    name: "Three JS",
    model: "./models/threejs.glb",
  },
  {
    name: "React",
    model: "./models/react.glb",
  },
  {
    name: "Node JS",
    model: "./models/nodejs.glb",
  },
  {
    name: "Javascript",
    model: "./models/javascript.glb",
  },
];

const StyledTool = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  padding: theme.spacing(2),
  borderRadius: "50%",
  aspectRatio: "1/1",
}));

const Homepage = () => {
  return (
    <Layout footer>
      <Container
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: 4,
        }}
      >
        <Typography variant="h1" align="center">
          Rui Pereira{" "}
          <a
            href="https://github.com/rmbprui"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <GitHub fontSize="inherit" />
          </a>
        </Typography>
        <Typography variant="h5" align="center">
          Currently experimenting with:
        </Typography>
        <Grid
          container
          spacing={1}
          style={{
            marginTop: 0,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {models.map((model) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
              sx={{ textAlign: "center", p: 4 }}
            >
              <StyledTool elevation={3}>
                <ToolModel model={model.model} />
              </StyledTool>
              <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 600 }}>
                {model.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Homepage;
