import style from './style.module.sass'

export const Loading = () => {
    return (
        <div className={style.loading}>
            <div className={style.load}></div>
        </div>
    )
}