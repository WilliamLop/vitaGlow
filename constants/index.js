import { chocolate, hongosbg, latterico, logo_p, mocharico, ganocafe, rooibos, shampoo, cereal, cordygold, exfoliante, ganofresh, ganotransparent, ribbon, house, email, phone, clasico, acondicionador, reskine, ganoderma, excellium, mushroom, planet, ubi, phoneContact, tax, facebook, tiktok, instagram } from '../public/images/index';

export const navLinks = [
    { href: "/", label: "Inico" },
    { href: "/about", label: "Acerca de" },
    { href: "/products", label: "Productos" },
    { href: "/contact", label: "Contacto" },
]


export const newproducts = [
    // Schokolade
    {
        id: 'chocolate',
        imgURL: chocolate,
        imgAlt: 'Schokolade-img',
        name: "Schokolade",
        price: "109.999",
        priceDesc:"149.999",
        desc: {
            text: "Gano Chocolate – El Delicioso Chocolate Suizo Enriquecido con Excellium",

            questionOne: {
                id: 1,
                pregunta: '¿Qué es Gano Schokolade?',
                respuesta: 'Gano Schokolade es una bebida deliciosa y nutritiva que combina el sabor del mejor chocolate artesanal con el toque incomparable del extracto de Ganoderma Lucidum. Es una opción saludable que ofrece una variedad de beneficios para el bienestar, incluyendo propiedades estimulantes para mejorar el estado de ánimo y la claridad mental, propiedades antioxidantes que combaten el envejecimiento y el deterioro corporal, así como propiedades reductoras y suavizantes para la piel. Además, proporciona una serie de nutrientes esenciales como vitaminas, minerales y antioxidantes que promueven la salud cardiovascular, intestinal y general del cuerpo. En resumen, Gano Schokolade es una bebida indulgente que también cuida de tu salud y bienestar.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para Qué Sirve el Gano Schokolade?',
                respuesta: 'Esta deliciosa y reconfortante mezcla no solo ofrece el exquisito sabor del mejor chocolate artesanal, sino que también brinda una serie de beneficios para la salud. Con el toque incomparable del extracto de Ganoderma Lucidum, Gano Schokolade se convierte en una opción indulgente que no solo estimula el paladar, sino que también mejora el estado de ánimo, combate los signos del envejecimiento y contribuye a la salud cardiovascular. Además, sus propiedades reductoras, hidratantes y antioxidantes hacen de esta bebida una opción integral para el bienestar y el cuidado de la piel. Disfruta de cada sorbo de Gano Schokolade y deleita tus sentidos mientras cuidas de tu salud y bienestar.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Cómo puedo preparar rápidamente mi chocolate para disfrutarlo al instante?',
                respuesta: 'Preparar tu Chocolate Gano es fácil y rápido. Solo necesitas verter el contenido del sobre en una taza, añadir agua caliente, revolver durante un minuto ¡y listo! Disfruta de tu deliciosa taza de Gano Schokolade en minutos.'
            },
        },
        cant: 'Caja x 20 sobres(30g)',
        peso: '600g',
        dimesion: '21,2 x 1002 x 8,5 cm',
        beneficios: {
            uno: {
                title: 'Propiedades estimulantes',
                description: 'Mejoran el humor, el estado de ánimo, combate la tristeza, la irritabilidad y la ansiedad, activa los receptores cerebrales que provocan placer y claridad mental.',
            },
            dos: {
                title: 'Propiedades antioxidantes',
                description: 'Ayudan a combatir los radicales libres, el envejecimiento y el deterioro corporal.',
            },
            tres: {
                title: 'Propiedades reductoras',
                description: 'anticelulíticas, suavizantes, hidratantes y antioxidantes presentes en el cacao, contribuyen a la eliminación de grasas por ello es utilizado para la piel de un tratamiento cosmético y estético',
            },
            cuatro: {
                title: 'Mejora el funcionamiento cardiovascular',
                description: 'previene problemas de este tipo, gracias a su contenido de ácido esteárico (sustancias grasas).',
            },
            cinco: {
                title: 'Aportan vitaminas',
                description: 'E, B1 y B2, hierro, cobre, calcio, cromo y zinc.',
            },
            seis: {
                title: 'Aporta minerales',
                description: 'Fósforo, potasio y magnesio (mejora el estado anímico de las mujeres, especialmente en el periodo menstrual)',
            }
        },
        descLg: 'La dulzura y sabor del mejor chocolate artesanal, con el toque incomparable de una bebida deliciosa y nutritiva con el extracto de Ganoderma Lucidum.',
        format: 'Alimenticio',
        type: 'Bebida',
        benefits: {
            one: 'Salud',
            two: 'Energía',
        },
        ingredients: {
            text: 'Cacao, azúcar refinada, crema no láctea (Solidos de jarabe de glucosa, aceite vegetal hidrogenado, proteína de leche, difosfato de potasio, tripolifosfato de sodio alimenticio, mono- y de gliceridos, estearoil lacteo de sodio, riboflavina, silicato de sodio y aluminio), polvo de leche descremada y polvo de Ganoderma Lucidum.',
        },
        marca: 'Gano Excel',
        bonus: 'Textura suiza',
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° SD2013-0002936',

    },
    // Coffe clasic
    {
        id: 'clasico',
        imgURL: clasico,
        imgAlt: 'Coffe-clasic-img',
        name: "Coffe clasic",
        price: "109.999",
        priceDesc:"139.999",
        desc: {
            
            text: "Un café instantáneo enriquecido con extracto de Ganoderma Lucidum, con el clásico sabor del café negro",

            questionOne: {
                pregunta: '¿Qué es Ganocafé clásico?',
                respuesta: 'Gano Café Classic es un café instantáneo enriquecido con extracto de Ganoderma Lucidum, conocido por su sabor clásico a café negro y se promociona por sus posibles beneficios para la salud, que incluyen mejorar el metabolismo, combatir la intoxicación, apoyar la salud del hígado, riñones, corazón, sistema circulatorio e inmunológico, así como proporcionar alivio del dolor y beneficios para personas con diabetes.'
            },
            questionDos: {
                pregunta: '¿Para Qué Sirve el Ganocafé Clásico?',
                respuesta: 'El Ganocafé Clásico, elaborado por Gano Excel, es una mezcla exquisita de café gourmet con el hongo Ganoderma lucidum, un componente de la medicina tradicional con siglos de historia. Esta bebida única ofrece una serie de beneficios para la salud. Entre sus atributos más destacados, se encuentran sus propiedades antioxidantes, que ayudan a proteger las células del cuerpo contra el daño causado por los radicales libres. Además, la combinación de cafeína natural y Ganoderma lucidum presente en el Ganocafé Clásico puede proporcionar un impulso energético y mejorar la concentración.'
            },
            questionTres: {
                pregunta: '¿Cómo puede el Gano Café Clásico impulsar tu camino hacia un peso saludable?',
                respuesta: 'Descubre cómo el Gano Café Clásico, con su combinación única de café y Ganoderma Lucidum, puede ser tu aliado en la búsqueda de un peso saludable. Este café no solo deleita tu paladar, sino que también activa tu metabolismo, facilitando la eliminación de grasas acumuladas de manera más eficaz. Además, su consumo después del ejercicio puede reducir los dolores musculares y promover una recuperación más rápida. Demostrando ser eficaz en la mejora de trastornos metabólicos asociados al sobrepeso, el Gano Café Clásico puede ser el impulso que necesitas para alcanzar tus objetivos de adelgazamiento. ¿Listo para potenciar tu salud y bienestar con cada sorbo?'
            },
            questionCuatro: {
                pregunta: ' ¿Cómo puede el Gano Café Clásico mejorar tu rendimiento deportivo?',
                respuesta: 'El Gano Café Clásico ofrece una combinación única de café y Ganoderma Lucidum que puede ser beneficiosa para tu entrenamiento en el gimnasio o actividades deportivas como correr. Gracias a su capacidad para activar el metabolismo y eliminar grasas acumuladas de manera eficaz, este café puede proporcionar un impulso energético y mejorar tu resistencia durante el ejercicio. Además, su consumo post-entrenamiento puede ayudar a reducir los dolores musculares y promover una recuperación más rápida, permitiéndote alcanzar tus metas deportivas de manera más eficiente. ¿Listo para llevar tu rendimiento al siguiente nivel con cada sorbo de Gano Café Clásico?'
            },
            questionCuatro: {
                pregunta: '¿Cómo puede el Gano Café Clásico mejorar tu experiencia de estudio y rendimiento académico?',
                respuesta: 'Descubre cómo el Gano Café Clásico, con su deliciosa combinación de café y Ganoderma Lucidum, puede ser tu aliado perfecto en tus sesiones de estudio y trabajo académico. Con su capacidad para mejorar la concentración y la energía, este café puede ayudarte a mantener un enfoque óptimo durante largas horas de estudio. Además, su potencial para activar el metabolismo y proporcionar antioxidantes puede contribuir a un mejor rendimiento cognitivo y a una salud mental óptima. ¿Listo para potenciar tu productividad y alcanzar tus metas académicas con cada sorbo de Gano Café Clásico?'
            },
        },
        cant: 'Caja x 30 sobres',
        peso: '90 g',
        dimesion: '18,2 x 8,2 x 6,3 cm',
        beneficios: {
            uno: {
                title: 'Mejora de la concentración y la energía',
                description: 'La cafeína presente en el café puede ayudar a aumentar la concentración y el estado de alerta, lo que puede ser beneficioso para mantenerse enfocado durante las sesiones de estudio prolongadas. Además, el Ganoderma Lucidum puede proporcionar un impulso adicional de energía sin los efectos secundarios negativos asociados con el consumo excesivo de cafeína.',
            },
            dos: {
                title: 'Apoyo al rendimiento cognitivo',
                description: 'Algunos estudios sugieren que los antioxidantes presentes en el Ganoderma Lucidum pueden tener efectos neuroprotectores, lo que podría mejorar la función cognitiva y la memoria a largo plazo. Esto podría ser especialmente útil para retener y comprender mejor la información durante el estudio.',
            },
            tres: {
                title: 'Promoción de la salud mental:',
                description: 'Los antioxidantes y otros compuestos bioactivos presentes en el Ganoderma Lucidum también pueden tener efectos positivos en la salud mental al reducir el estrés oxidativo y promover la salud del cerebro en general. Esto podría ayudar a reducir la ansiedad y mejorar el estado de ánimo, lo que a su vez podría tener un impacto positivo en el rendimiento académico.',
            },
            cuatro: {
                title: 'Intoxicación',
                description: 'Acné, manchas en la piel, envejecimiento prematuro, envenenamiento.',
            },
            cinco: {
                title: 'Irregularidades en el funcionamiento del hígado',
                description: 'Hepatitis, cirrosis, bilirrubina alta, manchas en las uñas.',
            },
            seis: {
                title: 'Riñones',
                description: 'Infecciones en la orina, gota, ácidoúrico, reumatismo, artritis.',
            },
            siete: {
                title: 'Intestinos',
                description: 'Estreñimiento, sangrado, divertículos, colitis, etc.',
            },
            ocho: {
                title: 'Corazón',
                description: 'Previene infartos, arritmias, hipertensión, etc.',
            },
        },
        descLg: 'Una fusión excepcional de café gourmet y Ganoderma lucidum sin endulzante que brinda antioxidantes, energía mejorada y un sabor inigualable. ¡Ideal para amantes del café que buscan bienestar!',
        format: 'Alimenticio',
        type: 'Bebida',
        benefits: {
            one: 'Salud',
            two: 'Energía',
        },
        ingredients: {
            text: 'Café, Extracto de Ganoderma Lucidum.',
        },
        marca: 'Gano Excel',
        bonus: '',
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° SD2013-0002865',

    },
    // Rooibos
    {
        id: 'rooibos',
        imgURL: rooibos,
        imgAlt: 'Roiboos-img',
        name: "Rooibos",
        price: "109.999",
        priceDesc:"139.999",
        desc: {
            text: "La bebida de los reyes ingleses junto con el mejor secreto de los emperadores orientales",
            questionOne: {
                id: 1,
                pregunta: '¿Qué es Rooibos Drink?',
                respuesta: 'El Rooibos Drink es un té de hierbas naturalmente dulce y aromático con un potente perfil nutritivo. Es una infusión libre de cafeína con un sabor floral distintivo y está lleno de nutrientes beneficiosos para la salud.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve Rooibos Drink?',
                respuesta: 'El Rooibos Drink ofrece una amplia gama de beneficios para la salud, que incluyen mantener huesos y dientes sanos, promover un corazón saludable al reducir la presión arterial y el colesterol malo, ayudar en la digestión y aliviar la hinchazón abdominal, controlar el peso y acelerar el metabolismo, prevenir el envejecimiento prematuro, desintoxicar el cuerpo, proteger la piel y las enfermedades cutáneas, reponer sales eliminadas durante el ejercicio, proteger el hígado, reducir el estrés y la ansiedad, mejorar la calidad del sueño y promover la salud vascular al reducir la presión arterial y mejorar la circulación sanguínea.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Quieres descubrir el secreto detrás del té Rooibos para perder peso de manera saludable y efectiva?',
                respuesta: 'Sí, el té Rooibos puede ser beneficioso para adelgazar. Aunque no es una solución milagrosa para la pérdida de peso, el Rooibos Drink puede contribuir a un programa de pérdida de peso saludable de varias maneras. Ayuda a controlar la sensación de apetito, acelera el metabolismo y ayuda a detener la formación de depósitos de grasa. Además, al ser una bebida baja en calorías y sin cafeína, puede ser una opción saludable para reemplazar otras bebidas más calóricas y azucaradas. Sin embargo, es importante recordar que la pérdida de peso exitosa generalmente requiere un enfoque integral que incluya una dieta equilibrada y ejercicio regular.'
            },
            questionCuatro: {
                id: 3,
                pregunta: '¿Cómo se prepara el Gano Rooibos Drink?',
                respuesta: 'Simplemente infunde un sobre en agua caliente durante unos minutos y disfruta. Puedes ajustar la intensidad según tu preferencia.'
            },
        },
        cant: 'Caja x 20 sobres',
        peso: '40 g',
        dimesion: '14,6 x 9,2 x 9,5 cm',
        beneficios: {
            uno: {
                title: 'Corazón saludable',
                description: ':Inhiben la enzima angiotensina que aumenta la presión arterial; el consumo diario ayuda a la disminución del colesterol malo (LDL).',
            },
            dos: {
                title: 'Desintoxicación:',
                description: 'Mejora la quema de grasa, optimiza la construcción de músculo, previene el desarrollo de trastornos metabólicos y ayuda a combatir la retención de líquidos (diurético)',
            },
            tres: {
                title: 'Elíxir de la eterna juventud',
                description: ':Previene el envejecimiento prematuro',
            },
            cuatro: {
                title: 'Ayuda a bajar y/o controlar el peso',
                description: 'Controla la sensación controlada o descontrolada del apetito ayuda a acelerar el metabolismo y a detener la formación de depósitos de grasa.',
            },
            cinco: {
                title: 'Salud Ósea',
                description: 'Mantiene los huesos y dientes sanos y fuertes.',
            },
            seis: {
                title: 'Para deportistas',
                description: 'Ayuda a reponer las sales eliminadas durante el ejercicio y a evitar calambres. Protege el hígado.',
            },
        },
        descLg: 'El Gano Rooibos Drink (té) cuenta con un aroma floral, sabor naturalmente dulce y un potente perfil nutritivo. Con hierro, calcio, potasio, magnesio, zinc y más, este té de hierbas sin cafeína ofrece beneficios para la piel, el cabello y la salud ósea, el apoyo del sistema inmunológico y el poder antioxidante.',
        format: 'Alimenticio',
        type: 'Bebida',
        benefits: {
            one: 'Salud',
            two: 'Energía',
        },
        marca: 'Gano Excel',
        bonus: '',
        ingredients: {
            text: 'Rooibos (Aspalathus Linearis), Ganoderma Lucidum 500MG',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° SD2017-0004109',

    },
    // Reskine
    {
        id: 'reskine',
        imgURL: reskine,
        imgAlt: 'Reskine-img',
        name: "Reskine Collagen",
        price: "219.999",
        priceDesc:"269.000",
        desc: {
            text: "Gano Plus Reskine Collageno Drink de Gano Excel",
            questionOne: {
                id: 1,
                pregunta: '¿Qué es gano plus Reskine?',
                respuesta: 'El Colágeno Marino de Gano Excel, clave en nuestro Gano Plus Reskine, es una innovación en el cuidado de la salud y la belleza. Proveniente de fuentes marinas sostenibles, este colágeno no es solo un suplemento, sino un avance en el rejuvenecimiento y la nutrición.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve gano plus Reskine?',
                respuesta: 'La Bebida de Colágeno Gano Plus Reskine está diseñada para múltiples propósitos de salud y belleza. Este producto ayuda a apoyar la reparación de tejidos, reducir el dolor, aumentar la energía, mejorar la función cognitiva, proteger el sistema cardiovascular, fortalecer las defensas y ralentizar el proceso de envejecimiento. Además, gracias a su contenido de colágeno marino con vitamina C y antioxidantes, es especialmente eficaz para tratar la flacidez de la piel y contribuir a la formación de colágeno necesario para el funcionamiento normal de cartílagos y músculos.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Cuánto tiempo se requiere para ver los efectos del colágeno de Gano Excel?',
                respuesta: 'Para observar los beneficios completos del colágeno de Gano Excel, recomendamos un consumo constante durante al menos tres meses. La mejora en la salud de la piel, la fortaleza de las articulaciones y el bienestar general se acumulan con el uso continuo.'
            },
            questionCuatro: {
                id: 4,
                pregunta: '¿El colágeno Marino con Ganoderma Lucidum engorda?',
                respuesta: 'No, el colágeno con Ganoderma Lucidum es una proteína con bajo valor calórico que se integra sin problemas en cualquier régimen alimenticio. No solo no engorda, sino que su consumo es beneficioso para la salud general y el mantenimiento de un peso saludable.'
            },
            questionCinco: {
                id: 5,
                pregunta: '¿Qué colágeno ofrece la mejor absorción y beneficios?',
                respuesta: 'Definitivamente el Gano Plus Reskine Collagen Drink, con su fórmula de colágeno líquido, proporciona una tasa de absorción significativamente superior en comparación con las formas hidrolizadas en polvo.'
            },
        },
        cant: '10 sobres(250ml)',
        peso: '250 g',
        dimesion: '10 x 4 x 16,5 cm',
        beneficios: {
            uno: {
                title: 'Energía y vitalidad con quinua líquida',
                description: 'La quinua líquida en nuestra bebida es una fuente rica de aminoácidos, proporcionando una energía sostenible y apoyando el mantenimiento y reparación de los tejidos en el cuerpo.',
            },
            dos: {
                title: 'Bienestar digestivo con Aloe Vera:',
                description: 'El Aloe Vera en Reskine Collagen Drink es reconocido por sus propiedades digestivas, ayudando a mantener un sistema gastrointestinal sano y funcionando correctamente.',
            },
            tres: {
                title: 'Vitamina C de la Acerola para la Síntesis de Colágeno:',
                description: 'La baya de acerola, rica en vitamina C, es fundamental para la síntesis natural de colágeno en el cuerpo, lo que se traduce en una piel más joven y una mejor salud ósea.',
            },
            cuatro: {
                title: 'Antioxidantes Naturales del Extracto de Goji:',
                description: 'Con una alta concentración de antioxidantes, el extracto de Goji ayuda a neutralizar los radicales libres, promoviendo una piel saludable y protegiendo contra el daño celular.',
            },
            cinco: {
                title: 'Beneficios de Alta Bioasimilación',
                description: 'El colágeno líquido en Gano Plus se caracteriza por su alta bioasimilación, lo que significa una absorción y efectividad rápidas en el organismo. Esto asegura que los nutrientes sean aprovechados al máximo, brindando resultados visibles en la piel, las articulaciones y el tejido conectivo.',
            },
        },
        descLg: 'Descubre la fuente de la juventud moderna con Gano Plus Reskine Collagen Drink, tu aliado diario para una belleza y bienestar sin igual. Nuestra bebida única combina la potencia del colágeno marino con la riqueza del Ganoderma Lucidum, creando una sinergia que revitaliza tu cuerpo y embellece tu piel desde el interior.',
        format: 'Alimenticio',
        type: 'Suplemento',
        benefits: {
            one: 'Salud',
            two: 'Energía',
        },
        marca: 'Gano Excel',
        bonus: '',
        ingredients: {
            text: 'Colágeno marino, Quinua Líquida, Extracto de goji, Jugo de manzana, Aloe Vera, Extracto de baya de acerola, Espinaca, Arándano, Sabor de fresa y frambuesa',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: '',

    }
];


export const products = [
    // Gano 3 en 1
    {
        id: 'ganocafe',
        imgURL: ganocafe,
        imgAlt: 'ganocafe-img',
        name: "Gano 3 en 1",
        price: "99.999",
        priceDesc:"120.000",
        desc: {
            text: "Una función de los más selectos granos de café y extracto de Ganoderma Lucidum.",
            questionOne: {
                id: 1,
                pregunta: '¿Qué es Gano Café 3 en 1?',
                respuesta: 'Gano Café 3 en 1 es una innovadora opción en el mercado del café que va más allá de ser una simple bebida. Es una revolución en cada taza, que combina granos de café de alta calidad con extracto de Ganoderma Lucidum, un hongo conocido por sus propiedades rejuvenecedoras y fortalecedoras del sistema inmunológico.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve el Gano café?',
                respuesta: 'Gano Café 3 en 1 no solo ofrece un sabor excepcional, sino que también proporciona beneficios para la salud al integrar los efectos positivos del Ganoderma Lucidum en la rutina diaria. Ayuda a fortalecer el sistema inmunológico, promueve el bienestar holístico y ofrece una experiencia de café enriquecida con nutrientes esenciales.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Cómo puede Gano Café 3 en 1 beneficiar a los deportistas?',
                respuesta: 'Gano Café 3 en 1 puede ser beneficioso para los deportistas debido a su capacidad para proporcionar energía y apoyar la recuperación muscular. La combinación de cafeína natural con los nutrientes y antioxidantes del Ganoderma Lucidum puede mejorar el rendimiento físico y ayudar en la recuperación después del ejercicio.'
            },
            questionCuatro: {
                id: 4,
                pregunta: '¿Cómo se diferencia Gano Café 3 en 1 en términos de sabor y aroma?',
                respuesta: 'Gano Café 3 en 1 se distingue por ofrecer una experiencia sensorial única desde el primer aroma hasta el último sorbo. La armoniosa combinación de granos de café de alta calidad con el suave toque terroso del Ganoderma crea un sabor y aroma excepcionales que satisfacen tanto a los amantes del café tradicional como a aquellos que buscan nuevas experiencias.'
            },
            questionCinco: {
                id: 5,
                pregunta: '¿Qué compromisos ambientales tiene Gano Café 3 en 1?',
                respuesta: 'Gano Café 3 en 1 se destaca por su compromiso con prácticas sustentables y responsables en todas las etapas de producción. Desde el cultivo de los granos de café hasta la extracción de Ganoderma, se prioriza el máximo respeto por el medio ambiente y la calidad del producto. Al elegir Gano Café 3 en 1, estás apoyando un futuro más verde y una marca comprometida con la sostenibilidad.'
            },
        },
        cant: 'Caja x 20 sobres',
        peso: '420 g',
        dimesion: '9,4 x 7,1 x 17,3 cm',
        beneficios: {
            uno: {
                title: 'Aumenta la Energía y Rejuvenece el Cuerpo',
                description: 'El consumo de Ganoderma Lucidum proporciona un impulso natural de energía al cuerpo, ayudando a combatir la fatiga y revitalizando el organismo. Sus propiedades antioxidantes y revitalizantes ayudan a rejuvenecer el cuerpo y a mejorar la vitalidad.',
            },
            dos: {
                title: 'Fortalece el Sistema Inmunológico',
                description: 'El Ganoderma Lucidum es conocido por potenciar el sistema inmunológico, aumentando la capacidad del cuerpo para defenderse contra enfermedades y agentes patógenos. Esto ayuda a prevenir enfermedades comunes y a mantener una salud óptima.',
            },
            tres: {
                title: 'Mejora la Circulación Sanguínea',
                description: 'El Ganoderma Lucidum promueve una mejor circulación sanguínea, lo que puede ayudar a reducir el riesgo de enfermedades cardiovasculares como la insuficiencia coronaria y las arteriosclerosis. Además, mejora el desempeño sexual y combate la obesidad al optimizar el flujo sanguíneo.',
            },
            cuatro: {
                title: 'Alivia el Estrés y la Ansiedad',
                description: 'Las propiedades relajantes del Ganoderma Lucidum ayudan a reducir la ansiedad, la presión alta y el estrés. Esto se traduce en una mejora del estado de ánimo y una disminución de la presión arterial, lo que contribuye a un bienestar emocional y mental.',
            },
            cinco: {
                title: ' Protege el Hígado y Desintoxica el Organismo',
                description: 'El Ganoderma Lucidum posee propiedades hepatoprotectoras que protegen el hígado y ayudan en su desintoxicación. Además, limpia los riñones, combate el alcoholismo y desinflama los intestinos, promoviendo así una salud óptima del sistema digestivo y excretor.',
            },
        },
        descLg: 'Una función de los más selectos granos de café y extracto de Ganoderma Lucidum, el cual presenta un 95% de su contenido, mezclado con un mínimo de 5% de contenido de café descafeinado instantáneo, además, posee un sabor especial de crema no láctea y edulcorantes naturales (fructosa) para una armonía de aroma y sabor más suave y extraordinario.',
        format: ' Alimenticio',
        type: 'Bebida',
        benefits: {
            one: 'Salud',
            two: 'Energía',
        },
        marca: 'Gano Excel',
        bonus: '',
        ingredients: {
            text: 'Azúcar, crema no láctea [Sólidos de jarabe de glucosa, grasa vegetal, caseinato de sodio (proteína de leche), dióxido de silicio, hidrógeno, fosfato dipotásico, tripolifosfato de sodio, mono-diglicéridos de ácidos grasos de glicerol], café instantáneo en polvo, Ganoderma Lucidum beta glucano.',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° RSA-0011698-2021',

    },
    // c'real
    {
        id: 'cereal',
        imgURL: cereal,
        imgAlt: 'creal-img',
        name: " C'real",
        price: "109.999",
        priceDesc:"133.000",
        desc: {
            text: "Cereal rico en fibra y proteína contiene hojuelas de grano entero de avena y extracto de Ganoderma Lucidum y Spirulina.",
            questionOne: {
                id: 1,
                pregunta: "¿Qué es gano C'real?",
                respuesta: ' El Gano Cereal con Espirulina es un producto nutritivo y saludable que combina hojuelas de grano entero de avena con extracto de Ganoderma Lucidum y Espirulina. Esta combinación proporciona un cereal rico en fibra, proteínas, antioxidantes y otros nutrientes esenciales para la salud.'
            },
            questionDos: {
                id: 2,
                pregunta: "¿Para qué sirve el gano C'real?",
                respuesta: 'El Gano Cereal con Espirulina sirve para mejorar la digestión, aumentar la energía y resistencia física, fortalecer el sistema inmunológico, controlar los niveles de colesterol, ayudar en la pérdida de peso y promover la salud en general. Su contenido nutricional completo lo convierte en una excelente opción para un desayuno saludable y equilibrado.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Cómo puede el Gano Cereal con Espirulina ayudar a mejorar la digestión?',
                respuesta: ' El Gano Cereal con Espirulina está enriquecido con fibra y otros nutrientes que favorecen la digestión saludable y la regularidad intestinal. La fibra presente en el cereal ayuda a facilitar el movimiento intestinal, promoviendo una digestión más eficiente y un sistema digestivo más saludable en general.'
            },
            questionCuatro: {
                id: 4,
                pregunta: '¿Qué aporta el Gano Cereal con Espirulina al sistema inmunológico?',
                respuesta: 'El Gano Cereal con Espirulina contiene Ganoderma Lucidum, un hongo conocido por sus propiedades inmunomoduladoras. Esta combinación ayuda a fortalecer el sistema inmunológico, protegiendo el cuerpo contra enfermedades y manteniéndolo saludable y resistente.'
            },
            questionCinco: {
                id: 5,
                pregunta: '¿Cómo puede el Gano Cereal con Espirulina contribuir a controlar los niveles de colesterol?',
                respuesta: 'La espirulina, uno de los ingredientes clave del Gano Cereal, ha demostrado ayudar a controlar los niveles de colesterol. Incorporar este cereal a la dieta diaria puede contribuir a mantener un perfil lipídico saludable y prevenir problemas relacionados con el colesterol alto.'
            },
        },
        cant: 'Caja x 15 sobres',
        peso: '450 g',
        dimesion: '21,5 x 10,3 x 9,8 cm',
        beneficios: {
            uno: {
                title: 'Mejora la digestión',
                description: 'El Gano Cereal con Espirulina está enriquecido con fibra, lo que ayuda a mejorar la digestión y favorece la regularidad intestinal. Esta fibra facilita el movimiento intestinal, promoviendo una digestión saludable y una mejor absorción de nutrientes.',
            },
            dos: {
                title: 'Aumenta la energía y resistencia',
                description: 'Gracias a su contenido de proteínas y vitaminas esenciales, el Gano Cereal con Espirulina ayuda a aumentar la energía y la resistencia física. Es un desayuno ideal para mantenerse activo y vigoroso durante todo el día.',
            },
            tres: {
                title: 'Fortalece el sistema inmunológico',
                description: 'El Gano Cereal con Espirulina contiene Ganoderma Lucidum, conocido por sus propiedades inmunomoduladoras. Esta combinación ayuda a fortalecer el sistema inmunológico, protegiendo contra enfermedades y promoviendo la salud general.',
            },
            cuatro: {
                title: 'Controla los niveles de colesterol',
                description: 'La espirulina presente en el cereal ha demostrado ayudar a controlar los niveles de colesterol. Incorporar este cereal a la dieta diaria puede contribuir a mantener un perfil lipídico saludable y prevenir problemas relacionados con el colesterol alto.',
            },
            cinco: {
                title: 'Ayuda en la pérdida de peso',
                description: 'Rico en fibra y bajo en calorías, el Gano Cereal con Espirulina es un aliado efectivo en la lucha contra la obesidad. La fibra aumenta la sensación de saciedad, reduce los antojos y favorece la pérdida de peso, mientras que su bajo índice glucémico ayuda a regular los niveles de azúcar en sangre para un equilibrio energético óptimo.',
            },
        },
        descLg: 'El Gano Cereal con espirulina es un suplemento nutricional muy completo, contiene carbohidratos complejos, vitaminas A, K y vitaminas de complejo B, proteínas, antioxidantes, (betacaroteno) ácidos grasos, nucleicos y lípidos',
        format: 'Alimenticio',
        type: 'Bebida',
        benefits: {
            one: 'Salud',
            two: 'Energía',
        },
        marca: 'Gano Excel',
        bonus: 'Con Spirulina',
        ingredients: {
            text: 'Cereales, Azúcar, Crema no láctea (Sólidos de jarabe de glucosa, Grasa vegetal, Caseinato de sodio (proteína de la leche), Hidrógeno fosfato de potasio, Tripolifosfato de sodio, Mono-y diglicéridos de ácidos grasos, Éster de ácido diacetil tartárico de mono-y diglicéridos, dióxido de silicona, beta-caroteno), Espirulina, Extracto de Ganoderma Lucidum.',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° SD2014-0003291',
    },
    // Laterrico
    {
        id: 'latterico',
        imgURL: latterico,
        imgAlt: 'latterico-img',
        name: "Latte Rico coffe",
        price: "109.999",
        priceDesc:"130.000",
        desc: {
            text: "Latte Rico , un café con crema no láctea y cero azúcar diseñada con gran sabor y comodidad en mente.",
            questionOne: {
                id: 1,
                pregunta: '¿Qué es Latte Rico?',
                respuesta: 'El Gano Rico Latte es parte de la nueva línea de productos Ganocafé de GanoExcel. Es un café premium enriquecido con Ganoderma Lucidum y sin endulzantes añadidos.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve Latte Riico?',
                respuesta: 'El Gano Rico Latte ofrece una amplia gama de beneficios para la salud, incluyendo el aumento de energía y vitalidad, fortalecimiento del sistema inmunológico, mejora de la circulación sanguínea, tratamiento de diversas condiciones de salud y beneficios adicionales para el bienestar general.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Cómo puede el Gano Rico Latte ayudar a mejorar la energía y vitalidad del cuerpo?',
                respuesta: 'El Gano Rico Latte proporciona un impulso de energía natural gracias a su contenido de Ganoderma Lucidum, lo que ayuda a enfrentar las actividades diarias con vitalidad renovada.'
            },
            questionCuatro: {
                id: 4,
                pregunta: '¿Por qué elegir el Gano Rico Latte como opción de café saludable?',
                respuesta: 'El Gano Rico Latte es una excelente opción de café saludable debido a su delicioso sabor, ingredientes naturales y los increíbles beneficios para la salud que ofrece.'
            },
        },
        cant: 'Caja x 20 sobres(15g c/u) sin azúcar',
        peso: '300 g',
        dimesion: '18,2 x 8,2 x 6,3 cm',
        beneficios: {
            uno: {
                title: 'Da energía y rejuvenece el cuerpo',
                description: 'El Gano Rico Latte proporciona un impulso de energía natural gracias a su contenido de Ganoderma Lucidum, lo que ayuda a enfrentar las actividades diarias con vitalidad renovada.',
            },
            dos: {
                title: 'Potencia el sistema inmunológico',
                description: ' El Ganoderma Lucidum presente en el Gano Rico Latte fortalece el sistema inmunológico, ayudando a tu cuerpo a defenderse de enfermedades y mantener una salud óptima.',
            },
            tres: {
                title: 'Mejora la circulación sanguínea y combate diversas enfermedades',
                description: 'Su consumo regular puede contribuir a mejorar la circulación sanguínea, lo cual puede ser beneficioso para combatir condiciones como la insuficiencia coronaria, las hemorroides y la arteriosclerosis. Además, puede ayudar a prevenir infartos y destapar arterias, promoviendo un sistema cardiovascular saludable.',
            },
            cuatro: {
                title: 'Ayuda en el tratamiento de diversas condiciones de salud',
                description: 'Ha demostrado ser eficaz en el tratamiento de varias condiciones de salud, como la ansiedad, la presión alta, la hepatitis, la bronquitis, la gripa, el insomnio y el asma. Sus propiedades anti alergénicas y antiinflamatorias pueden brindar alivio y promover una mejor calidad de vida.',
            },
            cinco: {
                title: 'Beneficios adicionales para la salud',
                description: 'Además de los beneficios mencionados anteriormente, el Gano Rico Latte ofrece una amplia gama de propiedades positivas para tu salud, como su actividad anti bacteriana, anti tumoral y antiviral. También ayuda a relajar el sistema nervioso y los músculos, lo que puede ser beneficioso para combatir la depresión, la tensión nerviosa y la neurosis.',
            },           
        },
        descLg: 'Este café premium se distingue por estar enriquecido con Ganoderma Lucidum, un hongo medicinal altamente valorado. Con una textura cremosa y sin endulzantes añadidos, es ideal para aquellos que buscan disfrutar de un café sin azúcar.',
        format: 'Alimenticio',
        type: 'Bebida',
        benefits: {
            one: 'Salud',
            two: 'Energía',
        },
        marca: 'Gano Excel',
        bonus: '',
        ingredients: {
            text: 'Granulado de café, Ganoderma Lucidum.',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° NSA-0010760-2021',
    },
    // Shampoo
    {
        id: 'shampoo',
        imgURL: shampoo,
        imgAlt: 'shampoo-img',
        name: "Shampo",
        price: "69.999",
        priceDesc:"99.999",
        desc: {
            text: "Restaura el cabello con los extraordinarios componentes naturales y medicinales del extracto de Ganoderma Lucidum",

            questionOne: {
                id: 1,
                pregunta: '¿Qué es el Shampoo P&B?',
                respuesta: 'El Shampoo P&B de Gano Excel es un producto para el cuidado del cabello enriquecido con extracto de Ganoderma Lucidum, un hongo medicinal conocido por sus propiedades restauradoras y nutritivas.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve el Shampoo P&B?',
                respuesta: 'El Shampoo P&B de Gano Excel está diseñado para proporcionar una solución efectiva para problemas comunes del cuero cabelludo, como la caspa persistente. Además, ayuda a prevenir la caída del cabello, promueve el crecimiento saludable del cabello y mejora el estado del cabello dañado, dejando el cabello limpio, nutrido y fortalecido.'
            },
        },
        cant: '300ml',
        peso: '300 g',
        dimesion: '	4,9 × 4,9 × 20,3 cm',
        beneficios: {
            uno: {
                title: 'Elimina la caspa persistente',
                description: 'La fórmula enriquecida con Ganoderma Lucidum ayuda a eliminar la caspa y el picor del cuero cabelludo, proporcionando alivio y una sensación de limpieza.',
            },
            dos: {
                title: 'Promueve el crecimiento saludable del cabello',
                description: 'Los componentes naturales y medicinales del extracto de Ganoderma Lucidum estimulan los folículos pilosos, promoviendo un crecimiento saludable del cabello.',
            },
            tres: {
                title: 'Fortalece y nutre el cabello',
                description: 'El shampoo P&B de Gano Excel fortalece y nutre el cabello desde la raíz hasta las puntas, mejorando su textura y brillo.',
            },
            cuatro: {
                title: 'Protege contra el daño:',
                description: 'Protege el cabello de los daños ambientales y el estrés diario, dejándolo más resistente y menos propenso a la rotura.',
            },
            cinco: {
                title: 'Suaviza y revitaliza: ',
                description: 'Deja el cabello suave, sedoso y revitalizado, proporcionando una apariencia saludable y radiante.',
            },
        },
        descLg: 'Gracias a las micropartículas de Ganoderma Lucidum que aporta altas cantidades de nutrientes y antioxidantes se obtiene la regeneración capilar evidentes en hidratación, brillo y suavidad.',
        format: 'Cosmetico',
        type: 'Belleza',
        benefits: {
            one: 'Fortalece',
            two: 'Protege',
        },
        marca: 'Gano Excel',
        bonus: 'Briilo',
        ingredients: {
            text: 'Ganoderma Lucidum, agentes limpiadores suaves, acondicionadores, y otros componentes formulados para limpiar, nutrir y fortalecer el cabello.',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° NSOC07407-21CO',

    },
    // Gano fresh
    {
        id: 'ganofresh',
        imgURL: ganofresh,
        imgAlt: 'ganofresh-img',
        name: "Gano Fresh",
        price: "69.999",
        priceDesc:"89.999",
        desc: {
            text: "Disfruta de una brillante sonrisa y encías sanas con nuestra refrescante y no abrasiva pasta dental.",
            questionOne: {
                id: 1,
                pregunta: '¿Qué es gano fresh toothpaste?',
                respuesta: 'Gano Fresh es una pasta dental libre de flúor, completamente natural y enriquecida con Ganoderma Lucidum, una combinación única de ingredientes que ofrece cuidado dental suave y eficaz.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve gano fresh toothpaste?',
                respuesta: 'Gano Fresh previene las caries, la placa dental y el sarro, fortalece las encías y el esmalte dental, trata los dientes sensibles y previene el sangrado y otras enfermedades de las encías. Además, tiene propiedades antivirales y antibacterianas.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Por qué elegir Gano Fresh para tu cuidado dental?',
                respuesta: 'Gano Fresh está elaborado con ingredientes de alta calidad, incluido el Ganoderma Lucidum, que proporciona más de 200 oligoelementos para una nutrición dental completa. Además, es suave y delicado para el esmalte de los dientes y las encías, y puede usarse tópicamente para diversas afecciones bucales y de la piel.'
            },
            questionCuatro: {
                id: 4,
                pregunta: '¿Cuáles son los beneficios de usar Gano Fresh?',
                respuesta: ' Los beneficios de usar Gano Fresh incluyen la prevención de caries, placa dental y sarro, fortalecimiento de las encías y el esmalte dental, tratamiento de dientes sensibles, prevención de enfermedades de las encías y propiedades antivirales y antibacterianas.'
            },
        },
        cant: '150g',
        peso: '150g',
        dimesion: '20,2 × 5,2 × 3,8 cm',
        beneficios: {
            uno: {
                title: 'Previene las caries',
                description: 'Gano Fresh ofrece una protección efectiva contra la formación de caries, gracias a su fórmula enriquecida con Ganoderma Lucidum y otros ingredientes naturales que combaten los ácidos dañinos y fortalecen el esmalte dental.',
            },
            dos: {
                title: 'Previene la placa dental',
                description: 'Al utilizar Gano Fresh regularmente, puedes mantener la placa dental bajo control, ya que su formulación ayuda a eliminar las bacterias y los residuos de alimentos que pueden provocar la acumulación de placa en los dientes.',
            },
            tres: {
                title: 'Previene el sarro',
                description: 'La acción preventiva de Gano Fresh también se extiende al sarro, evitando su formación y ayudando a mantener una sonrisa más limpia y saludable a lo largo del tiempo.',
            },
            cuatro: {
                title: 'Fortalece las encías y el esmalte dental',
                description: 'Con su combinación de ingredientes naturales, Gano Fresh fortalece las encías y el esmalte dental, proporcionando una protección adicional contra problemas como la sensibilidad dental y el sangrado de las encías.',
            },
            cinco: {
                title: 'Trata los dientes sensibles',
                description: ' Además de prevenir problemas dentales comunes, Gano Fresh también es efectivo para tratar la sensibilidad dental, brindando alivio a quienes experimentan molestias al consumir alimentos o bebidas frías o calientes.',
            },
        },
        descLg: 'Pasta dental libre de flúor, completamente natural y enriquecida con Ganoderma Lucidum. Es suave y delicada para el esmalte de los dientes y las encías; ya que está basada en los nutrientes del Ganoderma Lucidum con más de 200 oligoelementos. Gano fresh es capaz de llevar todo tipo de buena nutrición a tus dientes y encías.',
        format: 'Cosmetico',
        type: 'Belleza',
        benefits: {
            one: 'Salud',
            two: 'Energía',
        },
        marca: 'Gano Excel',
        bonus: '',
        ingredients: {
            text: 'Sorbitol, Glicerina, Silicio en polvo, Agua purificada, Lauril sarcosinato de sodio, Saborizante de menta, Goma xantana, Lauril sulfato de sodio, Sacarina sódica, Extracto de Ganoderma Lucidum, Metilparabeno, Azul brillante, Amarillo quinolina.',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° NSOC58855-14CO',

    },
    // Mocharico
    {
        id: 'mocharico',
        imgURL: mocharico,
        imgAlt: 'mocharico-img',
        name: "Mocha Rico",
        price: "109.999",
        priceDesc:"130.000",
        desc: {
            text: "Mocha Rico, elaborada con una mezcla de café tostado y cacao de primera calidad, esta popular bebida de café baja suave",
            questionOne: {
                id: 1,
                pregunta: '¿Qué es Mocha Rico?',
                respuesta: 'Gano Mocha Rico es una bebida de café única que combina el delicioso sabor del mejor moca con los beneficios para la salud del extracto de Ganoderma Lucidum. Se diferencia por su aroma y sabor distintivo, así como por su contenido de antioxidantes y propiedades para fortalecer el sistema inmunológico.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve el Mocha Rico?',
                respuesta: 'Gano Mocha Rico sirve para proporcionar una experiencia de café única y deliciosa, al tiempo que ofrece una serie de beneficios para la salud gracias al extracto de Ganoderma Lucidum. Este café ayuda a combatir diversos trastornos metabólicos, como el colesterol y la gastritis, así como a regular el funcionamiento de órganos vitales como el hígado y los riñones. Además, contribuye a prevenir la diabetes, controlar la hipertensión y promover una salud cardiovascular óptima. En resumen, Gano Mocha Rico no solo deleita el paladar, sino que también apoya la salud general y el bienestar del cuerpo.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Por qué debería elegir Gano Mocha Rico como mi café de elección?',
                respuesta: 'Gano Mocha Rico ofrece una experiencia de café única y sabrosa, respaldada por los beneficios adicionales del Ganoderma Lucidum. Además, garantiza la satisfacción del cliente, se produce éticamente y se puede disfrutar fácilmente en casa o en la oficina.'
            },
        },
        cant: 'Caja x 20 sobres',
        peso: '350 g',
        dimesion: '18,2 x 8,2 x 6,3 cm',
        beneficios: {
            uno: {
                title: 'Combate los trastornos metabólicos',
                description: 'Gano Mocha Rico ayuda a combatir problemas como el colesterol, la gastritis y las úlceras estomacales gracias a su contenido de Ganoderma Lucidum.',
            },
            dos: {
                title: 'Regula el funcionamiento de órganos vitales',
                description: 'Este café contribuye a regular el funcionamiento del hígado y los riñones, previniendo condiciones como la hepatitis, la cirrosis y las infecciones urinarias.',
            },
            tres: {
                title: 'Ayuda en el control de la diabetes',
                description: 'Gano Mocha Rico actúa de manera similar a la insulina, reduciendo los niveles de glucosa en sangre y mejorando la respuesta autoinmune en la diabetes mellitus tipo 1.',
            },
            cuatro: {
                title: 'Promueve la salud cardiovascular',
                description: 'Gracias a su capacidad para prevenir infartos, arritmias y regular la hipertensión, Gano Mocha Rico contribuye a mantener un corazón sano y fuerte.',
            },
            cinco: {
                title: 'Ofrece una experiencia de café satisfactoria',
                description: 'Además de sus beneficios para la salud, Gano Mocha Rico brinda una experiencia de café única y sabrosa, con un aroma inconfundible y un sabor profundo que deleitará los sentidos.',
            },
        },
        descLg: 'Nuestro café combina el aroma inconfundible del mejor moca con los beneficios del ganoderma, creando una fusión perfecta que deleitará tus sentidos.',
        format: 'Cosmetico',
        type: 'Belleza',
        benefits: {
            one: 'Regula',
            two: 'Combate',
        },
        marca: 'Gano Excel',
        bonus: '',
        ingredients: {
            text: 'Granos de café tostado, cacao de primera calidad, extracto de Ganoderma Lucidum.',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° NSA-0010760-2021',

    },
    // Gano transparenet
    {
        id: 'ganotransparent',
        imgURL: ganotransparent,
        imgAlt: 'ganotransparent-img',
        name: "Gano Transparent",
        price: "69.999",
        priceDesc:"99.999",
        desc: {
            text: "Jabón elaborado con extracto de Ganoderma Lucidum, aloe vera y papaya",
            questionOne: {
                id: 1,
                pregunta: '¿Qué es gano transparent?',
                respuesta: 'El Jabón Transparente Gano es un jabón especialmente formulado para el cuidado de la piel, que combina ingredientes naturales de alta calidad como Aloe Vera, papaya y extracto de Ganoderma Lucidum.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve gano transparent?',
                respuesta: 'El Jabón Transparente Gano proporciona una hidratación profunda y efectos rejuvenecedores en la piel. Ayuda a limpiar suavemente la piel, equilibrar el pH, prevenir arrugas, y actuar contra el acné y la psoriasis, siendo adecuado para todo tipo de pieles, incluso la de bebés.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Quieres una piel radiante y saludable? ',
                respuesta: 'Descubre cómo el Jabón Transparente Gano puede transformar tu rutina de cuidado de la piel con sus beneficios únicos y naturales.'
            },
        },
        cant: '100 g',
        peso: '100 g',
        dimesion: '8,1 × 7,2 × 3,7 cm',
        beneficios: {
            uno: {
                title: 'Rejuvenecimiento de la piel previniendo arrugas',
                description: 'El Jabón Transparente Gano ayuda a prevenir la aparición de arrugas y líneas finas gracias a su fórmula enriquecida con extracto de Ganoderma Lucidum y papaya, que estimulan el metabolismo celular y promueven la regeneración de la piel.',
            },
            dos: {
                title: 'Hidrata, humecta, aclara y limpia profundamente',
                description: 'Con ingredientes naturales como el Aloe Vera y la papaya, este jabón proporciona una hidratación profunda, limpia la piel delicadamente y ayuda a aclararla, dejándola suave y radiante.',
            },
            tres: {
                title: 'Antioxidante y aclarante',
                description: 'El Jabón Transparente Gano tiene una poderosa acción antioxidante que protege la piel contra el daño de los radicales libres, mientras que los carotenos de la papaya ayudan a reducir las manchas y mejorar el tono de la piel.',
            },
            cuatro: {
                title: 'Contiene vitamina E y equilibra el pH',
                description: 'Enriquecido con vitamina E, este jabón fortalece la piel y equilibra su pH, proporcionando una barrera protectora natural contra los agresores ambientales y promoviendo una piel saludable y radiante.',
            },
            cinco: {
                title: 'Adecuado para todo tipo de pieles',
                description: 'Gracias a su fórmula suave y natural, el Jabón Transparente Gano es adecuado para todo tipo de pieles, incluso la más sensible, incluyendo la piel de bebés. Con su acción efectiva contra el acné y la psoriasis, es el aliado perfecto para mantener una piel limpia y saludable.',
            },
        },
        descLg: 'El germanio orgánico presente en el extracto del Ganoderma oxigena las células de la piel mientras que fomenta y estimula su metabolismo. El extracto de papaya contiene carotenos que ayudan a reducir las líneas finas y arrugas',
        format: 'Cosmetico',
        type: 'Belleza',
        benefits: {
            one: 'Salud',
            two: 'Energía',
        },
        marca: 'Gano Excel',
        bonus: 'Aloe Vera y Papaya',
        ingredients: {
            text: 'Ácido esteárico, Agua, Ácido láurico, Hidróxido de sodio, Ácido mirístico, Sorbitol, Papaína, Sacarosa, Glicerina, Extracto de hoja de aloe barbadensis, Treitanolamina, Extracto de Ganoderma Lucidum, Fragancias (acacia), Contiene trietanolamina 1%, Contiene ingredientes naturales',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° NSOC68947-15CO',

    },
    // Exfoliante
    {
        id: 'exfoliante',
        imgURL: exfoliante,
        imgAlt: 'exfoliante-img',
        name: "Exfoliante",
        price: "69.999",
        priceDesc:"99.999",
        desc: {
            text: "Exfoliante para la ducha con extracto de Ganoderma Lucidum.",
            questionOne: {
                id: 1,
                pregunta: '¿Qué es el Exfoliante Corporal Gano Excel?',
                respuesta: 'El Exfoliante Corporal Gano Excel es un producto enriquecido con extracto de Ganoderma Lucidum diseñado para limpiar, tratar, hidratar y embellecer la piel, eliminando células muertas, estimulando la circulación y proporcionando hidratación y nutrición.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve el Exfoliante Corporal Gano Excel?',
                respuesta: 'El Exfoliante Corporal Gano Excel actúa profundamente en la piel, eliminando obstrucciones, estimulando la regeneración celular, protegiendo el sistema inmune de la piel, despigmentando, humectando y proporcionando una piel sana, joven y luminosa.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Quieres una piel suave, radiante y saludable? ',
                respuesta: 'Descubre cómo el Exfoliante Corporal Gano Excel puede ayudarte a lograrlo con su fórmula enriquecida con extracto de Ganoderma Lucidum y sus múltiples beneficios para la piel.'
            },
        },
        cant: '300mL',
        peso: '300g',
        dimesion: '	4,9 × 4,9 × 20,3 cm',
        beneficios: {
            uno: {
                title: 'Limpieza profunda y regeneración celular',
                description: 'El Exfoliante Corporal Gano Excel actúa más allá de la capa superficial de la piel, penetrando profundamente para eliminar obstrucciones y estimular la regeneración celular, suavizando la textura y apariencia de la piel para una apariencia más saludable y radiante.',
            },
            dos: {
                title: 'Protección del sistema inmune de la piel',
                description: 'Gracias a su fórmula enriquecida con extracto de Ganoderma Lucidum, este exfoliante protege el sistema inmune de la piel, fortaleciendo sus defensas naturales y proporcionando una barrera contra agresores ambientales.',
            },
            tres: {
                title: 'Despigmentación y humectación',
                description: 'El Exfoliante Corporal Gano Excel ayuda a despigmentar la piel, eliminando manchas y proporcionando una hidratación profunda que deja la piel suave y luminosa, promoviendo una apariencia más uniforme y juvenil.',
            },
            cuatro: {
                title: 'Estimulación de la regeneración y protección celular',
                description: 'Con su acción estimulante, este exfoliante activa la regeneración y protección celular, promoviendo una piel sana, joven y luminosa a medida que elimina células muertas y revitaliza la piel.',
            },
            cinco: {
                title: 'Remoción efectiva de células muertas',
                description: 'El Exfoliante Corporal Gano Excel proporciona una exfoliación suave pero efectiva, eliminando las células muertas de la piel y dejándola fresca, renovada y lista para absorber los nutrientes de los productos de cuidado posterior.',
            },
        },
        descLg: 'Gracias a las micropartículas de Ganoderma Lucidum que aporta altas cantidades de nutrientes y antioxidantes se obtiene la regeneración capilar evidentes en hidratación, brillo y suavidad.',
        format: 'Cosmetico',
        type: 'Belleza',
        benefits: {
            one: 'Limpieza',
            two: 'Protección',
        },
        marca: 'Gano Excel',
        bonus: 'Piel y Brillo',
        ingredients: {
            text: 'Agua, Lauril sulfato de sodio, acetato de celulosa, Acrilatos/polímero cruzado de acrilato de alquilo C10-30, Fragancia, Cocamidopropil betaína, Hidróxido de sodio, Glicerina, Extracto de Ganoderma Lucidum, Polvo de semilla de prunus armeniaca (albaricoque), Edta tetrasódico, Metilcloroisotiazolinona.',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° NSOC96487-19CO',

    },
    // Acondicionador
    {
        id: 'acondicionador',
        imgURL: acondicionador,
        imgAlt: 'acondicionador-img',
        name: "Acondiconador",
        price: "69.999",
        priceDesc:"99.999",
        desc: {
            text: "Restaura el cabello con los extraordinarios componentes naturales y medicinales del extracto de Ganoderma Lucidum",
            questionOne: {
                id: 1,
                pregunta: '¿Qué es el Acondicionador Piel & Brillo de Gano Excel?',
                respuesta: 'El Acondicionador Piel & Brillo de Gano Excel es un producto diseñado para brindar resultados impresionantes y una experiencia capilar única. Está formulado con ingredientes naturales de alta calidad, incluido el Ganoderma Lucidum, para hidratar, fortalecer y embellecer el cabello.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Cuáles son los beneficios y usos principales de este acondicionador?',
                respuesta: 'Este acondicionador ofrece varios beneficios, como dejar el cabello suave y sedoso desde la primera aplicación, proporcionar un brillo radiante, fortalecer y reparar el cabello dañado, y combatir la caspa mientras mantiene un cuero cabelludo sano. Además, puede utilizarse como tratamiento a largo plazo para nutrir y revitalizar el cabello.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Cómo puede complementarse este acondicionador con otros productos de cuidado capilar?',
                respuesta: 'Este acondicionador puede complementarse con el champú Piel & Brillo de Gano Excel para obtener resultados excepcionales. La combinación de ambos potencia sus efectos, brindando una limpieza profunda, hidratación intensiva y fortalecimiento del cabello. Juntos, ofrecen una rutina de cuidado capilar completa y efectiva.'
            },
        },
        cant: '300mL',
        peso: '300g',
        dimesion: '	4,9 × 4,9 × 20,3 cm',
        beneficios: {
            uno: {
                title: 'Cabello suave y sedoso desde la primera aplicación',
                description: 'Gracias a su fórmula especializada y Ganoderma Lucidum, nuestro acondicionador hidrata profundamente el cabello, dejándolo instantáneamente suave y sedoso desde el primer uso. Con cada aplicación, sentirás cómo tu cabello se transforma, volviéndose más manejable y brillante.',
            },
            dos: {
                title: 'Tratamiento a largo plazo para nutrir y revitalizar el cabello',
                description: 'Más que un simple acondicionador, nuestro producto puede utilizarse como un tratamiento a largo plazo para nutrir y revitalizar el cabello desde la raíz hasta las puntas. Con ingredientes nutritivos y fortalecedores, como el Ganoderma Lucidum, tu cabello recibirá la atención que merece, restaurando su vitalidad y resistencia con el tiempo.',
            },
            tres: {
                title: 'Brillo radiante que llama la atención',
                description: 'La salud del cuero cabelludo es fundamental para un cabello hermoso. Nuestro acondicionador no solo embellece el cabello, sino que también combate la caspa y mantiene un cuero cabelludo sano y equilibrado.',
            },
        },
        descLg: 'Descubre los impresionantes beneficios de nuestro Acondicionador Piel & Brillo. Obtén un cabello suave, sedoso y radiante, fortalecido desde la raíz hasta las puntas. Completa tu rutina capilar con este poderoso complemento del shampoo GanoExcel y experimenta una transformación capilar única.',
        format: 'Cosmetico',
        type: 'Belleza',
        benefits: {
            one: 'Brillo',
            two: 'Tratamiento',
        },
        marca: 'Gano Excel',
        bonus: 'Piel y Brillo',
        ingredients: {
            text: 'Ganoderma Lucidum, Agentes limpiadores suaves, Acondicionadores, Otros componentes formulados para limpiar, Nutrir y fortalecer el cabello',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° NSOC07389-21CO',

    },
    // Cordy-gold
    {
        id: 'cordy-gol',
        imgURL: cordygold,
        imgAlt: 'cordy-img',
        name: "Cordy Gold",
        price: "319.999",
        priceDesc:"369.999",
        desc: {
            text: "Exclusivo suplemento que mezcla los altos beneficios del Cordyceps.",
            questionOne: {
                id: 1,
                pregunta: '¿Qué es Cordy Gold y qué lo hace especial?',
                respuesta: 'Cordy Gold es un exclusivo suplemento que combina los beneficios del Cordyceps, un hongo conocido por sus propiedades medicinales. Contiene una variedad de nutrientes como ácido cordicepico, cordicepina, nucleósidos, polisacáridos, proteínas, esteroles, vitaminas y minerales, que ofrecen una amplia gama de beneficios para la salud.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve Cordy Gold y cuáles son sus principales beneficios?',
                respuesta: 'Cordy Gold sirve para fortalecer el sistema inmune, actuar como un potente afrodisíaco, mejorar la circulación sanguínea, aumentar el placer sexual y los niveles de testosterona, proteger los riñones y regular el cortisol, entre otros beneficios. También ayuda a mejorar la resistencia y la energía, reduce la fatiga y mejora el estado de ánimo, protege el sistema respiratorio y previene enfermedades como la gripe, resfriados y asma.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Qué componentes beneficiosos se encuentran en las cápsulas de Cordy Gold?',
                respuesta: 'Las cápsulas de Cordy Gold están llenas de componentes beneficiosos como ácido cordicepico, cordicepina, nucleósidos, polisacáridos, proteínas, esteroles, vitaminas y minerales, que ofrecen una variedad de beneficios para la salud, incluyendo mejoras en la función respiratoria, fortalecimiento del sistema inmunológico, promoción de la salud cardiovascular y renal, entre otros.'
            },
        },
        cant: '60 cápsulas, 500mg c/u',
        peso: '30g',
        dimesion: '5,1 × 5,1 × 9,7 cm',
        beneficios: {
            uno: {
                title: 'Fortalecimiento del sistema inmune',
                description: 'Cordy Gold contiene nutrientes que ayudan a fortalecer el sistema inmunológico, lo que contribuye a una mejor capacidad del cuerpo para combatir enfermedades y mantenerse saludable frente a amenazas externas como virus y bacterias.',
            },
            dos: {
                title: 'Mejora del rendimiento sexual',
                description: 'Este suplemento actúa como un potente afrodisíaco, aumentando el placer sexual y los niveles de testosterona tanto en hombres como en mujeres. Además, estimula la circulación sanguínea en los genitales, promoviendo una vida sexual más satisfactoria.',
            },
            tres: {
                title: 'Protección de los riñones y regulación del cortisol',
                description: 'Cordy Gold protege la salud renal y ayuda a regular los niveles de cortisol, la hormona del estrés. Esto puede ser especialmente beneficioso para personas con altos niveles de estrés y para aquellos que desean mantener la salud de sus riñones a largo plazo.',
            },
            cuatro: {
                title: 'Aumento de la energía y reducción de la fatiga:',
                description: 'Gracias a su composición rica en nutrientes, Cordy Gold proporciona un impulso de energía natural, ayudando a combatir la fatiga y mejorar el estado de ánimo. Esto permite a las personas sentirse más activas y vigorosas a lo largo del día.',
            },
            cinco: {
                title: 'Protección antioxidante y antiinflamatoria',
                description: 'Cordy Gold actúa como un potente antioxidante, protegiendo las células del cuerpo del daño causado por los radicales libres. Además, posee propiedades antiinflamatorias que pueden ayudar a reducir la inflamación en el cuerpo y promover una mejor salud en general.',
            },
        },
        descLg: 'Exclusivo suplemento que mezcla los altos beneficios del Cordyceps. El micelio de Cordyceps contiene como principio principal activa la adenosina, además de vitaminas naturales como B1, B2 y E, Oligoelementos como zinc, manganeso, selenio, cromo, fósfato, potasio, aminoácidos, etc.',
        format: 'Cápsulas',
        type: 'Suplemento',
        benefits: {
            one: 'Protección',
            two: 'Fortalecimiento',
        },
        marca: 'Gano Excel',
        bonus: 'Suplemento',
        ingredients: {
            text: 'Extracto de Cordyceps Sinensis 500MG',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° SD2017-0004056',

    },
    // Excellium
    {
        id: 'excellium',
        imgURL: excellium,
        imgAlt: 'excellium-img',
        name: "Excellium",
        price: "259.999",
        priceDesc:"299.999",
        desc: {
            text: "Exclusivo suplemento, producto del micelio de Ganoderma Lucidum, que se extrae del hongo joven.",
            questionOne: {
                id: 1,
                pregunta: 'Qué es el suplemento de cápsulas de excellium?',
                respuesta: 'El suplemento de micelio de Ganoderma Lucidum es un producto derivado del hongo joven del Ganoderma Lucidum, también conocido como Reishi. Se extrae con el objetivo de aprovechar sus propiedades beneficiosas para la salud.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve el suplemento de excellium de Ganoderma Lucidum?',
                respuesta: 'Este suplemento sirve para una variedad de propósitos, incluido el apoyo al buen funcionamiento del corazón y la circulación, la mejora del rendimiento cerebral, la prevención del envejecimiento prematuro, el tratamiento de afecciones de la piel como manchas y acné, la prevención de la impotencia sexual, la protección de la visión y el cabello, la regulación del sistema neurológico, la mejora del estado de ánimo y la reducción del insomnio, entre otros beneficios.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Por qué deberías comprar el suplemento de excellium de Ganoderma Lucidum?',
                respuesta: 'Este suplemento es una opción valiosa para aquellos que buscan mejorar su salud de manera natural y holística. Al estar rico en Germanio Orgánico, vitaminas, minerales y enzimas, ofrece una amplia gama de beneficios para varios sistemas del cuerpo. Además, su capacidad para combatir la inflamación y promover el bienestar general lo convierte en una opción atractiva para aquellos que buscan un enfoque preventivo para su salud.'
            },
        },
        cant: 'Frasco x 90 cápsulas',
        peso: '39g',
        dimesion: '5,1 × 5,1 × 9,7 cm',
        beneficios: {
            uno: {
                title: 'Apoyo cardiovascular y circulatorio óptimo:',
                description: 'Este suplemento contiene altos niveles de Germanio Orgánico, lo que favorece el buen funcionamiento del corazón y la circulación sanguínea, promoviendo así una salud cardiovascular óptima.',
            },
            dos: {
                title: 'Propiedades anti-envejecimiento y regenerativas de la piel',
                description: 'Contribuye a prevenir el envejecimiento prematuro y restaura los tejidos de la piel, tratando condiciones como manchas, acné, dermatitis y vitiligo.',
            },
            tres: {
                title: 'Mejora del bienestar mental y emocional',
                description: 'Además de sus beneficios físicos, este suplemento puede mejorar el estado de ánimo, reducir la depresión y el insomnio, promoviendo así un mayor bienestar mental y emocional.',
            },
            cuatro: {
                title: 'Soporte para sistemas corporales clave',
                description: 'Ayuda a mantener el buen funcionamiento de los sistemas circulatorio, respiratorio y nervioso, promoviendo así una salud integral.',
            },
            cinco: {
                title: 'Suministro de nutrientes esenciales:',
                description: 'Con un alto contenido de vitaminas, minerales y enzimas, este suplemento proporciona los nutrientes necesarios para mantener el cuerpo sano y funcionando correctamente.',
            },
        },
        descLg: 'Las Cápsulas de Excellium, desarrolladas por Gano Excel, son una poderosa fórmula a base de Ganoderma Lucidum Mycelium, la planta joven cosechada en su etapa óptima de crecimiento, con tan solo tres semanas de vida. Estas cápsulas contienen un rico espectro de ingredientes, como vitaminas, minerales, enzimas, carbohidratos y proteínas, que trabajan en sinergia para brindarte beneficios impresionantes para tu salud cerebral y vitalidad general.',
        format: 'Cápsulas',
        type: 'Suplemento',
        benefits: {
            one: 'Soporte',
            two: 'Bienestar',
        },
        marca: 'Gano Excel',
        bonus: 'Mycelium',
        ingredients: {
            text: 'Extracto de Ganoderma Lucidum Mycelium 425MG 1 cápsula (425MG) es igual a 4.25 sobres de Gano Café',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° SD2014-0003368',

    },
    // Ganoderma
    {
        id: 'ganoderma',
        imgURL: ganoderma,
        imgAlt: 'ganoderma-img',
        name: "Ganoderma",
        price: "259.999",
        priceDesc:"299.999",
        desc: {
            text: "El hongo rojo es identificado por su nombre científico de Ganoderma Lucidum.",
            questionOne: {
                id: 1,
                pregunta: '¿Qué es el Ganoderma Lucidum y por qué es reconocido mundialmente?',
                respuesta: 'El Ganoderma Lucidum, también conocido como hongo rojo, es un hongo medicinal ampliamente reconocido por sus propiedades beneficiosas para la salud. Su nombre científico es Ganoderma Lucidum, y ha ganado reputación mundial como uno de los nutrientes más sinérgicos disponibles.'
            },
            questionDos: {
                id: 2,
                pregunta: '¿Para qué sirve el Ganoderma Lucidum y cuáles son sus beneficios para la salud?',
                respuesta: 'El Ganoderma Lucidum tiene una amplia gama de beneficios para la salud, incluyendo combatir la bacteria Helicobacter pylori para prevenir la gastritis, modular las defensas del cuerpo, rejuvenecer y tener actividad anticancerígena, regular el sistema inmunológico, tratar enfermedades autoinmunes como lupus y artritis, entre otros.'
            },
            questionTres: {
                id: 3,
                pregunta: '¿Por qué deberías considerar comprar productos con Ganoderma Lucidum?',
                respuesta: 'Comprar productos que contienen Ganoderma Lucidum puede ser beneficioso debido a su capacidad para promover la salud y prevenir una variedad de enfermedades. Desde combatir bacterias y virus hasta regular el azúcar en la sangre y proteger el hígado, el Ganoderma Lucidum ofrece una amplia gama de beneficios para mejorar el bienestar general.',
            },
        },
        cant: 'Frasco x 90 cápsulas',
        peso: '90g',
        dimesion: '5,1 × 5,1 × 9,7 cm',
        beneficios: {
            uno: {
                title: 'Combatir la bacteria y prevenir la gastritis',
                description: 'El Ganoderma Lucidum es conocido por su capacidad para combatir la bacteria Helicobacter pylori, ayudando así a prevenir la gastritis y otras enfermedades gastrointestinales. Su acción antibacteriana puede ayudar a mantener un sistema digestivo saludable y prevenir molestias estomacales.',
            },
            dos: {
                title: 'Modular las defensas del cuerpo y fortalecer el sistema inmunológico',
                description: 'Este hongo tiene la capacidad de modular las defensas del cuerpo, fortaleciendo así el sistema inmunológico y ayudando a combatir infecciones y enfermedades. Al fortalecer las defensas naturales del cuerpo, el Ganoderma Lucidum puede ayudar a mantener la salud y prevenir enfermedades.',
            },
            tres: {
                title: 'Rejuvenecer y prevenir el cáncer',
                description: 'Con su actividad anticancerígena, el Ganoderma Lucidum puede ayudar a rejuvenecer las células del cuerpo y prevenir el desarrollo y crecimiento de células cancerosas. Su capacidad para regular el sistema inmunológico también puede contribuir a este efecto preventivo contra el cáncer.',
            },
            cuatro: {
                title: 'Regular los niveles de azúcar en la sangre y prevenir complicaciones diabéticas',
                description: 'Este hongo tiene la capacidad de regular los niveles de azúcar en la sangre, lo que puede ser beneficioso para las personas con diabetes. Al normalizar el metabolismo y prevenir complicaciones renales asociadas con la diabetes, el Ganoderma Lucidum puede ayudar a mejorar la calidad de vida de los pacientes diabéticos.',
            },
            cinco: {
                title: 'Controlar la presión arterial y prevenir enfermedades cardiovasculares',
                description: 'El Ganoderma Lucidum puede ayudar a regular la presión arterial, lo que es crucial para prevenir enfermedades cardiovasculares como la hipertensión y los accidentes cerebrovasculares. Su acción hepatoprotectora y antiinflamatoria también puede contribuir a la salud cardiovascular al proteger el hígado y reducir la inflamación en el cuerpo.',
            },
        },
        descLg: 'Descubre el poder de la naturaleza encapsulado en nuestras cápsulas de Ganoderma Lucidum. Extraído del hongo conocido como ‘el rey de las hierbas’, el Ganoderma Lucidum ha sido valorado durante siglos por sus propiedades potenciadoras de la salud.',
        format: 'Cápsulas',
        type: 'Suplemento',
        benefits: {
            one: 'Rejuvenecer',
            two: 'Prevenir',
        },
        marca: 'Gano Excel',
        bonus: '',
        ingredients: {
            text: 'Extracto de Ganoderma Lucidum 275MG 1 cápsula (275MG) es igual a 2.5 sobres de Gano Café.',
        },
        fabricante: 'Gano excel internacional',
        priceCurrent: 'COP',
        invima: 'N° SD2014-0003428',

    },
];


export const pasosGanoderma = [

    {
        imgURL: mushroom,
        imgAlt: 'description img',
        title: 'El Rey de los Antioxidantes',
        description: `Se conoce hace más de 4 mil años por su positivo impacto en la salud del ser humano. Ha sido catalogado como el Rey de los Antioxidantes.`

    },
    {
        imgURL: mushroom,
        imgAlt: 'description img',
        title: 'El Híbrido Óptimo',
        description: `Es un híbrido de las 6 variedades de Ganoderma Lucidum con mayor cantidad de propiedades para la salud.`

    },
    {
        imgURL: mushroom,
        imgAlt: 'description img',
        title: 'Versatilidad Nutricional',
        description: `El extracto es soluble en agua, aceite y alcohol, lo que le permite ser
        fácilmente asimilado por cada célula de tu cuerpo; garantizando mayor absorción de nutrientes.`

    },
    {
        imgURL: mushroom,
        imgAlt: 'description img',
        title: 'Equilibrio Integral',
        description: `Este producto es un adaptógeno sin contraindicaciones, mantiene sus propiedades con el tiempo y regula el funcionamiento celular. No genera adicción y no es un fármaco, ofreciendo una opción segura y equilibrada para el bienestar.`

    },
    {
        imgURL: mushroom,
        imgAlt: 'description img',
        title: 'Renovación Completa',
        description: `Limpia, Desintoxica, Nutre, Regula y Regenera.`

    }
];


export const footerLinks = [
    {
        imgIcon: house,
        text: 'Bogotá, Colombia'
    },
    {
        imgIcon: email,
        text: 'ganosaludeco@gmail.com'
    },
    {
        imgIcon: phone,
        text: '+57 3202494811'
    },

];

export const contactIcons = [
    {
        icon: planet,
        text: 'Colombia'
    },
    {
        icon: ubi,
        text: 'Bogotá, Colombia'
    },
    {
        icon: phoneContact,
        text: '+57 3202494811'
    },
    {
        icon: tax,
        text: '👉: Felipe Romero'
    },
]


// falta agregar iconos de redes en images e importarlos en el index.js

export const socialMedia = [

    { href: 'https://www.facebook.com/profile.php?id=61556052761740&sk=about', src: facebook, alt: "facebook logo" },
    { href: 'https://www.tiktok.com/foryou', src: tiktok, alt: "tiktok logo" },
    { href: 'https://www.instagram.com/vitaglow777/', src: instagram, alt: "instagram logo" },
];


