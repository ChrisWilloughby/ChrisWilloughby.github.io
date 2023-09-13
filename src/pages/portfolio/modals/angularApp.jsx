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
//     id: 3,
//     imageThumb: '/images/portfolio/AngularApp.jpg',
//     imageModel:'/images/portfolio/AngularApp.jpg',
//     name: 'Angular Card Builder',
//     description: `This was built using Angular 1.3 and the app is a simple card gererator. It has a Json array and you can add your own.`,
//     tools: ['Angular 1.3', 'Bootstrap 4'],
//     //live: 'https://sakilkhan.netlify.app/',
//     source: 'https://github.com/chrisW132/Angular_1.3_Cards',
// }

export default function AngularAppMod() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
    
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{backgroundColor:'#01041b'}} variant="outlined" >
                <CardHeader
                    title="Angular Card Builder"
                    subheader="2018"
                    sx={{marginBottom:-10, zIndex:1000, position:'relative', background:'linear-gradient(180deg, rgba(13,19,55,1) 0%, rgba(96,125,139,0.03) 100%)' }}
                />
                <CardMedia
                component="img"
                height="290"
                image='public/images/portfolio/AngularApp.jpg'
                alt='Angular Card Builder'
                sx={{zIndex:-1, 
                    opacity:.5,
                        '&:hover':{opacity:1 }, 
                    }}
                />
                <CardContent>
                <Typography variant="body2" color="text">
                    This was built using Angular 1.3 and the app is a simple card gererator. It has a Json array and you can add your own.
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
                    aria-labelledby="Angular Card Builder"
                    aria-describedby="Angular Card Builder"
                >
                    <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Angular Card Builder
                    </Typography>
                    {/* <ImageList sx={{ width:'100%', height:'60vh'}}> */}
                        <ImageListItem sx={{ width:'100%', height:'60vh', scroll:'auto', position:'center'}}>
                        <img
                            src='public/images/portfolio/AngularApp.jpg'
                            alt="Angular Card Builder"
                            loading="lazy"
                        />
                            <ImageListItemBar
                            title="Angular Card Builder"
                            subtitle= { <>
                                <Stack 
                                direction='row' 
                                spacing={1}> 
                                    <Chip 
                                    size='small'
                                    label='Angular 1.3'
                                    color='primary' />
                                    <Chip
                                    size='small'
                                    label='Bootstrap 4'
                                    color='primary' />
                                    

                                
                            <Button
                                variant='outline'
                                size='small'
                                sx={{
                                    background:'linear-gradient(99deg, rgba(13,19,55,1) 0%, rgba(4,62,148,1) 50%, rgba(96,125,139,1) 100%)',
                                    border:'solid 1px #043e94',
                                    color:'#fff'
                                    }}
                                target='blank'
                                href='https://github.com/chrisW132/Angular_1.3_Cards'
                            >
                                    Source Code
                                </Button>
                                </Stack>
                                </>
                            }
                            
                            />
                        

                        </ImageListItem>
                    {/* </ImageList> */}

                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        This was built using Angular 1.3 and the app is a simple card gererator. It has a Json array and you can add your own.
                    </Typography>
                    </Box>
                </Modal>

                </CardActions>
                

            </Card>
        </Grid>
    );
  };