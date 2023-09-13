import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import PaddleGameMod from '../portfolio/modals/paddleGame';
import TourDeCiscoMod from './modals/cycle';
import AngularAppMod from './modals/angularApp';
import YTPlayerMod from './modals/ytPlayer';
import BlockCodeMod from './modals/blockCode';
import ADPMod from './modals/ADBSite';
import XfinityMod from './modals/xFinitySite';
import ConvivaMod from './modals/conviva';
import JabbraMod from './modals/jabbra';
import DevNetMod from './modals/devNetSandBox';
import InVisionBRD from './modals/inVisionBoard';

//id: 5,
//imageThumb: 
//imageModel:
//name: 
//description: 
//tools: 
//live: 
//source:
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '80%',
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };



 
export default function portfolio() {
  
  return (
    <Box component="div" mt={3}>
      <Typography variant="h4" align="center" mb={4}>
        Projects
      </Typography>
        <Box sx={{padding:'3rem',flexGrow: 1}}>
          <Grid container justify="center" sx={{padding:'3rem',}} spacing={2}>
            <PaddleGameMod/>
            <TourDeCiscoMod />
            <AngularAppMod />
            <YTPlayerMod />
            <BlockCodeMod />
            <ADPMod />
            <XfinityMod />
            <ConvivaMod />
            <JabbraMod />
            <DevNetMod />
            <InVisionBRD />

          </Grid>
        </Box>

    </Box>
    


  );
};