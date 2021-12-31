import { Box, IGTV, Save, User } from '../icon'
import style from './style.module.sass'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

export const Tap1 = () => {
    const router = useRouter()
    const checkActive = router.pathname === '/[name]'
    return (
        <Link href={{ pathname: '/[name]', query: { name: 'tenUser' } }} passHref><div className={checkActive ? style.iconActive : style.icon}><Box /> <div className={style.text}>bài viết</div></div></Link>
    )
}
 
export const Tap2 = () => {
    const router = useRouter()
    const checkActive = router.pathname === '/[name]/channel'
    return (
        <Link href={{ pathname: '/[name]/channel', query: { name: 'tenUser' } }} passHref><div className={checkActive ? style.iconActive : style.icon}><IGTV /> <div className={style.text}> igtv</div></div></Link>
    )
}

export const Tap3 = () => {
    const router = useRouter()
    const checkActive = router.pathname === '/[name]/saved'
    return (
        <Link href={{ pathname: '/[name]/saved', query: { name: 'tenUser' } }} passHref><div className={checkActive ? style.iconActive : style.icon}><Save /> <div className={style.text}> đã lưu</div></div></Link>
    )
}

export const Tap4 = () => {
    const router = useRouter()
    const checkActive = router.pathname === '/[name]/tagged'
    return (
        <Link href={{ pathname: '/[name]/tagged', query: { name: 'tenUser' } }} passHref><div className={checkActive ? style.iconActive : style.icon}><User /> <div className={style.text}> được gắn thẻ</div></div></Link>
    )
}