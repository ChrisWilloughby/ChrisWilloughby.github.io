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

//  {
//     id: 10,
//     imageThumb: '/images/portfolio/devnetThumb.png',
//     imageModel:'/images/portfolio/devNet.png',
//     name: 'Devnet Sandbox Portal',
//     description: `Building the sandbox section was a really fun challenge. We used Zeplin to share designs and specs. But the real challenge was all the images as SVGs in illustrator, and then creating all the animation using CSS.`,
//     tools: ['Jquery', 'Bootstrap 3', 'Zeplin', 'Illustrator', 'SCSS','CSS Animation'],
//     live: 'https://developer.cisco.com/site/sandbox/',
//     //source: 'https://github.com/chrisW132/Angular_1.3_Cards',
//   },

// background: rgb(13,19,55);
// background: linear-gradient(99deg, rgba(13,19,55,1) 0%, rgba(4,62,148,1) 50%, rgba(96,125,139,1) 100%);

export default function DevNetMod() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{backgroundColor:'#01041b'}} variant="outlined">
                <CardHeader
                    title="Devnet Sandbox Portal"
                    subheader="2017"
                    sx={{marginBottom:-10,zIndex:1000, position:'relative', background:'linear-gradient(180deg, rgba(13,19,55,1) 0%, rgba(96,125,139,0.03) 100%)' }}
                />
                    <CardMedia
                        component="img"
                        height="290"
                        image='public/images/portfolio/devnetThumb.png'
                        alt='Devnet Sandbox Portal'
                        sx={{zIndex:-1, 
                        opacity:.5,
                            '&:hover':{opacity:1 }, 
                        }}
                    />
                    <CardContent>
                    <Typography variant="body2" color="text">
                        Building the sandbox section was a really fun challenge. We used Zeplin to share designs and specs. But the real challenge was all the images as SVGs in illustrator, and then creating all the animation using CSS.
                    </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    
                    <Button sx={{
                        background:'linear-gradient(99deg, rgba(13,19,55,1) 0%, rgba(4,62,148,1) 50%, rgba(96,125,139,1) 100%)',
                        border:'solid 1px #043e94'}} variant='outline' onClick={handleOpen}>View More</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="Devnet Sandbox Portal"
                        aria-describedby="Devnet Sandbox Portal"
                    >
                        <Box sx={style}>
                        <Typography variant="h6" component="h2">
                            Devnet Sandbox Portal
                        </Typography>
                        {/* <ImageList sx={{ width:'100%', height:'60vh'}}> */}
                            <ImageListItem sx={{ width:'100%', height:'60vh', scroll:'auto', position:'center'}}>
                            <img
                                src='public/images/portfolio/devNet.png'
                                alt="Devnet Sandbox Portal Example"
                                loading="lazy"
                            />
                                <ImageListItemBar
                                title="Devnet Sandbox Portal"
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
                                        <Chip
                                        size='small'
                                        label='Zeplin'
                                        color='primary' />
                                        <Chip
                                        size='small'
                                        label='Illustrator'
                                        color='primary' />
                                        <Chip
                                        size='small'
                                        label='CSS Animation'
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
                                    href='https://developer.cisco.com/site/sandbox/'
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
                            Building the sandbox section was a really fun challenge. We used Zeplin to share designs and specs. But the real challenge was all the images as SVGs in illustrator, and then creating all the animation using CSS.
                        </Typography>
                        </Box>
                    </Modal>

                    </CardActions>
                    

            </Card>
        </Grid>
    );
  };