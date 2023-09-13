import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
// import { styled } from '@mui/material/styles';
import { ClearAll } from '@mui/icons-material';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { heroInfo } from '../../data/data';
import Footer from '../footer';
import SliderItems from '../slider-items';
import './styles/navbar.css';

const Navbar = () => {
  // const classes = useStyles();
  const [slider, setSlider] = useState(false);

  // const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  //   alignItems: 'flex-start',
  //   // Override media queries injected by theme.mixins.toolbar
  //   '@media all': {
  //     minHeight: 35,
  //   },
  // }));
  

  const toggleSlide = useCallback(() => {
    setSlider((prevState) => !prevState);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, }} component="nav">
      <AppBar position="static" sx={{backgroundColor:'#01041b'}}>
        <Toolbar sx={{background:'linear-gradient(180deg, rgba(13,19,55,1) 0%, rgba(96,125,139,0.03) 100%)'}}>
          <Avatar
             
              src="/images/Uni-Punk.svg"
              alt={heroInfo.name}
            />
          <Typography variant="h5" style={{flexGrow: 1, paddingLeft:'1rem'}} >
            <Link to="/" >
              {heroInfo.name}
            </Link>
          </Typography>

          <IconButton edge="end" onClick={toggleSlide}>
            <ClearAll  />
          </IconButton>

          <Drawer anchor="right" open={slider} onClose={toggleSlide}>
            <SliderItems toggleSlide={toggleSlide} />
            <Footer />
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
