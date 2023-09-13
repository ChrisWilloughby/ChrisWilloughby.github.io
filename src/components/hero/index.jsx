import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Typed from 'react-typed';

import { heroInfo } from '../../data/data';
import HeroDetails from '../hero-details';
import './styles/hero.css';

const Hero = () => {
  // const classes = useStyles();

  return (
    <Box className="typedContainer" >
      <Grid container spacing={2}>

        <Grid item xs={1} sm={2} md={4}></Grid>
          <Grid 
            item 
            xs={10} sm={8} md={4}
            pr={2}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.13)',
              borderRadius: '10px',
              backdropFilter: 'blur(30px)',
              webkitBackdropFilter: 'blur(30px)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0 40px rgba(8, 7, 16, 0.6)',
              
            }}>
            <Grid item justify="center" mb={3}>
              <Avatar
                sx={{
                  width:'10rem',
                  height:'10rem',
                  margin:'0 auto',
                }}
                src={heroInfo.image}
                alt={heroInfo.name}
              />
            </Grid>
            <Typography variant="h4" className="title">
              <Typed strings={[heroInfo.name]} typeSpeed={100} />
            </Typography>
            <br />
            <Typography variant="h5" className='subtitle'>
              <Typed strings={heroInfo.title} typeSpeed={70} backSpeed={60} loop />
            </Typography>
            <Typography variant="body1" gutterBottom color={'white'} mt={1} mb={2}>
                I am UI/UX designer that specializes in creating gorgeous, yet functional websites. 
                I love helping client achieve their goals and grow their business. I have a deep passion 
                for designing and it keeps me motivated to grow, learn and try all the latest and greatest 
                tools. I have over 5 years of experience working with amazing coworkers, clients and companies. 
                I love what what I do and work extremely hard with who I work with.
                
              </Typography>
              <HeroDetails contacts={heroInfo.contacts} />
          </Grid>
          <Grid item xs={1} sm={2} md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
