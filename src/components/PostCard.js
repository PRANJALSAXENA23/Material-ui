import { Card, CardActionArea, CardContent,CardMedia, Grid, Hidden, Typography } from '@mui/material'
import React from 'react'

const PostCard = ({post}) => {
  return (
        
   <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
            <Card style={{display:"flex"}}>

            <div style={{flex:"1"}}>
                <CardContent style={{ 
                    backgroundImage:"url('https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg')"
                    , backgroundPosition:"center",
        padding:"35px 25px"
                    }}>
                    <Typography component="h2" variant="h5">
                        {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {post.description}
                    </Typography>
                    <Typography variant="subtitle1" style={{color:"skyblue"}}>
                    Continue reading..........
                    </Typography>

                </CardContent>
            </div>

        <Hidden xsDown>
            <CardMedia
            style={{width:"160",
                   
            }}
            
            
            />

            
        </Hidden>

</Card>     
   </CardActionArea>
    </Grid>
  )
}

export default PostCard