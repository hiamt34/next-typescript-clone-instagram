import Image from 'next/image'
import React from 'react'
import style from './style.module.sass'
interface Props {
    wh: number
}

export const Avarta:React.FC<Props> = ({ wh }) => {
    return (
        <div className={style.bigUser}>
            <div className={style.image} style={{width:wh+4,height:wh+4}}>
                <div className={style.img} style={{width:wh,height:wh}}>
                    <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={wh} height={wh}  />
                </div>
            </div>
        </div>
    )
}
export const LGUser = () => {
    return (
        <div className={style.LGUser}>
            <div className={style.image}>
                <div className={style.img}>
                    <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={150} height={150}  />
                </div>
            </div>
        </div>
    )
}

export const BigUser = () => {
    return (
        <div className={style.bigUser}>
            <div className={style.image}>
                <div className={style.img}>
                    <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={58} height={58}  />
                </div>
            </div>
        </div>
    )
}

export const SmallUser = () => {
    return (
        <div className={style.smallUser}>
            <div className={style.image}>
                <div className={style.img}>
                    <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={32} height={32}  />
                </div>
            </div>
        </div>
    )
}