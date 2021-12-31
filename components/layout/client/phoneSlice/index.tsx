import Image from 'next/image'
import style from './style.module.sass'
import img from "../../../../public/client/login/6f03eb85463c.jpg"

export const PhoneSlice = () => {
    return (
        <div className={style.slice}>
            <div className={style.imgs}>
                <Image src={img} alt="TTH-BLOG" />
            </div>
        </div>
    )
}
