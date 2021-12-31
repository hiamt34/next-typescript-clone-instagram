import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import Link from 'next/link'
import { NewPost, Search } from '../../../common/icon'
import { Heart, Home } from '../header/icon'
import style from './style.module.sass'

export const FooterMobile = () => {
    const router = useRouter()
    const checkActive = router.pathname.includes('/[name]')

    return (
        <footer className={style.footer}>
            <div className={style.icon}>
                <Link href={{ pathname: '/' }} passHref><a><Home /></a></Link>
            </div>
            <div className={style.icon}>
                <Link href={{ pathname: '/explore' }} passHref><a><Search /></a></Link>
            </div>
            <div className={style.icon}>
                <Link href={{ pathname: '/explore' }} passHref><a><NewPost /></a></Link>
            </div>
            <div className={style.icon}>
                <a href="#"><Heart /></a>
            </div>
            <div className={style.icon}>
                <Link href={{ pathname: '/[name]', query: { name: 'userName' } }} passHref>
                    <a>
                        <div className={style.image} style={checkActive ? { border: '1px solid' } : {}}>
                            <div className={style.img}>
                                <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={24} height={24} />
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </footer>
    )
}