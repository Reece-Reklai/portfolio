import { useState } from "react";
import { send } from "emailjs-com";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Reece from "../img/Reece-Reklai.jpeg";
import Resume from '../downloads/Resume.pdf'
import "./About.css";

const About = () => {
  const darkTheme = createTheme({ palette: { mode: "dark" } });
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_8trg9ht", "template_aiwvtw3", toSend, "aehVwpHdlcBlbJyaA")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Card sx={{ display: "flex"}}>
          <Box sx={{ display: "flex", flexDirection: "column"}}></Box>
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
                  Greetings, my name is Reece Reklai. I am a senior computer
                  science student from a small country called Palau. Currently,
                  I am attending Walla Walla University, my expected graduation
                  is June 2023. In my time attending Walla Walla University, I
                  have explored many avenues within the world of coding.
                  Recently, I have found an interest in the following: web
                  development and mobile app development.
                  <br></br>
                  <br></br>
                  Because of this new found interest, I have been using
                  frameworks such as ReactJS for my website. As for mobile, I am
                  using Dart's framework called flutter for my senior project.
                  Looking forward in my future, I am applying for careers that
                  can propel my interests in front/back-end wed development or
                  mobile app development. I am still open to other careers in
                  software development because I love learning new technologies,
                  programming languages, libraries, and frameworks.
                  <br></br>
                  <br></br>
                  My passions and hobbies are centered around self improvement
                  in all aspects of my life. For my fitness journey, I track my
                  macros and lift weights. As for coding, I started looking into
                  two technologies: nodeJS and Kotlin. Lastly, I started to develop
                  a habit to read because learning from people's journey is a
                  testament that I find important for me to take myself to the
                  next level. In my spiritual path, I started to read the Bible
                  and eventually, hoping to start attending church! The
                  process of learning is what would best describe my
                  personality: I will spend many hours to learn new skills and
                  get better at current ones, it is just fun!
                </Typography>
                <CardActions>
                  <Button
                    variant="contained"
                    sx={{ ml: "33%", mt: "1%" }}
                    href={Resume}
                    download='Reece Reklai Resume'
                  >
                    Download My Resume
                  </Button>
                </CardActions>
              </Box>
            </CardContent>
          </ThemeProvider>
        </Card>
        <Card maxWidth="xl" sx={{ mt: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}></Box>
          <ThemeProvider theme={darkTheme}>
            <CardContent>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "background.default",
                  gap: 2,
                }}
              >
                <Typography variant="h3" gutterBottom className="font-color">
                  Contact Me
                </Typography>
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Enter Name"
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
                  <br></br>
                  <br></br>
                  <input
                    type="text"
                    name="reply_to"
                    placeholder="Enter Email Address"
                    value={toSend.reply_to}
                    onChange={handleChange}
                  />
                  <br></br>
                  <br></br>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Enter message"
                    value={toSend.message}
                    onChange={handleChange}
                    row="13"
                    cols="132"
                  />
                  <CardActions>
                    <Button
                      variant="contained"
                      sx={{ ml: "-0.5%", mt: "0.5%" }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </CardActions>
                </form>
              </Box>
            </CardContent>
          </ThemeProvider>
        </Card>
      </Container>
    </>
  );
};

export default About;
