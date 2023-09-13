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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function PaddleGameMod() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{backgroundColor:'#01041b'}} variant="outlined">
                <CardHeader
                    title="JS PADDLE GAME"
                    subheader="2017"
                    sx={{marginBottom:-10, zIndex:1000, position:'relative', background:'linear-gradient(180deg, rgba(13,19,55,1) 0%, rgba(96,125,139,0.03) 100%)' }}
                />
                <CardMedia
                component="img"
                height="290"
                image='public/images/portfolio/pongIcon.jpg'
                alt='JS PADDLE GAME'
                sx={{zIndex:-1, 
                    opacity:.5,
                        '&:hover':{opacity:1 }, 
                    }}
                />
                <CardContent>
                <Typography variant="body2" color="text">
                    This was built using canvas and js for the interaction.
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
                    aria-labelledby="JS PADDLE GAME"
                    aria-describedby="paddle Game modal"
                >
                    <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        JS PADDLE GAME
                    </Typography>
                    {/* <ImageList sx={{ width:'100%', height:'60vh'}}> */}
                        <ImageListItem sx={{ width:'100%', scroll:'auto'}}>
                        <img
                            src='public/images/portfolio/pongGame.jpg'
                            alt="JS PADDLE GAME"
                            loading="lazy"
                        />
                            <ImageListItemBar
                            title="JS PADDLE GAME"
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
                                    label='Canvas'
                                    color='primary' />

                                
                            <Button
                                variant='contained'
                                size='small'
                                sx={{
                                    background:'linear-gradient(99deg, rgba(13,19,55,1) 0%, rgba(4,62,148,1) 50%, rgba(96,125,139,1) 100%)',
                                    border:'solid 1px #043e94',
                                    color:'#fff'
                                    }}
                                target='blank'
                                href='https://github.com/chrisW132/pong_with_canvas'
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
                        This was built using canvas and js for the interaction.
                    </Typography>
                    </Box>
                </Modal>

                </CardActions>
                

            </Card>
        </Grid>
    
  
  
    );
  };