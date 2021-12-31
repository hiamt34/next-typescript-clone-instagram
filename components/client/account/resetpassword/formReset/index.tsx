import Link from 'next/link'
import { useState } from 'react'
import style from './style.module.sass'
export const FormReset = () => {
    const [email, setEmail] = useState<string>("")
    return (
        <div className={style.main}>
            <div className={style.form}>
                <div className={style.logo}></div>
                <div className={style.conten}>
                    <h4>Bạn gặp sự cố khi đăng nhập?</h4>
                </div>
                <div className={style.des}>
                    Nhập email, số điện thoại hoặc tên người dùng của bạn và chúng tôi sẽ gửi cho bạn một liên kết để truy cập lại vào tài khoản.
                </div>
                <div className={style.email}>
                    <input type="text" name="email" placeholder="Email, điện thoại hoặc tên người dùng" className={email ? style.active : ''} onChange={e => setEmail(e.target.value)} />
                    <span className={email ? style.active : ''}>Email, điện thoại hoặc tên người dùng</span>
                </div>
                <div className={style.submit}>
                    <button type="button" className={email.length > 9 ? style.active : style.btn}>Gửi liên kết đăng nhập</button>

                </div>
                <div className={style.or}>
                    <div className={style.hr}></div>
                    <div className={style.text}>HOẶC</div>
                </div>
                <div className={style.register}>
                    <Link href={{ pathname:'/account/register' }}><a>Tạo tài khoản mới</a></Link>
                </div>
                <div className={style.back}>
                    <Link href={{ pathname:'/account/login' }}><a>Quay lại đăng nhập</a></Link>
                </div>
            </div>
        </div>
    )
}