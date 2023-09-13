import React from 'react';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { heroInfo } from '../../data/data';
import './styles/footer.css';

const Footer = () => {
  return (
    <Typography className='FT-root' >
      Made by  {heroInfo.name}
    </Typography>
  );
};

export default Footer;
