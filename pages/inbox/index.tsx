import type { NextPage } from 'next'
import { Main } from '../../components/client/inbox/'
import HomeLayout from '../../layouts/clientLayout/common'

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
