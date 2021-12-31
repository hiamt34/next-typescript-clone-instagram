import AuthLayout from "../../../layouts/adminLayout/auth"
import Link from "next/link"
import Script from 'next/script'
const Login = () => {
    return (
        <AuthLayout namePage={"Login"}>
            <form>
                <div className="mb-3">
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-info m-b-xs">Sign In</button>
                    <button className="btn btn-primary">Facebook</button>
                </div>
            </form>
            <div className="authent-reg">
                <p>Not registered? <Link href={{
                    pathname: '/admin/register',
                }} ><a>Create an account</a></Link></p>
            </div>
            <Script src="/admin/assets/plugins/pace/pace.min.js"></Script>
        </AuthLayout>
    )
}

export default Login