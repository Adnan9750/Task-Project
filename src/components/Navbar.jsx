
import {AppBar, Badge, Box, IconButton, Toolbar, Typography} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  return (
    <>
        <AppBar position='static' sx={{backgroundColor:' #6E00EE'}}>
            <Toolbar className="flex justify-between px-4 md:px-8">
                <Typography sx={{flexGrow:1}}>
                    Dashboard
                </Typography>
                <IconButton sx={{color:'white'}}>
                    <Badge badgeContent={4} color='error'>
                        <NotificationsIcon/>   
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar
