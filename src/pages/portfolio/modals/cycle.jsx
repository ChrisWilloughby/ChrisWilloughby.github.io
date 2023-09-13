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
//     id: 2,
//     imageThumb: '/images/portfolio/cycle.jpg',
//     imageModel:'',
//     name: 'Weather App',
//     description: `This is a Weather app. Where you can search a city and see current weather temperature, \
//     wind speed etc. As front end I used JavaScript library called 'React'. I used 'OpenWeather' APIs For request \
//     data and  display data.`,
//     tools: ['javascript', 'Html', 'CSS'],
//     source: 'https://github.com/sakilk130/react-weather-app',
//   },

export default function TourDeCiscoMod() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{backgroundColor:'#01041b'}} variant="outlined">
                <CardHeader
                    title="Tour de Cisco"
                    subheader="2017"
                    sx={{marginBottom:-10, zIndex:1000, position:'relative', background:'linear-gradient(180deg, rgba(13,19,55,1) 0%, rgba(96,125,139,0.03) 100%)' }}
                />
                <CardMedia
                component="img"
                height="290"
                image='public/images/portfolio/cycle.jpg'
                alt='Tour de Cisco'
                sx={{zIndex:-1, 
                    opacity:.5,
                        '&:hover':{opacity:1 }, 
                    }}
                />
                <CardContent>
                <Typography variant="body2" color="text">
                    This is app was made a DevNet event. It was a Cycle game that was hooked up to a bike and it took the data from the bike and showed a visual information in real time on an ipad.
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                
                <Button sx={{
                        background:'linear-gradient(99deg, rgba(13,19,55,1) 0%, rgba(4,62,148,1) 50%, rgba(96,125,139,1) 100%)',
                        border:'solid 1px #043e94',
                        color:'#fff'
                    }}
                        variant="outlined" onClick={handleOpen}>View More</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="Tour de Cisco"
                    aria-describedby="Tour de Cisco"
                >
                    <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Tour De Cisco
                    </Typography>
                    {/* <ImageList sx={{ width:'100%', height:'60vh'}}> */}
                        <ImageListItem sx={{ width:'100%', height:'60vh', scroll:'auto', position:'center'}}>
                        <img
                            src='public/images/portfolio/cycle.jpg'
                            alt="Tour de Cisco"
                            loading="lazy"
                        />
                            <ImageListItemBar
                            title="Tour de Cisco"
                            subtitle= { <>
                                <Stack 
                                direction='row' 
                                spacing={1}> 
                                    <Chip 
                                    size='small'
                                    label='JavaScript'
                                    color='primary' />
                                    <Chip
                                    size='small'
                                    label='HTML'
                                    color='primary' />
                                    <Chip
                                    size='small'
                                    label='CSS'
                                    color='primary' />

                                
                            {/* <Button
                                variant='contained'
                                size='small'
                                color='primary'
                                target='blank'
                                href='https://github.com/chrisW132/pong_with_canvas'
                            >
                                    Source Code
                                </Button> */}
                                </Stack>
                                </>
                            }
                            
                            />
                        

                        </ImageListItem>
                    {/* </ImageList> */}

                    <Typography id="modal-description" sx={{ mt: 2 }}>
                    This is app was made a DevNet event. It was a Cycle game that was hooked up to a bike and it took the data from the bike and showed a visual information in real time on an ipad.
                    </Typography>
                    </Box>
                </Modal>

                </CardActions>
                

            </Card>
        </Grid>
    );
  };