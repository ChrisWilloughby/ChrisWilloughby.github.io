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

export default function ADPMod() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{backgroundColor:'#01041b'}} variant="outlined">
                <CardHeader
                    title="adp Developer Portal"
                    subheader="2017"
                    sx={{marginBottom:-10, zIndex:1000, position:'relative', background:'linear-gradient(180deg, rgba(13,19,55,1) 0%, rgba(96,125,139,0.03) 100%)' }}
                />
                <CardMedia
                component="img"
                height="290"
                image='public/images/portfolio/adb.png'
                alt='adp Developer Portal'
                sx={{zIndex:-1, 
                    opacity:.5,
                        '&:hover':{opacity:1 }, 
                    }}
                />
                <CardContent>
                <Typography variant="body2" color="text">
                    ADP partner progam site was built with jquery and Bootstrap 3, I designed and built this from scratch.
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                
                <Button sx={{
                        background:'linear-gradient(99deg, rgba(13,19,55,1) 0%, rgba(4,62,148,1) 50%, rgba(96,125,139,1) 100%)',
                        border:'solid 1px #043e94',
                        color:'#fff'
                        }}
                            variant="outlined" 
                            onClick={handleOpen}>View More</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="adp Developer Portal"
                    aria-describedby="adp Developer Portal"
                >
                    <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        adp Developer Portal
                    </Typography>
                    {/* <ImageList sx={{ width:'100%', height:'60vh'}}> */}
                        <ImageListItem sx={{ width:'100%', height:'60vh', scroll:'auto', position:'center'}}>
                        <img
                            src='public/images/portfolio/adbSite.png'
                            alt="adp Developer Portal Example"
                            loading="lazy"
                        />
                            <ImageListItemBar
                            title="adp Developer Portal"
                            subtitle= { <>
                                <Stack 
                                direction='row' 
                                spacing={1}> 
                                    <Chip 
                                    size='small'
                                    label='SCSS'
                                    color='primary' />
                                    <Chip
                                    size='small'
                                    label='jquery'
                                    color='primary' />
                                    <Chip
                                    size='small'
                                    label='Bootstrap 3'
                                    color='primary' />
                                    

                                
                            <Button
                                variant='outlined'
                                size='small'
                                sx={{
                                    background:'linear-gradient(99deg, rgba(13,19,55,1) 0%, rgba(4,62,148,1) 50%, rgba(96,125,139,1) 100%)',
                                    border:'solid 1px #043e94',
                                    color:'#fff'
                                    }}
                                target='blank'
                                href='https://www.partnerprogram.adbglobal.com/'
                            >
                                    View Live
                                </Button>
                                </Stack>
                                </>
                            }
                            
                            />
                        

                        </ImageListItem>
                    {/* </ImageList> */}

                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        ADP partner progam site was built with jquery and Bootstrap 3, I designed and built this from scratch.
                    </Typography>
                    </Box>
                </Modal>

                </CardActions>
                

            </Card>
        </Grid>
    );
  };