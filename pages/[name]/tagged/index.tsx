import { NextPage } from 'next'
import { Main } from '../../../components/client/[name]'

const UserDetailTagged: NextPage = () => {
    return (
        <Main posts={'tagged'} />
    )
}

export default UserDetailTagged