import style from './style.module.sass'
import Image from 'next/image'
const BoxSearch = () => {
    return (
        <div className={style.overlay}>
            <div className={style.main}>
                <div className={style.x}></div>
                <div className={style.boxSearch}>
                    <h4>Gần đây</h4>
                    <div className={style.user}>
                        <div className={style.detail}>
                            <a href="#">
                                <div className={style.imguser}>
                                    <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={44} height={44} />
                                </div>
                                <div className={style.info}>
                                    <div className={style.nickname}>HiamT34</div>
                                    <div className={style.name}>Trần thanh hà</div>
                                </div>
                            </a>
                        </div>
                        <div className={style.detail}>
                            <a href="#">
                                <div className={style.imguser}>
                                    <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={44} height={44} />
                                </div>
                                <div className={style.info}>
                                    <div className={style.nickname}>HiamT34</div>
                                    <div className={style.name}>Trần thanh hà</div>
                                </div>
                            </a>
                        </div>
                        <div className={style.detail}>
                            <a href="#">
                                <div className={style.imguser}>
                                    <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={44} height={44} />
                                </div>
                                <div className={style.info}>
                                    <div className={style.nickname}>HiamT34</div>
                                    <div className={style.name}>Trần thanh hà</div>
                                </div>
                            </a>
                        </div>
                        <div className={style.detail}>
                            <a href="#">
                                <div className={style.imguser}>
                                    <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={44} height={44} />
                                </div>
                                <div className={style.info}>
                                    <div className={style.nickname}>HiamT34</div>
                                    <div className={style.name}>Trần thanh hà</div>
                                </div>
                            </a>
                        </div>
                        <div className={style.detail}>
                            <a href="#">
                                <div className={style.imguser}>
                                    <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={44} height={44} />
                                </div>
                                <div className={style.info}>
                                    <div className={style.nickname}>HiamT34</div>
                                    <div className={style.name}>Trần thanh hà</div>
                                </div>
                            </a>
                        </div>
                        <div className={style.detail}>
                            <a href="#">
                                <div className={style.imguser}>
                                    <Image src="https://lh3.googleusercontent.com/a-/AOh14Gimq2ti6u2XO8l02ZiEusEwKQPqhJMva_x2vHXbiA=s96-c" alt="TTH-BLOG" width={44} height={44} />
                                </div>
                                <div className={style.info}>
                                    <div className={style.nickname}>HiamT34</div>
                                    <div className={style.name}>Trần thanh hà</div>
                                </div>
                            </a>
                        </div>
                        {/* <div className={style.notUser}>
                            Không có nội dung tìm kiếm mới đây.
                        </div> */}
                    </div>
                    <div className={style.brul}></div>
                </div>

            </div>
        </div>

    )
}

export default BoxSearch