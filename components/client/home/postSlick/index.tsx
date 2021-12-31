/* eslint-disable @next/next/no-img-element */
import style from './style.module.sass'
import Slider from "react-slick";

export const OneImg = () => {
    return (
        <div className={style.image}>
            <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2020/04/LR-29-scaled.jpg" alt="" />
            <div className={style.layout}></div>
        </div>
    )
}

export const MultiImg = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className={style.multiImg}>
            <Slider {...settings}>
                <div className={style.image}>
                    <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2020/04/LR-29-scaled.jpg" alt="" />
                    <div className={style.layout}></div>
                </div>
                <div className={style.image}>
                    <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2020/04/LR-29-scaled.jpg" alt="" />
                    <div className={style.layout}></div>
                </div>
            </Slider>
        </div>
    )
}