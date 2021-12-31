/* eslint-disable @next/next/no-css-tags */
import Head from "next/head"
import { Footer, Header, Sidebar, Activity } from "../../../components/layout/admin"


interface LayoutProp { }
const AdminLayout: React.FC<LayoutProp> = ({ children }) => {
    return (
        <div>
            <Head>
                <title>TTH-ADMIN</title>
                <link rel="icon" href='/layout/icon/favicon.png' />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link href="/admin/assets/plugins/font-awesome/css/all.min.css" rel="stylesheet" />
                <link href="/admin/assets/plugins/perfectscroll/perfect-scrollbar.css" rel="stylesheet" />
                <link href="/admin/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/admin/assets/plugins/pace/pace.css" rel="stylesheet" />
                <link href="/admin/assets/css/main.min.css" rel="stylesheet" />
                <script async src="/admin/assets/plugins/jquery/jquery-3.4.1.min.js"></script>
                <script async src="/admin/assets/js/pages/feather.min.js"></script>
            </Head>
            <div className="page-container">
                <Sidebar />
                <div className="page-content">
                    <Header />
                    {children}
                    <Activity/>
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default AdminLayout
