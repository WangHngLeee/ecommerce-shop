import React from 'react'
import { Helmet } from 'react-helmet'
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'SimpShop - Pick more!',
  description: 'We provide with the best product that will decorate your life',
  keywords: 'online shopping, shopping, simple shopping, shop',
}
export default Meta
