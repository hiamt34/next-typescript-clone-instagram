import type { NextPage } from 'next'
import HomeLayout from '../../layouts/clientLayout/common'
import { Main } from '../../components/client/explore/'

const Home: NextPage = () => {
  return (
    <div>
      <HomeLayout>
        <Main />
      </HomeLayout>
    </div>
  )
}

export default Home
