'use client';

import React, { useState } from 'react'
import { navLinks } from '../constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const ListNav = () => {

    const  pathname = usePathname();
    const homeIndex = navLinks.findIndex(link => link.href === "/");
    const [hoveredLink, setHoveredLink] = useState(null);
    const [selectedLink, setSelectedLink] = useState(homeIndex);

    const handleClickLinks = (index) => {
        setSelectedLink(index)
    }

    return (
        <div className='mb-4'>
            <ul className={`font-poppins self-center grid gap-5
                            relative lg:block lg:mb-0 
                            lg:items-center lg:justify-end`}>
                {navLinks.map((link, index) => (
                    <li key={link.id} className=" mb-4 text-slate-300"
                        onClick={() => handleClickLinks(index)}
                        onMouseEnter={() => setHoveredLink(index)}
                        onMouseLeave={() => setHoveredLink(null)}>
                        <Link
                            href={link.href}
                            className={`
                                ${pathname === link.href ? "font-semibold border-b-2 border-gray-800 lg:border-slate-200 duration-100 ease" : ""}
                                ${index === hoveredLink ? "font-medium text-white" : ""}
                            `}
                    >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListNav