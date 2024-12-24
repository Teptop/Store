import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Category from './Components/Category/Category'
import Category2 from './Components/Category/Category2'
import Services from './Components/Services/Services'
import Banner from './Components/Banner/Banner'
import Products from './Components/Products/Products'
// image impory
import headphone from './assets/hero/headphone.png'
import smartwatch2 from './assets/category/smartwatch2.png'

import Blogs from './Blogs/Blogs'
import Partners from './Components/Partners/Partners'
import Footer from './Components/Footer/Footer'
import Popup from './Components/Popup/Popup'


const BannerData = {
  discount:'30% OFF',
  title:'Finee Smile',
  date:'10 Jan to 28 Jan',
  image:headphone,
  title2:'Air Solo Bass',
  title3:'Winter Sale',
  title4:
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis',
  bgColor:'#f42c37'
}

const BannerData2 = {
  discount:'30% OFF',
  title:'Happy Hours',
  date:'14 Jan to 28 Jan',
  image: smartwatch2,
  title2:'Smart Solo',
  title3:'Winter Sale',
  title4:
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis',
  bgColor:'#2dcc6f'
}


const App = () => {
  const [orderPopup,setOrderPopup] = React.useState(false);

  const handelOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }



  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'>
     <div className='mx-4'>
     <Navbar handelOrderPopup={handelOrderPopup}/>
      <Hero handelOrderPopup={handelOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup}
      handelOrderPopup={handelOrderPopup}/>
     </div>
    </div>
  )
}

export default App
