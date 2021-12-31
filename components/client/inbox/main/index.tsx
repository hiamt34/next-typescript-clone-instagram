import { SideBar, BoxChat } from '../'
import style from './style.module.sass'

export const Main = () => {
    return (
        <div className={style.main}>
            <SideBar />
            <BoxChat />
        </div>
    )
}