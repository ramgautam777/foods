import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
      <Layout>
      <Box sx={{
        my: 5, ml: 10, '& h4': {
          fontWeight: 'bold',
          mb: 2,
         
        },
        '@media (max-width:600px)': {
          '& h4': {
            fontSize: '1.5rem',
          }
        }
      
      }}>
        <Typography variant='h4'>
          Contact my food website
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur veritatis assumenda culpa facilis asperiores cupiditate labore vitae! Sed sunt corrupti ducimus nam quis ex tempore beatae voluptatem ea cumque!</p>
      </Box>
      <Box sx={{
        m: 3, width: '600px', ml: 10, '@media (max-width: 600px)': {
          width: '300px',
          
          
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white'}} align='center'> 
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red', pt:1 }}/>  TrollFree 1800-0000-000
              </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{color:'skyblue', pt:1 }}/>  foodweb@123gmail.com
              </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneIcon sx={{color:'green', pt:1 }}/>  9810685643
              </TableCell>
              </TableRow>
            </TableBody>
            
        </Table>
        </TableContainer>
      </Box>

    </Layout>
  )
}

export default Contact