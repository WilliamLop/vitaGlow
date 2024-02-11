"use client";

import Button from '../../../components/Button';
import HeadDesc from '../../../components/HeadDesc';
import ItemInfo from '../../../components/ItemInfo';
import { products, newproducts } from '../../../constants';
import Image from 'next/image';
import { useState } from 'react';
import ProductsDesign from '../../../components/ProductsDesign';
import { arrow, bowl, mentalHealth } from '../../../public/images';


const pageProps = ({ params }) => {

  const [tabs, setTabs] = useState(1);
  const [acordion, setAcordion] = useState(null);

  // Id de producto
  const id = params.id;
  // Propagacion de los productos, nuevos y existentes
  const allProducts = [...products, ...newproducts];
  // Selección del producto por id
  const product = allProducts.find(product => product.id === id);
  // Pasar variable product a una matriz
  const arr = [product];

  // Función para seleccionar el index de cada tabulación
  const handleClickTabs = (index) => {
    setTabs(index);
  }

  // Función para seleccionar el index de cada pregunta
  const handleClickAcordion = (index, event) => {
    event.preventDefault();
    setAcordion(acordion === index ? null : index);
  }

  // Ingredientes separados por una coma con el metodo split
  const ingredientsParagraph = product.ingredients.text;
  const ingredientsList = ingredientsParagraph.split(',').map(ingredient => ingredient.trim());

  // Descuento entre precio anterior y el precio actual, en porcentaje
  const discount = ((product.priceDesc - product.price) / product.priceDesc) * 100;

  // Redondear al número entero más cercano
  const roundedDiscount = Math.round(discount);


  return (
    <div>
      {arr.map((item) => (
        <div className="">
          <HeadDesc title={item.type} text="Producto"/>
          <div className='bg-whitebg py-8 '>

            <div className="grid gap-4 lg:gap-0 container lg:py-12" key={arr.id}>
              <section className=' font-poppins 
                  grid items-center lg:grid-cols-[1fr,1fr]'>
                <div className="relative">
                  <Image src={item.imgURL} width={650} height={400} alt={item.imgAlt}
                    className='mx-auto' />

                  <div className='border-2 border-white rounded-full bg-[#d90429] px-2  right-[100px] absolute
                      text-white w-[50px] h-[50px] font-bold top-0
                      shadow-md hidden lg:block'>
                    <span className="flex items-center justify-center h-full">
                      -{roundedDiscount}%
                    </span>
                  </div>

                </div>

                {/* Information */}
                <article className="text-center grid lg:gap-9 gap-4
                    lg:text-start">
                  <div className="relative">
                    <h1 className="lg:text-5xl font-bold text-4xl">
                      {item.name}
                    </h1>
                    <div className="flex gap-4 items-center justify-between py-2 relative">
                      <div className="flex items-center">
                        <span className='text-sm bg-gray-950/85 text-neutral-200 px-2 rounded-full shadow-md
                            absolute'>
                          {item.bonus}
                        </span>

                      </div>
                      <span className='border-2 border-white rounded-full bg-[#d90429] p-2
                            text-white w-[50px] h-[50px] flex items-center justify-center font-bold
                            shadow-md lg:hidden'>
                        -{roundedDiscount}%
                      </span>
                    </div>
                  </div>

                  <p className="text-sm lg:text-lg text-grayText">
                    {item.descLg}
                  </p>


                  <div className="grid gap-7 font-semibold text-md lg:text-lg">
                    <li className="flex gap-2 justify-center lg:justify-start mt-8 lg:mt-0">
                      <p className="">
                        COP : <span className="font-semibold text-2xl">${item.price}</span>
                      </p>
                      <p className="relative font-medium text-gray-600/60 text-base
                          line-through">
                        ${item.priceDesc}
                      </p>
                    </li>
                    <p className="">
                      Beneficios : <span className='text_product'>{item.benefits.one}</span>
                      <span className='text_product ml-5'>{item.benefits.two}</span>
                    </p>

                  </div>
                </article>
              </section>

              {/* Descripciones */}
              <article className="lg:mt-10 mb-8 lg:mb-0">
                {/* Tabs */}
                <div className="flex place-content-center lg:place-content-start 
                    text-sm lg:text-lg font-semibold">
                  <div className="">
                    <button className={tabs === 1 ? 'tab active-tab' : 'tab'}
                      onClick={() => handleClickTabs(1)}>Descripcción</button>
                    <button className={tabs === 2 ? 'tab active-tab' : 'tab'}
                      onClick={() => handleClickTabs(2)}>Ingredientes</button>
                  </div>
                  <div className="">
                    <button className={tabs === 3 ? 'tab active-tab' : 'tab'}
                      onClick={() => handleClickTabs(3)}>Informacion</button>
                    <button className={tabs === 4 ? 'tab active-tab' : 'tab'}
                      onClick={() => handleClickTabs(4)}>Beneficios</button>
                  </div>
                </div>
                <div className="border-[1px] border-grayBorder rounded-tl-none rounded-lg">

                  {/* Content */}
                  <div className="">
                    <div className={tabs === 1 ? 'content active-content' : 'content'}>
                      <div className="select-none">
                        {Object.keys(item.desc).map((key, index) => (
                          key !== 'text' &&
                          <div key={index} className="border-b-[1px] border-grayBorder">
                            <div className="select-none">
                              <div className="hover:bg-slate-100/40 duration-200 ease cursor-pointer">
                                <div className="flex justify-between divide divide-gray-600 p4-2" onClick={() => handleClickAcordion(index, event)}>
                                  <p className="py-4 text-start font-semibold lg:text-xl text-blackText">
                                    {item.desc[key].pregunta}
                                  </p>
                                  <Image src={arrow} alt="arrow" className={`${acordion === index ? 'rotate-0' : 'rotate-180'} duration-300 ease-out`} />
                                </div>
                                <div className={`${acordion === index ? 'acordion-item.open px-4' : 'accordion-item'} duration-300 ease lg:text-lg`}>
                                  {item.desc[key].respuesta}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                    <div className={tabs === 2 ? 'content active-content' : 'content'}>
                      <div className='p-6 font-poppins'>
                        <div className="px-4 sm:px-0">
                          <h3 className="text-2xl font-semibold leading-7 text-blackText">Ingredientes del producto</h3>
                          <p className="mt-1 max-w-2xl text-base leading-6 text-grayText">Lee atentamente lo que te ayudará este producto, si empiezas a consumirlo.</p>
                        </div>
                        <ul>
                          {ingredientsList.map((ingredient, index) => (
                            <li key={index} className='flex gap-2 items-center text-lg pt-4 text-blackText
                            font-semibold'>
                              <Image src={bowl} alt="bowl icon" width={25} height={25} />
                              <span className="">{ingredient}</span>
                            </li>
                          ))}
                        </ul>

                      </div>
                    </div>
                    <div className={tabs === 3 ? 'content active-content' : 'content'}>
                      <div className='font-poppins p-6'>
                        <div className="px-4 sm:px-0">
                          <h3 className="text-2xl font-semibold leading-7 text-blackText">Informacion adicional</h3>
                          <p className="mt-1 max-w-2xl text-base leading-6 text-grayText">Toda la información del producto.</p>
                        </div>
                        <div className="mt-6 border-t border-gray-200">
                          <dt>
                            <dl className="divide-y divide-gray-200">
                              <ItemInfo name='Registro Invima' desc={item.invima} />
                              <ItemInfo name='Precio Moneda' desc={item.priceCurrent} />
                              <ItemInfo name='Peso' desc={item.peso} />
                              <ItemInfo name='Cantidad' desc={item.cant} />
                              <ItemInfo name='Dimesiones' desc={item.dimesion} />
                              <ItemInfo name='Formato Articulo' desc={item.format} />
                              <ItemInfo name='Tipo' desc={item.type} />
                              <ItemInfo name='Fabricante' desc={item.fabricante}
                                className="uppercase" />
                              <ItemInfo name='Marca' desc={item.marca} />
                            </dl>
                          </dt>
                        </div>
                      </div>
                    </div>
                    <div className={tabs === 4 ? 'content active-content' : 'content'}>
                      <div className='p-6 font-poppins'>
                        <div className="px-4 sm:px-0">
                          <h3 className="text-2xl font-semibold leading-7 text-blackText">Beneficios del producto</h3>
                          <p className="mt-1 max-w-2xl text-base leading-6 text-grayText">Lee atentamente lo que te ayudará este producto, si empiezas a consumirlo.</p>
                        </div>
                        {Object.keys(item.beneficios).map((key) => (
                          <div className="">
                            <div className="mt-6">
                              <div className='flex gap-2 items-center'>
                                <Image src={mentalHealth} width={25} height={25} alt="icon-vital" />
                                <p className="text-base lg:text-lg text-blackText font-semibold leading-7
                                    font-poppins">
                                  {item.beneficios[key].title}
                                </p>
                              </div>
                              <dt>
                                <dl className="border-b-[1px] border-b-grayBorder leading-7 py-2
                                  text-grayText pl-2 lg:text-base">
                                  {item.beneficios[key].description}
                                </dl>
                              </dt>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </article>
            </div>

            <div className="grid gap-4 mt-10 container">
              <h1 className='text-3xl text-start font-poppins
                                  font-semibold'>
                Productos más comprados
              </h1>

              <ProductsDesign products={products} />
              <ProductsDesign newproducts={newproducts} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default pageProps

