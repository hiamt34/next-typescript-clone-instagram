import AuthLayout from "../../../layouts/clientLayout/auth"
import { NextPage } from 'next'
import { FormLogin } from "../../../components/client/account/login/formLogin"

const Login: NextPage  = () => {
    return (
        <AuthLayout>
            <FormLogin/>
        </AuthLayout>
    )
}

export default Login
