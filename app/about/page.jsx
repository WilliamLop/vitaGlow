import HeadDesc from '../../components/HeadDesc'
import { imgproducwhite } from '../../public/images'

const AboutPage = () => {
    return (
        <div className="">
            <HeadDesc imgProp={imgproducwhite} title="Acerca de nosotros"
                desc="Somos una empresa dedicada a la venta y distribución de productos para el
                cuidado personal, enmarcados bajo marcas reconocidas a nivel nacional e internacional
                por su calidad y excelente servicio." 
            />
        </div>
    )
}

export default AboutPage