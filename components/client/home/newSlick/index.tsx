import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image'
import style from './style.module.sass'
import { BigUser } from "../../../common/user";
export class NewsSlick extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1
    };
    return (
      <div className={style.slick}>
        <Slider {...settings}>
          <div className={style.item}>
            <BigUser />
            <p className={style.name}>Trần Thanh Hà</p>
          </div>
          <div className={style.item}>
            <BigUser />
            <p className={style.name}>Trần Thanh Hà</p>
          </div>
          <div className={style.item}>
            <BigUser />
            <p className={style.name}>Trần Thanh Hà</p>
          </div>
          <div className={style.item}>
            <BigUser />
            <p className={style.name}>Trần Thanh Hà</p>
          </div>
          <div className={style.item}>
            <BigUser />
            <p className={style.name}>Trần Thanh Hà</p>
          </div>
          <div className={style.item}>
            <BigUser />
            <p className={style.name}>Trần Thanh Hà</p>
          </div>
          <div className={style.item}>
            <BigUser />
            <p className={style.name}>Trần Thanh Hà</p>
          </div>
          <div className={style.item}>
            <BigUser />
            <p className={style.name}>Trần Thanh Hà</p>
          </div>
        </Slider>
      </div>
    );
  }
}