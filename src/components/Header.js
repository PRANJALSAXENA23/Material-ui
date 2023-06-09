import React from 'react'
import {Toolbar,IconButton, Typography, Divider} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';






const Header = () => {

        
  return (
<>
        
        <Toolbar>
            <IconButton color="inherit">
                    <MenuIcon/>
                  
            </IconButton>
            <Typography variant='h6' style={{flexGrow:"1"}} >Blogging Website</Typography>
<IconButton color="inherit">

    <NotificationsNoneIcon/>
</IconButton>

<IconButton color="inherit">

<AccountCircleIcon />
</IconButton>

        </Toolbar>
        <Divider color="inherit" />
        <Toolbar 
        style={{
               fontSize:"20",
               textTransform:"uppercase",
               justifyContent:"center",
               fontFamily:"Montserrat"
               
        }}>
        Express your emotions through words</Toolbar>

</>

  )
}

export default Header