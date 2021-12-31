import Link from 'next/link'
import { useState } from 'react'
import { PhoneSlice, DownloadApp } from '../../../../layout/client'
import style from './style.module.sass'

export const FormRegister = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [username, setUserName] = useState<string>("")
    const [passwordType, setPasswordType] = useState<boolean>(true)
    return (
        <div className={style.artical}>
                <PhoneSlice />
                <div className={style.auth}>
                    <div className={style.form}>
                        <div className={style.logo}></div>
                        <button type="button" className={style.loginfb}>
                            <span className={style.logofb}></span>
                            <span>Đăng nhập băng Facebook</span>
                        </button>
                        <div className={style.or}>
                            <div className={style.hr}></div>
                            <div className={style.text}>HOẶC</div>
                        </div>
                        <div className={style.emailOrName}>
                            <input type="text" name="email" placeholder="Số điện thoại hoặc email" className={email ? style.active : ''}  onChange={e => setEmail(e.target.value)}/>
                            <span className={email ? style.active : ''}>Số điện thoại hoặc email</span>
                            <span className={email.length > 9 ? style.true : style.check}></span>
                        </div>
                        <div className={style.emailOrName}>
                            <input type="text" name="username" placeholder="Tên người dùng" className={username ? style.active : ''}  onChange={e => setUserName(e.target.value)}/>
                            <span className={username ? style.active : ''}>Tên người dùng</span>
                            <span className={username ? style.true : style.check}></span>
                        </div>
                        <div className={style.pass}>
                            <input type={passwordType ? 'password' : 'text'} name="password" placeholder="Mật khẩu" className={password ? style.active : ''} onChange={e => setPassword(e.target.value)}/>
                            <button type="button" onClick={() => setPasswordType(!passwordType)}>{passwordType ? 'Hiển thị' : 'Ẩn'}</button>
                            <span className={password ? style.active : ''}>Mật khẩu</span>
                            <span className={password.length > 5 ? style.true : style.check}></span>
                        </div>
                        <button type="button" className={ email.length > 9 && password.length > 5 && username ? style.active : style.btnLogin}>Đăng ký</button>
                        <p  className={style.node}>Bằng cách đăng ký, bạn đồng ý với <a href="">Điều khoản</a>, <a href="">Chính sách dữ liệu</a> và <a href="">Chính sách cookie</a> của chúng tôi.</p>
                    </div>
                    <div className={style.box}>
                        <p>Bạn đã có tài khoản? <Link href={{pathname:'/account/login'}}><a>Đăng nhập</a></Link></p>
                    </div>
                    <DownloadApp />
                </div>
            </div>
    )
}