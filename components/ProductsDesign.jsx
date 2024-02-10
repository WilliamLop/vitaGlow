import React from 'react'
import Image from 'next/image';
import Link from "next/link";


const ProductsDesign = ({ newproducts, products, variant }) => {

    let container;
    if (newproducts) {
        container = newproducts;
    } else if (products) {
        container = products;
    }

    return (
        <div className={`grid grid-cols-auto-fit`}>
            {container.map((product) => {
                // Calcular el porcentaje de descuento
                const discount = ((product.priceDesc - product.price) / product.priceDesc) * 100;

                // Redondear al número entero más cercano
                const roundedDiscount = Math.round(discount);

                return (
                    <Link href={`/products/${product.id}`}
                        className='hover:text-white'
                    >

                        <div key={product.id} className="group relative cursor-pointer border-b-[1px]
                            border-grayBorder py-4 grid gap-2 lg:border-[1px] shadow-sm opacity-100
                            hover:border-bluebg duration-300 ease-in-out
                            hover:bg-white hover:text-bluebg">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden
                                lg:aspect-none group-hover:opacity-85 h-[270px] duration-300 ease
                                ">
                                <Image
                                    src={product.imgURL}
                                    alt={product.imgAlt}
                                    className="object-cover mx-auto aspect-auto w-[600px] h-full group-hover:shadow-xl
                                transition duration-300 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className='text-center grid gap-2'>
                                <h3 className="text-lg font-bold uppercase duration-100 ease">
                                    {product.name}
                                </h3>
                                <p className="text-gray-500/70 px-2 h-[80px] group-hover:text-gray-600
                                duration-300 ease-in-out">
                                    {product.desc.text}
                                </p>
                                <div className="flex gap-2 justify-center py-2 mt-8 lg:mt-0">
                                    <p className="">
                                        COP : <span className="font-semibold text-xl">$ {product.price}</span>
                                    </p>
                                    <p className="relative font-medium text-gray-500/50 group-hover:text-sm
                                        line-through text-base duration-300 ease">
                                        ${product.priceDesc}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#d90429] rounded-br-lg py-1 absolute top-0 w-[50px] text-center
                            text-white font-semibold group-hover:bg-[#ef233c] duration-300 ease
                            group-hover:shadow-lg">
                                <p className="">-{roundedDiscount}%</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProductsDesign
