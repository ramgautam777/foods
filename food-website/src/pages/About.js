import React from 'react';
import Layout from '../components/layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
      <Layout>
      <Box sx={{
        my: 15,
        textAlign: 'center',
        p: 2,
        '& h4': {
          fontWeight: 'bold',
          my: 2,
          fontSize:'2rem'
        },
        '& p': {
          textAlign:'justify'
        },
        '@media (max-width: 600px)': {
          mt: 0,
          '& h4': {
            fontSize: '1.5rem',
          }
        }
        
      }}>
        <Typography variant='h4'>
          Welcome To my Food website
        </Typography>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore iure, architecto debitis dicta blanditiis hic animi eum explicabo impedit dolorem laboriosam minus optio consequuntur ab earum vel, ipsum repudiandae ut quas. Voluptatum suscipit perferendis dolorem consectetur dolores officiis error, officia repellat? Officia sapiente dolorem atque illo porro cupiditate tempore quae natus pariatur voluptas veniam perferendis eos, itaque omnis labore facilis aspernatur nemo dignissimos, id maiores deserunt. Suscipit error ut quam quasi? Deserunt dolor cumque, facilis temporibus quas rem eum nulla expedita autem, eligendi totam. Quaerat nostrum amet similique, deserunt odio porro exercitationem saepe libero mollitia fuga, perferendis neque enim laudantium!</p>
        <br />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore commodi cum exercitationem cumque quis natus voluptate! Consequuntur, iure ullam unde nisi, eius dolor voluptate eaque eos rem, quasi sit mollitia architecto explicabo facere? Corrupti necessitatibus non repellendus vero harum quia, rerum labore earum provident quod maiores itaque quasi quaerat adipisci pariatur id saepe porro! Vero eligendi dolor culpa sunt. Dolores culpa harum debitis reprehenderit explicabo recusandae nemo enim commodi distinctio illum itaque, doloremque cumque eligendi saepe ad ducimus repellendus corrupti voluptatibus molestiae aliquid possimus aliquam provident nihil dolore. Rerum magnam quod excepturi ratione repellat, dolorem voluptatem maiores numquam hic!</p>
      </Box>
     
    </Layout>
  )
}

export default About;