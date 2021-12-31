import Image from 'next/image'
import { Node } from '../../../common'
import { ChatDetail } from '../'
import style from './style.module.sass'

export const BoxChat = () => {
    return (
        <div className={style.boxchat}>
            <div className={style.header}>
                <div className={style.userdetail}>
                    <div className={style.imguser}>
                        <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={32} height={32} />
                    </div>
                    <div className={style.info}>
                        <div className={style.nickname}><a href="#">HiamT34</a></div>
                    </div>
                    <div className={style.node}>
                        <Node />
                    </div>
                </div>
            </div>
            <div className={style.body}>
                <ChatDetail />
            </div>
        </div>
    )
}