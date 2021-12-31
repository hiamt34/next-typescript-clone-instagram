import style from './style.module.sass'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.conten}>
                <a href="">Giới thiệu</a>
                <a href="">Blog</a>
                <a href="">Việc làm</a>
                <a href="">Trợ giúp</a>
                <a href="">API</a>
                <a href="">Quyền riêng tư</a>
                <a href="">Điều khoản</a>
                <a href="">Tài khoản liên quan nhất</a>
                <a href="">Hashtag</a>
                <a href="">Vị trí</a>
            </div>
            <div className={style.des}>
                <div className={style.select}>
                    <section>
                        <option value="">Tiếng Việt</option>
                    </section>
                </div>
                <div className={style.about}>
                    © 2021 Instagram from Facebook</div>
            </div>
        </div>
    )
}

