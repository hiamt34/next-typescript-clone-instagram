import AuthLayout from "../../../layouts/clientLayout/auth"
import { NextPage } from 'next'
import { FormRegister } from "../../../components/client/account/register/formRegister"


const Register: NextPage  = () => {
    
    return (
        <AuthLayout>
            <FormRegister/>
        </AuthLayout>
    )
}

export default Register
