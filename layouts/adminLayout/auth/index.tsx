/* eslint-disable @next/next/no-css-tags */
import React from "react"
import Head from 'next/head'
import Link from 'next/link'
import Script from "next/script"
interface LayoutProps {
    namePage?: string
}

const AuthLayout: React.FC<LayoutProps> = ({ children, namePage }) => {
    return (
        <div className="pace-done login-page no-loader">
            <Head>
                <title>TTH-ADMIN</title>
                <link rel="icon" href='/layout/icon/favicon.png' />
                <link href="/admin/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/admin/assets/plugins/pace/pace.css" rel="stylesheet" />
                <link href="/admin/assets/css/main.min.css" rel="stylesheet" />
                <script async src="/admin/assets/plugins/jquery/jquery-3.4.1.min.js"></script>
            </Head>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-12 col-lg-4">
                        <div className="card login-box-container">
                            <div className="card-body">
                                <div className="authent-logo">
                                    <Link href="/admin">TTH-ADMIN</Link>
                                </div>
                                <div className="authent-text">
                                    <p>Welcome to TTH-ADMIN</p>
                                    <p>Please {namePage} to your account.</p>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
