import React from 'react'
import BannerPng from '../../assets/Banner.png'
import { GrUserExpert } from 'react-icons/gr'
import { MdOutlineAccessTime } from 'react-icons/md'
import { FaBookReader } from 'react-icons/fa'
import fadeUP from '../Hero/Hero'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section>
      <div className='container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
        {/* Banner image  */}
        <div className='flex justify-center items-center'>
          <img
            src={BannerPng}
            alt=''
            className='w-[350px] md:max-w-[450px] object-cover drop-shadow '
          />
        </div>
        {/* Banner Text  */}
        <div className='flex flex-col justify-center '>
          <div className='text-center md:text-left space-y-12'>
            <h1 className='text-3xl md:text-4xl font-bold !leading-snug'>
              The World's Leading Online learning Platform
            </h1>
            <div>
              <div className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl '>
                <FaBookReader className='text-2xl' />
                <p className='text-lg'>10,000+ Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
