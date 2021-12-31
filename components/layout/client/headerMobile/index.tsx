import { Camera } from '../../../common/icon'
import style from './style.module.sass'
import Image from 'next/image'
import logo from '../../../../public/layout/logo/logo.png'
import Link from 'next/link'
import { Mes } from '../header/icon'
export const HeaderMobile = () => {
    return (
        <header className={style.header}>
            <div className={style.camera}>
                <Camera />
            </div>
            <div className={style.logo}>
                <Image src={logo} alt='TTH-BLOG' />
            </div>
            <div className={style.mes}>
                <Link href={{ pathname:'/inbox' }} passHref><a><Mes /></a></Link>
            </div>
        </header>
    )
}