import HeadDesc from '../../components/HeadDesc';
import ProductsDesign from '../../components/ProductsDesign';
import { newproducts, products } from '../../constants';
import { hongoSeparador, imgproducwhite } from '../../public/images';
import Image from "next/image";


const ProductPage = () => {

    return (
        <div className=''>
            <div className=''>
                <HeadDesc imgProp={imgproducwhite} title="Nuestros Productos"
                desc="Son diseñados para brindarte una experiencia de compra inigualable,
                aquí podrás encontrar una gran variedad de productos para tu salud y vida."/>
            </div>
            <section className='bg-whitebg'>

                <article className="container gap-8 py-4">
                    {/* Filter */}
                    <div className="bg-transparent h-[650px] border-[1px] hidden
                    border-gray-500/40 rounded-lg shadow-sm">
                        <h3>
                            Filtro
                        </h3>
                    </div>

                    {/* Productos */}
                    <div className="grid gap-8">
                        <div className="">

                            <ProductsDesign products={products} />
                        </div>
                        <div className="grid gap-4 mt-10">
                            <h1 className='text-3xl text-start font-poppins
                            font-semibold'>
                                Productos más comprados
                            </h1>

                            <ProductsDesign newproducts={newproducts} />
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default ProductPage