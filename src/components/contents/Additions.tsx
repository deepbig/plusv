import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ForumIcon from '@mui/icons-material/Forum';
import BuildIcon from '@mui/icons-material/Build';

function Additions() {
  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        Additional Contents
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TravelExploreIcon />
            </ListItemIcon>
            <ListItemText primary='Field Research' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary='Interviews' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary='Prototypes' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Additions;
