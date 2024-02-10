import React from 'react';
import Image from 'next/image';
import { newproducts } from '../constants';
import Link from "next/link";
import { imgProductbg, imgproducwhite } from '../public/images';
import Button from './Button';
import ProductsDesign from './ProductsDesign';



export default function product() {
    return (
        <div className="">
            <div className="mx-auto sm:py-8 lg:px-0 grid container relative gap-3">
                {/* <Image 
                    src={imgProductbg}
                    className='opacity-70
                    w-[500px] absolute top-[-50px] right-0 left-0 mx-auto'
                /> */}
                <div className="">
                    <ProductsDesign newproducts={newproducts}/>
                </div>
            </div>
        </div>
    )
}
