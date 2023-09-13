import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';
import './styles/slider-items.css';
import {
  Apps,
  AssignmentInd,
  Build,
  ContactMail,
  Home,
  School,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { heroInfo } from '../../data/data';

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    listPath: '/resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    listPath: '/portfolio',
  },
  {
    listIcon: <Build />,
    listText: 'Skills',
    listPath: '/skills',
  },
  // {
  //   listIcon: <School />,
  //   listText: 'Education',
  //   listPath: '/education',
  // },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
    listPath: '/contacts',
  },
];

const SliderItems = ({ toggleSlide }) => {
  // const classes = useStyles();
  return (
    <Box component="div" sx={{
      height: '100vh',
      background:'linear-gradient(180deg, rgba(13,19,55,1) 0%, rgba(96,125,139,0.1) 100%)',
      color:'#fff',
      }} onClick={toggleSlide}>
      <Avatar
        sx={{height:'80px',width:'auto',padding:'10px',alignContent:'center', color:'#fff'}}
        src="/images/Uni-Punk-Name.svg"
        alt={heroInfo.name}
      >
      <Typography>
        Chris Willoughby
      </Typography>
      </Avatar>
      
      <Divider />
      <List >
        {menuItems.map((item) => (
          <ListItem
            key={item.listPath}
            component={Link}
            to={item.listPath}
            sx={{padding:'0',
            '&:hover':{color:'#fff'}}}
          >
            <ListItemButton>
              <ListItemIcon >
                {item.listIcon}
              </ListItemIcon>
              <ListItemText >
                {item.listText}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SliderItems;
