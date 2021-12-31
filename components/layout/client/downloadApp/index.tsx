import style from './style.module.sass'
import Image from 'next/image'
import ImgApple from "../../../../public/client/login/apple.png"
import ImgAndroi from "../../../../public/client/login/androi.png"
export const DownloadApp = () => {
    return (
        <div className={style.app}>
            <p>Tải ứng dụng</p>
            <a href="#">
                <Image src={ImgApple} alt="TTH-BLOG" height={40} width={134} />
            </a>
            <a href="#">
                <Image src={ImgAndroi} alt="TTH-BLOG" height={40} width={134} />
            </a>
        </div>
    )
}