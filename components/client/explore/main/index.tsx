import { Loading } from '../../../common/loading'
import { Item } from '../../../common'
import style from './style.module.sass'

export const Main = () => {
    return (
        <div>
            <div className={style.main}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                
            </div>
            <div className={style.loading}>
                <Loading/>
            </div>
        </div>
        
    )
}
