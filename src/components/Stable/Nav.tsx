'use client'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { navItems } from '@/constants'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNav = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 '>
            <div className='container px-4 mx-auto relative text-sm -my-9'>
                <div className='flex justify-between items-center'>
                    <a href="/">
                        <Image 
                            src={'/logo1.png'} 
                            alt='Logo Main DevsCushion' 
                            className='object-contain ' 
                            width={140} 
                            height={0} 
                        />
                    </a>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="/contact" className='py-2 px-3 border rounded-md'>
                            Contact Us
                        </a>
                    </div>
                    <div className="lg:hidden flex flex-col justify-end">
                        <button onClick={toggleNav}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-start lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4 text-gray-50'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6 text-gray-50">
                            <a href="/contact" className='py-2 px-3 border rounded-md'>
                                Contact Us
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
