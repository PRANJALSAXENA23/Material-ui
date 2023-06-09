import { Grid, Paper, Typography,Link } from '@mui/material'
import React from 'react'

export default function Sidebar(props) {

    const { archives, description, social, title } = props;
  
    return (
      <Grid item xs={12} md={4}>
        <Paper elevation={0} style={{padding:"10px",backgroundImage:"url('https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80')",backgroundSize:"auto"}}>
          <Typography variant="h6" gutterBottom style={{marginTop:"20px"}}>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
  
        <Typography variant="h6" gutterBottom style={{marginTop:"30px"}}>
          Archives
        </Typography>
        {archives.map((archive) => (
          <Link
            display="block"
            variant="body1"
            href={archive.url}
            key={archive.title}
          >
            {archive.title}
          </Link>
        ))}
  
        <Typography variant="h6" gutterBottom >
          Social
        </Typography>
        {social.map((network) => (
          <Link display="block" variant="body1" href="#" key={network.name}>
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        ))}
      </Grid>
    );
  }