import { NextPage } from 'next'
import { Main } from '../../../components/client/[name]'

const UserDetailChannel: NextPage = () => {
    return (
        <Main posts={'channel'} />
    )
}

export default UserDetailChannel