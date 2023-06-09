import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'

const FeaturedPost = () => {
  return (
    <Card style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        backgroundPosition:"center",
        padding:"35px 25px",
}}
    >
        <CardContent >

            
            <Typography style={{fontSize:40,fontFamily:"Montserrat"}} gutterBottom>Title of a longer featured blog posts</Typography>
            <Typography variant='h5'>Multiple lines of text that form the lede,informing new readers quickly and efficiently about what's most interesting in this post's contents.</Typography>


        </CardContent>
        <CardActions>   
        <Button variant='text'>Read More..... </Button>

        </CardActions>
    </Card>
  )
}

export default FeaturedPost