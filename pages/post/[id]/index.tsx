import type { NextPage } from 'next'
import { Main } from '../../../components/client/post/[id]'
import HomeLayout from '../../../layouts/clientLayout/common'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Post: NextPage = () => {
  return (
    <div>
      <HomeLayout>
        <Main />
      </HomeLayout>
    </div>
  )
}

export default Post
