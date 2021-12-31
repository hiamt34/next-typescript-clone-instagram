import AuthLayout from "../../../layouts/adminLayout/auth"
import Link from "next/link"
import Script from 'next/script'
const Register = () => {
    return (
        <AuthLayout namePage={"Register"}>
            <div>
                <form>
                    <div className="mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Fullname" />
                            <label htmlFor="floatingInput">Fullname</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput1" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword1" placeholder="Confirm Password" />
                            <label htmlFor="floatingPassword">Confirm Password</label>
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree the <a href="#">Terms and Conditions</a></label>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary m-b-xs">Register</button>
                    </div>
                </form>
                <div className="authent-login">
                    <p>Already have an account? <Link href={{pathname: '/admin/login'}}><a>Sign in</a></Link></p>
                </div>
            </div>
            <Script src="/admin/assets/plugins/pace/pace.min.js"></Script>
        </AuthLayout>
    )
}

export default Register