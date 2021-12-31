import Link from 'next/link'
import { useState } from 'react'
import { DownloadApp, PhoneSlice } from '../../../../layout/client'
import style from './style.module.sass'
export const FormLogin = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordType, setPasswordType] = useState<boolean>(true)
    return (
        <div className={style.artical}>
                <PhoneSlice />
                <div className={style.auth}>
                    <div className={style.form}>
                        <div className={style.logo}></div>
                        <div className={style.email}>
                            <input type="text" name="email" placeholder="Số điện thoại, tên người dùng hoặc email" className={email ? style.active : ''}  onChange={e => setEmail(e.target.value)}/>
                            <span className={email ? style.active : ''}>Số điện thoại, tên người dùng hoặc email</span>
                        </div>
                        <div className={style.pass}>
                            <input type={passwordType ? 'password' : 'text'} name="password" placeholder="Mật khẩu" className={password ? style.active : ''} onChange={e => setPassword(e.target.value)}/>
                            <button type="button" onClick={() => setPasswordType(!passwordType)}>{passwordType ? 'Hiển thị' : 'Ẩn'}</button>
                            <span className={password ? style.active : ''}>Mật khẩu</span>
                        </div>
                        <button type="button" className={ email.length > 9 && password.length > 5 ? style.active : style.btnLogin}>Đăng nhập</button>
                        <div className={style.or}>
                            <div className={style.hr}></div>
                            <div className={style.text}>HOẶC</div>
                        </div>
                        <button type="button" className={style.loginfb}>
                            <span className={style.logofb}></span>
                            <span>Đăng nhập băng Facebook</span>
                        </button>
                        <Link href={{pathname:'/account/resetpassword'}}><a className={style.forgot}>Quên mật khẩu?</a></Link>
                    </div>
                    <div className={style.box}>
                        <p>Bạn chưa có tài khoản ư? <Link href={{pathname:'/account/register'}}><a>Đăng ký</a></Link></p>
                    </div>
                    <DownloadApp />
                </div>
            </div>
    )
}