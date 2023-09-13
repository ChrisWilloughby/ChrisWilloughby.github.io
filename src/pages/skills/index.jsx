import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

// import { useStyles } from './styles/skills';
import { skills } from '../../data/data';

const Skills = () => {
  // const classes = useStyles();
  return (
    <Box component="div" sx={{padding:'3rem',flexGrow: 1}}>
      <Typography variant="h4" align="center" mb={4}>
        MY SKILLS
      </Typography>
      <div>
        <Grid container justify="center" spacing={2}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={4} md={3} lg={2} key={skill.title}>
              <Card variant="outlined" 
                    sx={{backgroundColor:'#01041b'}}>
                <CardActionArea>
                  <CardContent sx={{
                      opacity:.75,
                      '&:hover':{opacity:1 }}}>
                    <Typography variant="h5" gutterBottom>
                      <span >
                        <Avatar src={skill.logo}  />
                        {skill.title}
                      </span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default Skills;
