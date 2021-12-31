import { NextPage } from 'next'
import { Main } from '../../../components/client/[name]'

const UserDetailSaved: NextPage = () => {
    return (
        <Main posts={'saved'} />
    )
}

export default UserDetailSaved