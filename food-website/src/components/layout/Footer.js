import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Footer = () => {
  return (
      <>
          <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3 }}>
              <Box sx={{
                  my: 3, '& svg': {
                      fontSize: '60px',
                      cursor: 'pointer',
                      mr: '10px'
                  },
                  '& svg:hover': {
                      color: 'goldenrod',
                      transform: 'translateX(5px)',
                      transition: 'all 400ms' 
               }
              }}>
                  {/* icons */}
                  
                  <a href="https://www.instagram.com" title='Visit Instagram'> <InstagramIcon /> </a>
                  <a href="https://www.facebook.com" title='Visit Facebook'><FacebookIcon /></a>
                  <a href="https://www.twitter.com" title='Visit Twitter'><TwitterIcon /></a>
                  <a href="https://www.youtube.com" title='Visit Youtube'><YouTubeIcon /></a>
            
               
                  

              </Box>

              <Box>
               
              </Box>
              <Typography variant='h5' sx={{
                  '@media (max-width:600px)': {
                  fontSize: '1.3rem',
              }}}>
                  ALL Rights Reserved &copy; Food website
              </Typography>
          </Box>
       
      </>
  )
}

export default Footer;