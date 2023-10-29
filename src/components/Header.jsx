import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
    return (
        <>
            {/* Header */}
            <div className='flex justify-between items-center w-full h-20 lg:h-28 px-5 lg:px-10 bg-gradient-to-b from-header-top to-header-bottom header' >
                {/* <img src={logo} alt='' className='h-full' /> */}
                <h1 className='text-white text-4xl lg:text-5xl hover:cursor-pointer' onClick={() => window.location = "/"}> MOVİES</h1 >
                <ul className='text-white hidden lg:flex list-none'>
                    <li onClick={() => window.location = "/"} className='hover:cursor-pointer'>HOME</li>
                    <li className='ml-7 hover:cursor-pointer'>GENRE</li>
                    <li className='ml-7 hover:cursor-pointer'>COUNTRY</li>
                    <li className='ml-7 hover:cursor-pointer'>MOVIES</li>
                    <li className='ml-7 hover:cursor-pointer'>TV SHOWS</li>
                    <li className='ml-7 hover:cursor-pointer'>TOP IMDB</li>
                    <li className='ml-7 hover:cursor-pointer' onClick={() => window.location = "/mylist"}>MY LIST</li>
                </ul>
                <div className='mobile-menu block lg:hidden'>
                    <GiHamburgerMenu color='white' size={30} />
                </div>
            </div>
        </>
    )
}

export default Header
