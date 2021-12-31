import Script from "next/script"
import { useEffect } from "react"
import AdminLayout from "../../../layouts/adminLayout/common"

const DashBoard = () => {
    return (
        <AdminLayout>
            <div className="main-wrapper">
                
                <div className="row">
                    <div className="col-md-3">
                        <div className="card stats-card">
                            <div className="card-body">
                                <div className="stats-info">
                                    <h5 className="card-title">BTC<span className="stats-change stats-change-danger">-5.5%</span></h5>
                                    <p className="stats-text">$38,900</p>
                                </div>
                                <div className="stats-icon change-danger">
                                    <i className="material-icons">trending_down</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card stats-card">
                            <div className="card-body">
                                <div className="stats-info">
                                    <h5 className="card-title">Eth<span className="stats-change stats-change-danger">-2.64%</span></h5>
                                    <p className="stats-text">$2,600</p>
                                </div>
                                <div className="stats-icon change-danger">
                                    <i className="material-icons">trending_down</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card stats-card">
                            <div className="card-body">
                                <div className="stats-info">
                                    <h5 className="card-title">BNB<span className="stats-change stats-change-success">+2%</span></h5>
                                    <p className="stats-text">$330</p>
                                </div>
                                <div className="stats-icon change-success">
                                    <i className="material-icons">trending_up</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card stats-card">
                            <div className="card-body">
                                <div className="stats-info">
                                    <h5 className="card-title">ADA<span className="stats-change stats-change-danger">-8%</span></h5>
                                    <p className="stats-text">$1.31</p>
                                </div>
                                <div className="stats-icon change-danger">
                                    <i className="material-icons">trending_down</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card card-bg">
                            <div className="card-body">
                                <h5 className="card-title">Get Strarted</h5>
                                <table className="table crypto-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Change</th>
                                            <th scope="col">Trade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td><img src="/admin/assets/images/crypto/btc.png" alt=""/>Bitcoin</td>
                                            <td>$38,900</td>
                                            <td className="text-danger">-0.53%</td>
                                            <td><button type="button" className="btn btn-link">Buy</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td><img src="/admin/assets/images/crypto/eth.png" alt=""/>Ethereum</td>
                                            <td>$2,600</td>
                                            <td className="text-success">+4.55%</td>
                                            <td><button type="button" className="btn btn-link">Buy</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td><img src="/admin/assets/images/crypto/btcc.png" alt=""/>Bitcoin Cash</td>
                                            <td>$542.20</td>
                                            <td className="text-danger">-0.30%</td>
                                            <td><button type="button" className="btn btn-link">Buy</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td><img src="/admin/assets/images/crypto/ltc.png" alt=""/>Litecoin</td>
                                            <td>$139.40</td>
                                            <td className="text-success">+2.19%</td>
                                            <td><button type="button" className="btn btn-link">Buy</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-bg">
                            <div className="card-body">
                                <h5 className="card-title">Transactions</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Bitcoin</td>
                                            <td><span className="badge bg-info">Recieve</span></td>
                                            <td>0.01</td>
                                        </tr>
                                        <tr>
                                            <td>Ethereum</td>
                                            <td><span className="badge bg-success">Buy</span></td>
                                            <td>0.3</td>
                                        </tr>
                                        <tr>
                                            <td>Ripple</td>
                                            <td><span className="badge bg-success">Buy</span></td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>BNB</td>
                                            <td><span className="badge bg-danger">Failed</span></td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>Cardano</td>
                                            <td><span className="badge bg-warning">Recieve</span></td>
                                            <td>300</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card card-bg actions-widget text-center">
                            <div className="card-body">
                                <div className="actions-widget-item">
                                    <button type="button" className="btn btn-circle text-primary"><i className="fas fa-share" /></button>
                                    <span className="actions-widget-item-title">Send</span>
                                </div>
                                <div className="actions-widget-item">
                                    <button type="button" className="btn btn-circle text-success"><i className="far fa-credit-card" /></button>
                                    <span className="actions-widget-item-title">Deposit</span>
                                </div>
                                <div className="actions-widget-item">
                                    <button type="button" className="btn btn-circle text-warning"><i className="fas fa-lock" /></button>
                                    <span className="actions-widget-item-title">Stake</span>
                                </div>
                                <div className="actions-widget-item">
                                    <button type="button" className="btn btn-circle text-info"><i className="fas fa-user-plus" /></button>
                                    <span className="actions-widget-item-title">Add</span>
                                </div>
                                <div className="actions-widget-item">
                                    <button type="button" className="btn btn-circle text-success"><i className="fas fa-calendar" /></button>
                                    <span className="actions-widget-item-title">History</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card card-bg text-center">
                            <div className="card-body">
                                <div >
                                    <h5 className="text-white">Claim your gift</h5>
                                    <p className="m-t-xs">5% off for the first buy</p>
                                    <a href="#" className="btn btn-success widget-info-action">Register Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            <Script src="/admin/assets/js/pages/popper.min.js"></Script>
            <Script src="/admin/assets/plugins/bootstrap/js/bootstrap.min.js"></Script>
            <Script src="/admin/assets/plugins/perfectscroll/perfect-scrollbar.min.js"></Script>
            <Script src="/admin/assets/plugins/pace/pace.min.js"></Script>
            <Script strategy="lazyOnload" src="/admin/assets/js/main.min.js"></Script>
        </AdminLayout>

    )
}

export default DashBoard
