import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CardHeader,
    Chip,
    Grid,
    Typography,
    ImageListItem,
    ImageListItemBar,
    Modal,
    Stack,
  } from '@mui/material';
  
  const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:'80vh',
    overflow: 'scroll',
  };

//   {
//     id: 6,
//     imageThumb: '/images/portfolio/adb.png',
//     imageModel:'/images/portfolio/adbSite.png',
//     name: 'adp Developer Portal',
//     description: `ADP partner progam site was built with jquery and Bootstrap 3, I designed and built this from scratch`,
//     tools: ['Jquery', 'Bootstrap 3','SCSS'],
//     live: 'https://www.partnerprogram.adbglobal.com/',
//     // source: 'https://github.com/chrisW132/Angular_1.3_Cards',
//   },

export default function InVisionBRD() {
   
  
    return (
      
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{backgroundColor:'#01041b'}} variant="outlined">
                <CardHeader
                    title="InVision Board"
                    subheader="2019"
                    sx={{marginBottom:-10, zIndex:1000, position:'relative', background:'linear-gradient(180deg, rgba(13,19,55,1) 0%, rgba(96,125,139,0.03) 100%)' }}
                />
                <CardMedia
                component="img"
                height="290"
                image='public/images/portfolio/invision.png'
                alt='adp Developer Portal'
                sx={{zIndex:-1, 
                    opacity:.5,
                        '&:hover':{opacity:1 }, 
                    }}
                />
                <CardContent>
                <Typography variant="body2" color="text">
                    The Invison Board Show some of the Wireframes and Mock-ups.
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <Button
                    variant='outlined'
                    size='small'
                    sx={{
                        background:'linear-gradient(99deg, rgba(13,19,55,1) 0%, rgba(4,62,148,1) 50%, rgba(96,125,139,1) 100%)',
                        border:'solid 1px #043e94',
                        color:'#fff'
                        }}
                    target='blank'
                    href='https://projects.invisionapp.com/boards/T83N6KX4PUH/#/6120465'
                >
                     View Board
                    </Button>
            
                </CardActions>
                

            </Card>
        </Grid>
    );
  };