
import React from 'react'
import { DetailUser } from '../'
import HomeLayout from '../../../../layouts/clientLayout/common'
import style from './style.module.sass'
interface LayoutProps {
    posts: any //tạm thời any
}
export const Main: React.FC<LayoutProps> = ({ posts }) => {
    return (
        <HomeLayout>
            <div className={style.main}>
                <DetailUser />
                <div className={style.conten}>
                    {posts}
                </div>
            </div>
        </HomeLayout>
    )
}
