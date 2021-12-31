import { News, Post, SideBar } from '../'
import { Loading } from '../../../common/loading'
import style from './style.module.sass'
export const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.posts}>
                <News />
                <Post />
                <Post />
                
                <Loading/>
            </div>
            <div className={style.sidebar}>
                <SideBar />
            </div>
            
        </main>
    )
}