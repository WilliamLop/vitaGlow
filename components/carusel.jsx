"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { newproducts } from "../constants";
import Image from 'next/image';

function CarouselProducts() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
    };
    return (
        <div className="slider-container mx-auto py-12 w-[300px] md:w-full">
            <Slider {...settings}>
                {newproducts.map((item, index) => (
                    <section className="" key={index}>
                        <div className="">
                            <Image src={item.imgURL} alt={item.imgAlt}
                            className="w-fit h-fit mx-auto"/>
                        </div>
                    </section>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselProducts;