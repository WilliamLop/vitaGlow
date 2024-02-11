import Button from "../components/Button";
import Product from "../components/Product"
import ParticleBg from "../components/ParticleBg"
// import Particles from "@components/particles";
import { bgfuture, hongo, hongoSeparador, latterico, personalContact, productsHome, productsVite, ribbon, rooibos } from "../public/images";
import Image from "next/image";
import Link from "next/link";
import { pasosGanoderma } from "../constants";



export default function Home() {
  return (
    <div className="">
      <div className="relative">
          <div className="font-poppins lg:h-screen grid py-12">
            <ParticleBg />
            <section className="container pt-12 grid lg:items-start
            lg:justify-between lg:grid-cols-2">
              <article className="text-center grid gap-4 lg:gap-6 mt-12 text-slate-100 lg:text-start">
                {/* Information home */}
                <p className="uppercase">Los mejores ganoderma</p>
                <h1 className="text-5xl xl:text-6xl  font-bold font-outfit ">
                  Es para tu salud
                  <br />
                  <span className="text-bluebg">
                    Ganoderma
                  </span>
                </h1>

                <Button title="Ver más" color="primary" size="lg" className="mx-auto"/>
              </article>

              <article className="hidden lg:block">
                <Image
                  src={productsVite}
                  alt="products gano"
                  className="object-cover"
                />
              </article>
            </section>
          </div>

      </div>
        <div className="bg-whitebg pt-12 lg:pb-12 w-full relative h-auto mx-auto shadow-md">
          <Image
            src={hongo}
            className="object-contain absolute right-0 top-0 opacity-10 lg:opacity-40 lg:rotate-90 lg:bottom-[10px]"
            width={400}
            height={400}
            alt="hongo-bg"
          />

          <div class="container mx-auto md:px-6 font-poppins">

            <section class="mb-32 lg:mb-8 mt-10">
              <h2 class="mb-12 text-center text-4xl font-bold" data-aos="fade-up" data-aos-duration="3000">
                Mejora tu salud con Ganoderma
              </h2>

              <div class="flex flex-wrap items-center">
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
                  <div class="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init data-te-ripple-color="light">
                    <Image src={bgfuture} className="w-full" alt="future" />
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                      <div class="flex h-full items-center justify-center">
                        <div class="px-6 py-12 text-center text-white md:px-12">
                          <h3 class="mb-6 text-2xl font-bold uppercase">
                            El futuro <span class="text-[hsl(210,12%,80%)]">es</span>
                          </h3>
                          <p class="text-slate-100 backdrop-blur-xl p-2 rounded-sm">
                            "Descubre el Ganoderma Lucidum, el "Rey de los Antioxidantes", en nuestros productos de bienestar. Derivado de seis variedades y cultivado en nuestra plantación orgánica en Kedah, Malasia, ofrecemos una solución integral para tu salud. Nuestros productos, además de promover el bienestar"
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                      <div
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
                  {pasosGanoderma.map((item) => (
                    <div class="mb-12 flex">
                      <div class="shrink-0">
                        <div class="rounded-full p-4 shadow-md">
                          {/* Imagen */}
                          <Image
                            className="h-10 w-10 text-white"
                            src={item.imgURL}
                            alt={item.imgAlt}
                          />
                        </div>
                      </div>
                      <div class="ml-4 grow">
                        <p class="mb-1 font-bold text-lg">{item.title}</p>
                        <p class="text-gray-600/70 text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>
      {/* Products */}
      <section className="bg-whitebg pt-4 relative pb-[40px] shadow-sm lg:py-4">

        <Image
          src={hongo}
          className="object-contain absolute lg:left-0 lg:top-0 opacity-20 lg:rotate-90
            hidden lg:block"
          width={400}
          height={400}
          alt="hongo-bg"
          />
        <Image
          src={hongo}
          className="object-contain absolute right-0 lg:bottom-[-120px] opacity-10 lg:opacity-80 lg:rotate-90"
          width={400}
          height={400}
          alt="hongo-bg"
        />

        {/* Seccion de titulos */}
        <article className="text-center font-poppins relative">
          <h1 className="text-4xl text-center font-bold">
            Nuestros productos relevantes
          </h1>

          <Image src={hongoSeparador}
            alt="desing-hongo"
            className="mx-auto h-[99px] object-cover mt-8"
          />

          <p className="lg:w-[650px] mx-auto text-gray-900/60 lg:px-0 px-2 mb-4">
            Explora nuestros productos seleccionados para mejorar tu bienestar. Desde suplementos nutricionales hasta cuidado personal, tenemos lo que necesitas para una vida más saludable.
          </p>
        </article>

        <div className="grid">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800
          text-center">Compras más frecuentes</h2>

          <Product />

          <Link href="/products" className='mx-auto'>
            <Button title="Ver más" color="primary" size="lg" />
          </Link>
        </div>
      </section>

      {/* Distribuidor */}
      <section className="container py-20 place-items-center xl:text-start bg-neutral-950
      grid gap-4 xl:grid-cols-[300px,400px,1fr] items-center justify-center text-white">
        {/* Informacion */}
        <div className="font-bold text-center">
          <p className="text-lg lg:text-2xl">
            Más  de
          </p>
          <p className="text-7xl mb-4 text-[#02A2DD]">
            + 10.000
          </p>

          <p className="font-bol font-outfit text-4xl">
            Miembros
            <br />
            Trabajando
          </p>
        </div>

        {/* Imagen */}
        <Image
          src={personalContact}
          className="object-contain lg:w-[400px]"
          width={250}
          height={350}
          alt="personal"
        />

        {/* Descripción */}

        <article className="grid gap-4 py-8 text-center xl:text-start lg:gap-6 lg:ml-10">
          <h2 className="text-3xl lg:text-4xl font-bold 2xl:text-5xl">
            Conviértase en nuestro distribuidor
          </h2>

          <p className="text-gray-400 text-md lg:w-full mx-auto xl:mx-0">

            <span className="text_distribuidor">
              ¡Descubre la libertad de ser tu propio jefe y alcanzar tus sueños financieros!
            </span> Conviértete en nuestro distribuidor y deja atrás la rutina de trabajar como esclavo por un salario.

            <span className="text_distribuidor"> Con nuestro programa de distribución, tendrás la oportunidad de construir tu propio negocio</span>, establecer tus propios horarios y disfrutar de una vida con más tiempo y comodidades. Imagina poder trabajar desde cualquier lugar y tener el control total de tu futuro financiero.
            ¡Es hora de dar el primer paso hacia la vida que siempre has soñado! <span className="text_distribuidor"> Contáctanos hoy para obtener más información sobre cómo convertirte en distribuidor y comenzar tu viaje hacia la libertad financiera.</span>
          </p>

          <Link href="./contact">
            <Button color="primary" size="lg" title="Contacto" />
          </Link>
        </article>

      </section>
    </div>
  );
}
