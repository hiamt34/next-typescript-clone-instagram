import { FooterPost, MultiImg } from '../'
import { SmallUser, Dot } from '../../../common/'
import style from './style.module.sass'
export const Post = () => {
    return (
        <div className={style.posts}>
            <div className={style.post}>
                <div className={style.postHeader}>
                    <div className={style.userdetail}>
                        <SmallUser />
                        <div className={style.info}>
                            <div className={style.nickname}><a href="#">HiamT34</a></div>
                        </div>
                        <div className={style.dot}>
                            <Dot />
                        </div>
                    </div>
                </div>
                <div className={style.postBody}>
                    {/* <OneImg /> */}
                    <MultiImg />
                </div>
                <div className={style.footerPost}>
                    <FooterPost /> 
                </div>
            </div>
        </div>
    )
}