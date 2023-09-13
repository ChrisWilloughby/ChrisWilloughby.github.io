import { Box, Button, Grid, Typography, Container } from "@mui/material";
import React, { useCallback, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
// import { InputField, useStyles } from './styles/contacts';

const Contact = () => {
  // const classes = useStyles();

  const [state, handleSubmit] = useForm("mdorgwyr");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }


  return (
    <Box component="div" >
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={6} mx="auto" textAlign="center" mt={3}>
         <Typography variant="h3" mb={4}>
            Contact Us
         </Typography>
       </Grid>
       
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <Paper elevation={3} lg={6} sx={{backgroundColor:'#01041b'}}>
            <Box width="100%" component="form" method="post"  onSubmit={handleSubmit}>
              <Box p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                      <label htmlFor="firstName">
                        First Name
                      </label>
                    <Input id="firstName" variant="filled" label="First Name" fullWidth sx={{
                      backgroundColor:'rgba(255, 255, 255, 0.09)!important;', 
                      paddingRight:2,
                      paddingLeft:2,
                        '&:-webkit-autofill': {
                          backgroundColor:'rgba(255, 255, 255, 0.09)!important;',
                          paddingRight:2,
                          paddingLeft:2, 
                        },
                        '&:-webkit-autofill:focus': {
                          backgroundColor:'rgba(255, 255, 255, 0.09)!important;', 
                          paddingRight:2,
                          paddingLeft:2,
                        },
                        '&:-webkit-autofill:selected': {
                          backgroundColor:'rgba(255, 255, 255, 0.09)!important;', 
                          paddingRight:2,
                          paddingLeft:2,
                        },
                        '&:-internal-autofill:selected':{
                          backgroundColor:'rgba(255, 255, 255, 0.09)!important;',
                          paddingRight:2,
                          paddingLeft:2,
                        }
                      }} />
                    <ValidationError 
                        prefix="'First_Name'" 
                        field="fistName"
                        errors={state.errors}
                      />
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <label htmlFor="LastName">
                        Last Name
                      </label>
                      <Input id="lastName" variant="filled" label="Last Name" fullWidth sx={{background:'rgba(255, 255, 255, 0.09);', paddingRight:2,paddingLeft:2  }} />
                      <ValidationError 
                        prefix="Last_Name" 
                        field="lastName"
                        errors={state.errors}
                      />
                  </Grid>
                    <Grid item xs={12}>
                      <label htmlFor="email">
                        Email Address
                      </label>
                      <Input id="email" variant="filled" type="email" label="Email Address" name="email" fullWidth sx={{background:'rgba(255, 255, 255, 0.09);', paddingRight:2,paddingLeft:2  }} />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input id="message" variant="filled" label="Your Message" name="message" multiline fullWidth rows={6} sx={{background:'rgba(255, 255, 255, 0.09);', paddingRight:2,paddingLeft:2  }} />
                    
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                      />
                    </Grid>
                  </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                    <Button type="submit" variant="contained" fullWidth disabled={state.submitting} sx={{background:'linear-gradient(99deg, rgba(13,19,55,1) 0%, rgba(4,62,148,1) 50%, rgba(96,125,139,1) 100%)'}}>
                      Send Message
                    </Button>
                </Grid>
              
              </Box>
            </Box>
          </Paper>
        </Grid>
       
      </Container>
    </Box>
  );
};

export default Contact;
