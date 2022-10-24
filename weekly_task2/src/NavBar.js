import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Grid from '@mui/material/Grid';

const NavBar = () => {

    
    return (
        <Grid container
            justify="center"
            alignItems="center"
            direction="column"
            mt={0} mb={6}
            >
        <Box sx={{ 
            width: 700,
             }}>
      <BottomNavigation showLabels style={{backgroundColor: "#F5F5DC"}}>
        <BottomNavigationAction label="Home" icon={<HomeIcon fontSize="large" />} />
        <BottomNavigationAction label="About Us" icon={<InfoIcon fontSize="large"/>} />
        <BottomNavigationAction label="Contact Menu" icon={<ImportContactsIcon fontSize="large"/>} />
      </BottomNavigation>
    </Box>
    </Grid>
    
  );
}

export default NavBar;