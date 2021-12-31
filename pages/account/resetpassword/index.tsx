import type { NextPage } from 'next'
import { FormReset } from '../../../components/client/account/resetpassword/formReset'
import HomeLayout from '../../../layouts/clientLayout/common'

const ResetPassword: NextPage = () => {
    return (
        <div>
            <HomeLayout>
                <FormReset />
            </HomeLayout>
        </div>
    )
}

export default ResetPassword
