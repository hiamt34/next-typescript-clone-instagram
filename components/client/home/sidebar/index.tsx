import Image from 'next/image'
import Link from 'next/link'
import { SmallUser } from '../../../common/user'
import style from './style.module.sass'
export const SideBar = () => {
    return (
        <div className={style.sidebarMain}>
            <div className={style.sidebarConten}>
                <div className={style.myaccount}>
                    <div className={style.imguser}>
                        <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={56} height={56} />
                    </div>
                    <div className={style.info}>
                        <div className={style.nickname}>HiamT34</div>
                        <div className={style.name}>Trần thanh hà</div>
                    </div>
                    <div>
                        <Link href="#"><a className={style.choose}>Chuyển</a></Link>
                    </div>
                </div>
                <div className={style.accounts}>
                    <div className={style.title}>
                        <div className={style.node}>Gợi ý cho bạn</div>
                        <div>
                            <Link href="#"><a className={style.all}>Xem tất cả</a></Link>
                        </div>
                    </div>
                    <div className={style.users}>
                        <div className={style.userdetail}>
                            <div className={style.imguser}>
                                <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={32} height={32} />
                            </div>
                            <div className={style.info}>
                                <div className={style.nickname}>HiamT34</div>
                                <div className={style.node}>Gợi ý cho bạn</div>
                            </div>
                            <div>
                                <Link href="#"><a className={style.choose}>Theo dõi</a></Link>
                            </div>
                        </div>
                        <div className={style.userdetail}>
                            <SmallUser/>
                            <div className={style.info}>
                                <div className={style.nickname}>HiamT34</div>
                                <div className={style.node}>Gợi ý cho bạn</div>
                            </div>
                            <div>
                                <Link href="#"><a className={style.choose}>Theo dõi</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.sidebarFooter}>
                <div className={style.conten}>
                    <a href="#">Giới thiệu</a>
                    <a href="#">Blog</a>
                    <a href="#">Việc làm</a>
                    <a href="#">Trợ giúp</a>
                    <a href="#">API</a>
                    <a href="#">Quyền riêng tư</a>
                    <a href="#">Điều khoản</a>
                    <a href="#">Tài khoản liên quan nhất</a>
                    <a href="#">Hashtag</a>
                    <a href="#">Vị trí</a>
                    <a href="#">Ngôn Ngữ: Tiếng Việt</a>
                </div>
                <div className={style.des}>
                    © 2021 INSTAGRAM FROM FACEBOOK
                </div>
            </div>
        </div>
    )
}