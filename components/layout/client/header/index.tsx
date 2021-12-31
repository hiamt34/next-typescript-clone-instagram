import style from './style.module.sass'
import Image from 'next/image'
import logo from '../../../../public/layout/logo/logo.png'
import BoxSearch from './boxSearch'
import { Activity, Heart, Home, Mes, HomeActive } from './icon'
import { useState } from 'react'
import Link from 'next/link'
import { Setting, User, Save, Change } from '../../../common'
export const Header = () => {
    const [setting, setSetting] = useState<boolean>(false)
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.logo}>
                        <Link href={{ pathname: '/' }} passHref><a><Image src={logo} alt='TTH-BLOG' /></a></Link>
                    </div>
                </div>
                <div className={style.conten}>
                    <input type="text" placeholder="Tìm kiếm" />
                    <div className={style.delete}></div>
                    <BoxSearch />
                </div>
                <div className={style.right}>
                    <div className={style.icons}>
                        <div className={style.icon}>
                            <Link href={{ pathname: '/' }} passHref><a><Home setting={setting} /></a></Link>
                        </div>
                        <div className={style.icon}>
                            <Link href={{ pathname: '/inbox' }} passHref><a><Mes setting={setting} /></a></Link>
                        </div>
                        <div className={style.icon}>
                            <Link href={{ pathname: '/explore' }} passHref><a> <Activity setting={setting} /></a></Link>
                        </div>
                        <div className={style.icon}>
                            <a href="/accounts/activity/"><Heart /></a>
                        </div>
                        <div className={style.icon}>
                            <div className={setting ? style.overlay : style.off} onClick={() => setSetting(!setting)}></div>
                            <div className={style.image} style={setting ? { border: '1px solid' } : {}} onClick={() => setSetting(!setting)}>
                                <div className={style.img}>
                                    <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={22} height={22} />
                                </div>
                            </div>
                            <div className={style.box} style={setting ? {} : { display: 'none' }}>
                                <div className={style.x}></div>
                                <Link href={{ pathname: '/[name]', query: { name: 'username' } }} passHref>
                                    <a>
                                        <User />
                                        Trang cá nhân
                                    </a>
                                </Link>
                                <a href="#">
                                    <Save />
                                    Đã lưu
                                </a>
                                <a href="#">
                                    <Setting />
                                    Cài đặt
                                </a>
                                <a href="#">
                                    <Change />
                                    Chuyển tài khoản
                                </a>
                                <a href="#" className={style.logout}>Đăng xuất</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
