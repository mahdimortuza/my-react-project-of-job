import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {

    const [open, setOpen] = useState(false)
    const route = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Shop',
            path: '/shop'
        },
        {
            id: 4,
            path: '/home',
            img: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
        },
        {
            id: 5,
            name: 'FAQs',
            path: '/faq'
        },
        {
            id: 6,
            name: 'My Order',
            path: '/myorder'
        },
        {
            id: 7,
            name: 'Contact',
            path: '/contact'
        }
    ]

    const icon = [
        {
            id: 1,
            icon: "https://www.svgrepo.com/show/127033/magnifying-glass.svg",
            link: '/search'
        },
        {
            id: 2,
            icon: "https://www.svgrepo.com/show/506106/cart-4.svg",
            link: '/cart'
        }
    ]

    return (
        <nav className='py-10'>

            <div className='flex justify-between'>


                {/* blank item  */}
                <div className='w-10 hidden md:block'></div>


                <div className=''>
                    {
                        route.map(route => <img className='w-12 md:hidden' src={route.img}></img>)
                    }
                </div>


                {/* main menu with option  */}
                <ul className={`md:flex absolute md:static list-none ${open ? 'top-12' : '-top-48'}`}>
                    {
                        route.map(route => <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                    }
                </ul>


                <ul className='flex'>
                    {
                        icon.map(icon => <li className='ml-8'><a><img className='w-6' src={icon.icon}></img></a></li>)
                    }
                </ul>



                

                {/* burger menu  */}
                <div onClick={() => setOpen(!open)} className=' md:hidden'>

                <span>
                {
                    open === true ? <XMarkIcon className='h-6 w-6 text-black-500 bg-white' /> 
                    : <Bars3Icon className='h-6 w-6 text-black-500 bg-white' />
                }
                </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;