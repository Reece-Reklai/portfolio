import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Reece from "../img/Reece-Reklai.jpeg";
import "./About.css";

const About = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: "60px",
  }));

  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}></Box>
          <CardMedia component="img" sx={{ width: 250 }} image={Reece} />
          <ThemeProvider theme={darkTheme}>
            <CardContent>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "background.default",
                  gap: 2,
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                  className="about-paragraph"
                >
                  body1. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Box>
            </CardContent>
          </ThemeProvider>
        </Card>
      </Container>
    </>
  );
};

export default About;
