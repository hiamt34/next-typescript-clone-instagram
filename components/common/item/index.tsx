import Image from 'next/image'
import style from './style.module.sass'
import LoadImg from '../../../public/client/loading/loadImg.gif'
import { ChatWhite, HeartWhite, MultiPost } from '../icon'
export const Item = () => {
    return (
        <div className={style.item}>
            <div className={style.multiPost}>
                <MultiPost />
            </div>
            <Image src={LoadImg} alt='TTH-BLOG' width={293} height={293} />
            <div className={style.layout}>
                <div className={style.like}>
                    <HeartWhite />
                    0
                </div>
                <div className={style.cmt}>
                    <ChatWhite />
                    0
                </div>
            </div>
        </div>
    )
}
