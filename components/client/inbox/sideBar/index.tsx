import Image from 'next/image'
import { Book } from '../../../common'
import style from './style.module.sass'

export const SideBar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.header}>
                <p className={style.name}>ThanhHa</p>
                <div className={style.iconBook}><Book /></div>
            </div>
            <div className={style.body}>
                <div className={style.account}>
                    <div className={style.imguser}>
                        <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={56} height={56} />
                    </div>
                    <div className={style.info}>
                        <div className={style.nickname}>HiamT34</div>
                        <div className={style.outTime}>Hoạt động 2 giờ trước</div>
                    </div>
                </div>
                <div className={style.account}>
                    <div className={style.imguser}>
                        <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={56} height={56} />
                    </div>
                    <div className={style.info}>
                        <div className={style.nickname}>HiamT34</div>
                        <div className={style.outTime}>Hoạt động 2 giờ trước</div>
                    </div>
                </div>
            </div>

        </div>
    )
}