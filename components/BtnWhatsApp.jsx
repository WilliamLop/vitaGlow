import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import iconWhat from '../public/images/whatsapp.png';

const BtnWhatsApp = () => {

    const message = "Hola, ¿cómo puedo ayudarte?"; // El texto que deseas enviar
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