import { Box, Typography } from '@mui/material';
import React from 'react';

import { educations } from '../../data/data';
// import { useStyles } from './styles/education';

const Education = () => {
  // const classes = useStyles();
  return (
    <Box component="header">
      <Typography variant="h4" align="center">
        Education
      </Typography>
      <Box component="div">
        {educations.map((education) => (
          <React.Fragment key={education.id}>
            <Typography
              variant="h2"
              className={`${timeLineYear} ${timeLineItem}`}
            >
              {education.year}
            </Typography>
            <Box component="div" >
              <Typography
                variant="h5"
                align="center"
                
              >
                {education.universityName}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                
              >
                {education.department}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                
              >
                {education.description}
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
