import style from './style.module.sass'
import { Heart, Cmt, Save, Share, Emoji, ListEmoji } from '../../../../common'
import React, { useState } from 'react'

export const FooterPost = () => {
    const [emojiStatus, setEmojsStatus] = useState<boolean>(false)
    const [cmt, setCmt] = useState<string>("")
    return (
        <div className={style.FooterPost}>
            
            <div className={style.option}>
                <div className={style.icon}><Heart /></div>
                <div className={style.icon}><Cmt /></div>
                <div className={style.icon}><Share /></div>
                <div className={style.icon}><Save /></div>
            </div>
            <div className={style.likePost}>
                132 lượt thích
            </div>
            <div className={style.time}>
                2 giờ trước
            </div>
            <form action="">
                <div className={style.cmt}>
                    <div className={emojiStatus ? style.overlay : ''} onClick={() => setEmojsStatus(!emojiStatus)}></div>
                    {emojiStatus ? <ListEmoji cmt={cmt} setCmt={setCmt} /> : null}
                    <button type="button" className={style.icon} onClick={() => setEmojsStatus(!emojiStatus)}>
                        <Emoji />
                    </button>
                    <div className={style.textarea}>
                        <textarea placeholder="Thêm bình luận…" onChange={(event) => setCmt(event.target.value)} value={cmt} />
                    </div>
                    <div>
                        <button type="button">Đăng</button>
                    </div>
                </div>
            </form>

        </div>
    )
}