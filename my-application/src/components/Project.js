import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./Project.css";
import house from "../img/house.jpg";
import book from "../img/book.jpg";
import code from '../img/code.jpg'
import graph from '../img/graph.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Project = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl" className="container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                {" "}
                <Card sx={{ maxWidth: 500, height: 500 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={book}
                    alt="portfolio"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      My Portfolio
                    </Typography>
                    <Divider />
                    <Typography variant="body1" color="text.secondary">
                      Technologies: HTML | CSS | Javascript | REACTjs |
                      React-MaterialUI | Netlify
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Project
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {" "}
                <Card sx={{ maxWidth: 500, height: 500 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={house}
                    alt="lake-house"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Palau Real Estate
                    </Typography>
                    <Divider />
                    <Typography variant="body1" color="text.secondary">
                      Technologies: HTML | CSS | Javascript | REACTjs |
                      React-BootStrap | Google Firebase | EMAILjs
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Project
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {" "}
                <Card sx={{ maxWidth: 500, height: 500 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={code}
                    alt="coding"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Language Interpreter
                    </Typography>
                    <Divider />
                    <Typography variant="body1" color="text.secondary">
                      Technologies: Java | Ada Programming Language
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Project
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {" "}
                <Card sx={{ maxWidth: 500, height: 500 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={graph}
                    alt="graph"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Bacon Number
                    </Typography>
                    <Divider />
                    <Typography variant="body1" color="text.secondary">
                      Technologies: REACTjs | React-MaterialUI | Netlify
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Project
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {" "}
                <Card sx={{ maxWidth: 500, height: 500 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Burning House
                    </Typography>
                    <Divider />
                    <Typography variant="body1" color="text.secondary">
                      Technologies: REACTjs | React-MaterialUI | Netlify
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Project
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {" "}
                <Card sx={{ maxWidth: 500, height: 500 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={code}
                    alt="coding"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Palau Real Estate
                    </Typography>
                    <Divider />
                    <Typography variant="body1" color="text.secondary">
                      Technologies: REACTjs | React-MaterialUI | Netlify
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Project
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Project;
