import { Box, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles/resume.css';

import { resumes } from '../../data/data';

const Resume = () => {
  // const classes = useStyles();
  return (

    <Box>
    <Box component="header" mt={3}>
      <Typography variant="h4" align="center"  mb={4}>
        Resume
      </Typography>
    </Box>
      <Box sx={{padding:'3rem', overflow:'scroll'}}>
        <Stepper nonLinear sx={{minWidth:1720}}>
        {resumes.map((resume) => (
          
          <React.Fragment key={resume.id}>
            <Step key={resume.id}>
              <Paper elevation={3} sx={{padding:'1rem', backgroundColor:'#01041b'}}>
                <StepLabel>
                  <Typography
                    variant="h6"
                    align="center"
                  >
                    <a
                      href={resume.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resume.companyName}
                    </a>
                  </Typography>
                </StepLabel>
                <StepLabel>
                  <Typography align="center">
                    {resume.year}
                  </Typography>
                </StepLabel>

                <StepLabel>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    color='#fff'
                  >
                    {resume.role}
                  </Typography>
                </StepLabel>
              </Paper>
            </Step>
                  
          </React.Fragment>
        ))}

        </Stepper>
      </Box>

      <Box sx={{padding:'3rem',flexGrow: 1}}>
        <Grid container spacing={2}>
          
          {resumes.map((resume) => (
              
              <React.Fragment key={resume.id}>
                <Grid item sx={12} sm={6} md={4}>
                  <Card sx={{backgroundColor:'#01041b'}}>
                    <CardContent>
                    <Typography variant="h5" component="div">
                      {resume.companyName}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      {resume.role}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="secondary">
                      {resume.year}
                    </Typography>
                    </CardContent>
                    <Accordion sx={{background:'linear-gradient(180deg, rgba(13,19,55,1) 0%, rgba(96,125,139,0.03) 100%)'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Learn More</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={{marginBottom:".5rem"}}>
                          {resume.description1}
                        </Typography>
                        <Typography sx={{marginBottom:".5rem"}}>
                          {resume.description2}
                        </Typography>
                        <Typography sx={{marginBottom:".5rem"}}>
                          {resume.description3}
                        </Typography>
                        <Typography sx={{marginBottom:".5rem"}}>
                          {resume.description4}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Card>
                </Grid>
              </React.Fragment>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Resume;
