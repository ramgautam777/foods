import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpeg';
import '../styles/HomeStyles.css';
import Contact from '../pages/Contact';





const Home = () => {
  return (
      <Layout>
      <div className='home' style={{backgroundImage: `url(${Banner})`}}>
        <div className='headerContainer'>
          <h1> Food website </h1>
          <p> Best Food In Nepal </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit iste modi, voluptatem beatae consequuntur temporibus itaque necessitatibus eius commodi unde sint, eos inventore? Accusantium numquam voluptates quis quae blanditiis sint quia amet perferendis optio quidem pariatur totam quos, natus dolores repellendus unde. Reprehenderit reiciendis velit hic. Accusamus optio cupiditate fuga odit maxime veniam doloremque accusantium quidem, aliquam totam illum hic error omnis quas asperiores provident modi enim aperiam quae voluptates maiores suscipit inventore! At fugit, voluptatum voluptates dicta aliquid vel nulla dolores dolore modi laudantium exercitationem magni amet qui ea beatae blanditiis possimus corporis quasi doloribus obcaecati aliquam adipisci!</p>
          <Link to='/menu'>
          <button>
            ORDER NOW
            </button>
            </Link>
        </div>
      
      </div>

      <Contact/>
      
    </Layout>
  )
}

export default Home