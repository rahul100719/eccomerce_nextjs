import React from 'react'
import Footer from '../componets/Footer'
import FooterBanner from '../componets/FooterBanner'
import HeroBanner from '../componets/HeroBanner'
import Product from '../componets/Product'
import { client } from '../lib/client'

const index = ({products,bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div>
        <h2 className='products-heading'>Best selling Product</h2>
     
      </div>
      <div className='products-container'>
        {products.map((p)=>(<Product key={p._id} product={p}/>))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default index
