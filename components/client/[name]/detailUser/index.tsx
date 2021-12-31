import { LGUser, Setting } from '../../../common'
import { Tap1, Tap2, Tap3, Tap4 } from '../navLink'
import style from './style.module.sass'

export const DetailUser = () => {
    return (
        <div className={style.detailUser}>
            <div className={style.header}>
                <div className={style.img}>
                    <LGUser />
                </div>
                <div className={style.info}>
                    <div className={style.infoHeader}>
                        <h2>ThanhHa198</h2>
                        <button>Chỉnh sửa trang cá nhân</button> 
                        <Setting />
                    </div>
                    <div className={style.infoBody}>
                        <p><span>1</span> bài viết</p>
                        <p><span>10</span> người theo dõi</p>
                        <p>Đang theo dõi <span>12</span> người dùng</p>
                    </div>
                    <div className={style.infoFooter}>
                        <span>Thanh hà</span>
                    </div>
                </div>
            </div>
            <div className={style.forlowMobile}>
                <p><span>1</span> bài viết</p>
                <p><span>10</span> người theo dõi</p>
                <p>Đang theo dõi <span>12</span> người dùng</p>
            </div>
            <div className={style.nav}>
                <Tap1 />
                <Tap2 />
                <Tap3 />
                <Tap4 />
            </div>
        </div>
    )
}
