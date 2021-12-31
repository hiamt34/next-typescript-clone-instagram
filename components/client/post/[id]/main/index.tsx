import { Dot, Heart, Item, SmallUser } from '../../../../common'
import { MultiImg } from '../../../home'
import { FooterPost } from '../footerPost'
import style from './style.module.sass'

export const Main = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.imgPost}>
                    <MultiImg />
                </div>
                <div className={style.infoPost}>
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
                    <div className={style.column}>
                        <div className={style.postBody}>
                            <div className={style.status}>
                                <SmallUser />
                                <div className={style.nickname}>
                                    <a href="#">HiamT34</a>
                                    Bật mí QUÁN ĐỒ HÀN GIÁ RẺ từ 50k chất lượng phố cổBật mí QUÁN ĐỒ HÀN GIÁ RẺ từ 50k chất lượng phố cổBật mí QUÁN ĐỒ HÀN GIÁ RẺ từ 50k chất lượng phố cổ
                                </div>

                            </div>
                            <div className={style.cmt}>
                                <div className={style.userCmt}>
                                    <SmallUser />
                                    <div className={style.item}>
                                        <div className={style.conten}>
                                            <div className={style.nickname}>
                                                <a href="#">HiamT34</a>
                                                Bật mí QUÁN ĐỒ HÀN GIÁ RẺ từ 50k chất lượng phố cổBật mí QUÁN ĐỒ HÀN GIÁ RẺ từ 50k chất lượng phố cổBật mí QUÁN ĐỒ HÀN GIÁ RẺ từ 50k chất lượng phố cổ
                                            </div>
                                            <div className={style.likeCmt}>
                                                <Heart />
                                            </div>
                                        </div>
                                        <div className={style.node}>
                                            <span>1 lượt thích</span>
                                            <span>Trả lời</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className={style.postFooter}>
                            <FooterPost />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.hr} />
            <div className={style.post}>
                <div className={style.viewAll}>
                    <span>Thêm các bài viết từ <a href="">foodysaigon</a></span>
                </div>
                <div className={style.somePost}>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
        </div>
    )
}