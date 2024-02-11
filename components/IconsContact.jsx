import {contactIcons} from '../constants/index';
import Image from  'next/image';


const IconsContact = () => {
    
    return (
        <div className='mb-12 grid gap-2 md:grid-cols-2 lg:grid-cols-4'>
            {contactIcons.map((item) => (
                <div class="grid place-items-center gap-2">
                    <Image src={item.icon} alt="icon"/>
                    <h6 class="font-medium">{item.text}</h6>
                </div>
            ))}
        </div>
    )
}

export default IconsContact