import React from 'react'
import Heading from '../Components/Shared/Heading'
import Imag1 from '../assets/blogs/blog-1.jpg'
import Imag2 from '../assets/blogs/blog-2.jpg'
import Imag3 from '../assets/blogs/blog-3.jpg'

const BlogData = [
  {
    title: 'How to choose perfect smartwatch',
    subtitle:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ea voluptate quam ipsum dolor molestias inventore vero rem accusamus dolore!',
    published: 'Jan 20, 2024 by Dilshad',
    image: Imag1,
    aosDelay: '0',
  },
  {
    title: 'How to choose perfect gadget',
    subtitle:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ea voluptate quam ipsum dolor molestias inventore vero rem accusamus dolore!',
    published: 'Jan 20, 2024 by Satya',
    image: Imag2,
    aosDelay: '200',
  },
  {
    title: 'How to choose perfect VR headset',
    subtitle:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ea voluptate quam ipsum dolor molestias inventore vero rem accusamus dolore!',
    published: 'Jan 20, 2024 by Sabir',
    image: Imag3,
    aosDelay: '400',
  },
]

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
        {/* Header Section */}
      <Heading title='Title'
        subtitle={'Explore Our Blogs'}
        />
        {/* Blog section */}
        <div className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {/* Blog card */}
          {
            BlogData.map((data,index)=>{
              return(
                <div 
                data-aos='fade-up'
                data-aos-delay={data.aosDelay}
                
                key={index} className='bg-white
                dark:bg-gray-900'>
                  {/* image section */}
                  <div className='overflow-hidden rounded-2xl mb-2'>
                    <img src={data.image} alt="" 
                    className='w-full h-[220px] object-cover
                    rounded-2xl hover:scale-105 duration-500'
                    />
                  </div>
                  {/* content section */}
                  <div className='space-y-2'>
                    <p className='text-xs text-gray-500'>{data.published}</p>
                    <p className='font-bold line-clamp-1'>{data.title}</p>
                    <p className='line-clamp-2 text-sm text-gray-600
                    dark:text-gray-400'>{data.subtitle}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Blogs
