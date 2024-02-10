import React from "react";
import Image from 'next/image';
import { footerLinks } from "../constants";

const ListaFooter = () => {

    return (
        <>
        <div class="">
            { footerLinks.map((item) => (
                <>
                    <div className="mb-4 flex items-center justify-center md:justify-start">
                        <Image src={item.imgIcon} className="mr-3 h-5 w-5" alt="icon" />
                        <p className="text-white">{item.text}</p>
                    </div>
                </>
            )) }
        </div>
        </>
    );
};

export default ListaFooter;
