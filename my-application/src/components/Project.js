import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
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
import code from "../img/code.jpg";
import graph from "../img/graph.jpg";
import burn from "../img/burn.jpg";
import fountain from "../img/fountain.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

const Project = () => {
  return (
    <div>
      <Grid>
        <Grid xs={8} md={6}>
          <Item>
            {" "}
            <Card sx={{ width: 1, height: 1 }}>
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
                <Typography variant="body1" color="text.primary">
                  Technologies: HTML | CSS | Javascript | REACTjs |
                  React-MaterialUI | Netlify
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  This is my website that I built from scratch. I used ReactJS
                  to build the front-end with the use of React-MaterialUI as the
                  design. I deploy/hosted this website through netlify. It takes
                  advantage of React functions, React props and events,
                  React-Routing, and more!
                </Typography>
              </CardContent>
              <CardActions sx={{ mr: 15 }}>
                <a
                  href="https://github.com/Reece-Reklai/portfolio"
                  className="button-hyperlink"
                >
                  <Button size="medium" variant="contained" color="primary">
                    Project
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={8} md={6}>
          <Item>
            {" "}
            <Card sx={{ width: 1, height: 1 }}>
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
                <Typography variant="body1" color="text.primary">
                  Technologies: HTML | CSS | Javascript | REACTjs |
                  React-BootStrap | Google Firebase | EMAILjs
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  Developed as a group project with three people. Users can view
                  the current weather status in the country of Palau and view
                  house/land listings for sale. Users can create an account and
                  login to create their own listing sale. Users can contact us
                  through an email service set up within the website.
                </Typography>
              </CardContent>
              <CardActions sx={{ mr: 15 }}>
                <a
                  href="https://github.com/Reece-Reklai/palau_real_estate"
                  className="button-hyperlink"
                >
                  <Button size="medium" variant="contained" color="primary">
                    Project
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid xs={8} md={6}>
          <Item>
            {" "}
            <Card sx={{ width: 1, height: 1 }}>
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
                <Typography variant="body1" color="text.primary">
                  Technologies: Java | Ada Programming Language
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  Developed with a partner. This language interpreter is a
                  parser for the Ada Programming Language developed in Java. It
                  can perform perform quadratic operations, if-else statements,
                  print to terminal, comments, and quick-sort algorithmn in Ada
                  syntax.
                </Typography>
              </CardContent>
              <CardActions sx={{ mr: 15 }}>
                <a
                  href="https://github.com/Reece-Reklai/language_interpreter"
                  className="button-hyperlink"
                >
                  <Button size="medium" variant="contained" color="primary">
                    Project
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={8} md={6}>
          <Item>
            {" "}
            <Card sx={{ width: 1, height: 1 }}>
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
                <Typography variant="body1" color="text.primary">
                  Technologies: C++
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  School project that uses breadth-first search to locate the
                  shortest path between two points. It uses
                  bridges.cs.herokuapp.com to visualize the path.
                </Typography>
              </CardContent>
              <CardActions sx={{ mr: 15 }}>
                <a
                  href="https://github.com/Reece-Reklai/bacon_number"
                  className="button-hyperlink"
                >
                  <Button size="medium" variant="contained" color="primary">
                    Project
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={8} md={6}>
          <Item>
            {" "}
            <Card sx={{ width: 1, height: 1 }}>
              <CardMedia
                component="img"
                height="250"
                image={burn}
                alt="burning-house"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Burning House
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  Technologies: Prolog
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  It is a text-based escape game. Users can view their current
                  health status, environment around them, and equipment. They
                  can interact with objects around the house to either change
                  locations or influence their character capabilities. Escape
                  the burning house!
                </Typography>
              </CardContent>
              <CardActions sx={{ mr: 15 }}>
                <a
                  href="https://github.com/Reece-Reklai/burning_house"
                  className="button-hyperlink"
                >
                  <Button size="medium" variant="contained" color="primary">
                    Project
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={8} md={6}>
          <Item>
            {" "}
            <Card sx={{ width: 1, height: 1 }}>
              <CardMedia
                component="img"
                height="250"
                image={fountain}
                alt="drinking-fountian"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fountain Yelp Program
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  Technologies: C++
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  This program allows users to create an account to add new
                  fountain locations around University campus and create and
                  view reviews associated with each fountain.
                </Typography>
              </CardContent>
              <CardActions sx={{ mr: 15 }}>
                <a
                  href="https://github.com/Reece-Reklai/fountain_yelp_program"
                  className="button-hyperlink"
                >
                  <Button size="medium" variant="contained" color="primary">
                    Project
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
