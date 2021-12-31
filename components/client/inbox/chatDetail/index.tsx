import style from './style.module.sass'

const None = () => {
    return (
        <div className={style.none}>
            <div className={style.icon}></div>
            <div className={style.conten}>Tin nhắn của bạn</div>
            <div className={style.des}>Gửi ảnh và tin nhắn riêng tư cho bạn bè hoặc nhóm.</div>
            <button type='button'>Gửi tin nhắn</button>
        </div>
    )
}

export const ChatDetail = () => {
    return (
        <None/>
    )
}