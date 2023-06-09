import React from "react";
import { Container,Typography,Link } from "@mui/material";



export default function Footer({ description, title }) {
  

  return (
    <footer  style={{background:"9DB2BF",marginTop:"40px",padding:"20px"}}>
      <Container maxWidth="lg" color="inherit" style={{backgroundColor:"9DB2BF"}}>
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="inherit"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="inherit" align="center">
          Copyright ©{" "}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  );
}