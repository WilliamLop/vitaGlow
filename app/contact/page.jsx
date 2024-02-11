import HeadDesc from '../../components/HeadDesc'
import IconsContact from '../../components/IconsContact'
import { hongoSeparador, imgproducwhite } from '../../public/images'
import React from 'react'

const ContactPage = () => {
    return (
        <div className=''>
            <section class="">
            <HeadDesc text="Economia" title="Contacto"
                desc="Somos una empresa dedicada a la venta y distribución de productos para el
                cuidado personal, enmarcados bajo marcas reconocidas a nivel nacional e internacional
                por su calidad y excelente servicio." 
            />
            <div class="bg-whitebg">
                    <div class="container bg-neutral-100 relative bottom-[50px]">
                        <div
                            class="block rounded-lg  shadow-lg
                            md:py-16 md:px-12 backdrop-blur-[30px]">
                            <div class="">
                                <IconsContact />
                            </div>
                            <div class="mx-auto max-w-[700px]">
                                <form>
                                    <div class="relative mb-6" data-te-input-wrapper-init>
                                        <input type="text"
                                            class="peer input-sty"
                                            id="" placeholder="Nombre" required/>
                                        <label
                                            class="label-sty"
                                            for="exampleInput90">Nombre
                                        </label>
                                    </div>
                                    <div class="relative mb-6" data-te-input-wrapper-init>
                                        <input type="email" class="peer input-sty" id="exampleInput91" placeholder="exampl@gmail.com" required/>
                                        <label
                                            class="label-sty" for="exampleInput91">Email
                                        </label>
                                    </div>
                                    <div class="relative mb-6" data-te-input-wrapper-init>
                                        <textarea
                                            class="peer input-sty"
                                            id="exampleFormControlTextarea1" rows="3" placeholder="Tu Mensaje"></textarea>
                                        <label for="exampleFormControlTextarea1"
                                            class="label-sty">Mensaje</label>
                                    </div>
                                    <button type="button" data-te-ripple-init data-te-ripple-color="light"
                                        class="lg:w-[40%] lg:mx-auto w-full rounded px-6 pt-2.5 pb-2 text-xs grid shadow-md
                                        font-medium uppercase leading-normal text-white bg-bluebg hover:bg-blue-600
                                        transition duration-150 ease-in ">
                                        Enviar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
            </section>
        </div>
    )
}

export default ContactPage