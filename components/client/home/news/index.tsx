
import { NewsSlick } from '../'
import style from './style.module.sass'
export const News = () => {
    return (
        <div className={style.news}>
            <div className={style.conten}>
                <NewsSlick />
            </div>
        </div>
    )
}