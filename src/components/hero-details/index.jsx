import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';


import './styles/hero-details.css';

const HeroDetails = ({ contacts }) => {
  // const classes = useStyles();
  return (
    <BottomNavigation className='HR-root' sx={{background: 'none'}}>
      {contacts.map((contract) => (
        <BottomNavigationAction
          key={contract.id}
          icon={<contract.icon />}
          target="blank"
          href={contract.link}
          title={contract.username}
        />
      ))}
     
    </BottomNavigation>
  );
};

export default HeroDetails;
