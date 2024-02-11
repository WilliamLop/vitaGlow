import { facebook, house } from '../public/images';
import Image from 'next/image';
import Link from 'next/link';
import ListaFooter from './ListaFooterIcons'
import ListNav from './ListNav';
import { socialMedia } from '../constants';

const Footer = () => {
    return (
        <div className='text-neutral-600 dark:bg-neutral-900'>
            <footer
            class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-900 dark:text-neutral-200 lg:text-left
            container">
            <div
                class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                <div class="mr-12 hidden lg:block">
                <span>Conéctate con nosotros en las redes sociales:</span>
                </div>
                <div class="flex justify-center gap-4">
                    {socialMedia.map((item) => (
                        <Link href={item.href} className='hover:bg-bluebg p-1 rounded-full duration-300 ease' target='_blank'
                        title={item.alt}>
                            <Image src={item.src}/>
                        </Link>
                    ))}
                
                </div>
            </div>

            <div class="mx-6 py-10 text-center md:text-left">
                <div class="grid-1 grid gap-8 md:grid-cols-2">
                    <div class="">
                        <p
                        class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="mr-3 h-4 w-4">
                            <path
                            d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                        </svg>
                        Vita
                        <span className="text-bluebg font-semibold"> -Glow</span>
                        </p>
                        <p>
                            VitaGlow es mucho más que una marca de productos. Representa un estilo de vida vibrante y saludable, donde la belleza se fusiona con el bienestar. Nuestra empresa se dedica a ofrecer una gama de productos innovadores y de alta calidad diseñados para nutrir tu cuerpo y tu mente. Desde suplementos revitalizantes hasta productos de cuidado personal, en VitaGlow encontrarás todo lo que necesitas para brillar desde adentro hacia afuera.
                        </p>
                    </div>

                <div className="flex flex-col lg:flex-row gap-10 justify-between">
                    <div class="">
                        <p
                        class="font-semibold uppercase mb-4">
                        Ganoderma
                        </p>
                        <ListNav />
                    </div>

                    <div className='justify-end'>
                        <p
                        class="font-semibold uppercase mb-4">
                        Contacto
                        </p>

                        <ListaFooter />
                    </div>
                </div>
                </div>
            </div>

            <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-900">
                <span>© 2024 Copyright:</span>
                <a
                class="font-semibold text-neutral-600 dark:text-neutral-400"
                href="https://github.com/WilliamLop"
                target='_blank'
                >Fenbapps</a>
            </div>
            </footer>
        </div>
    )
}

export default Footer