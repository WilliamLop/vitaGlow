"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import iconWhat from '../public/images/whatsapp.png';
import { products, newproducts } from '../constants';
import { usePathname, useRouter } from "next/navigation";
import { useParams } from 'next/navigation';


const BtnWhatsApp = () => {

    const {id} = useParams();
    const allProducts = [...products, ...newproducts];

    const product = allProducts.find(product => product.id === id);

    const message = `Hola, estoy intersado en comprar ${product.name}`;
    const phoneNumber = "573202494811";

    return (
        <>
            <div className='fixed bottom-6 right-6 z-20'>
                <Link href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`} target='_blank'>
                    <Image src={iconWhat} width={60} height={60} className='shadow-lg rounded-full border-4
                        hover:border-color hover:border-neutral-900/80 duration-300 ease' alt='icon-whatsapp' />
                </Link>
            </div>
        </>
    )
}

export default BtnWhatsApp