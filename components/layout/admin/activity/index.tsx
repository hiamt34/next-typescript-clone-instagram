export const Activity = () => {
    return (
        <div>
            <div className="activity-sidebar-overlay" />
            <div className="activity-sidebar">
                <a href="#" id="activity-sidebar-close"><i className="material-icons">close</i></a>
                <div className="activity-header">
                    <h5>Activity Logs</h5>
                </div>
                <div className="activity-body">
                    <ul className="activity-list list-unstyled">
                        <li className="activity-item">
                            <div className="activity-icon"><i className="material-icons">add</i></div>
                            <div className="activity-text">Ann Green uploaded new item
                                <span>This item has to be reviewed, moderators will check it soon.</span>
                            </div>
                            <div className="activity-helper">45min ago</div>
                        </li>
                        <li className="activity-item activity-info">
                            <div className="activity-icon"><i className="material-icons">code</i></div>
                            <div className="activity-text">John Doe made changes to create-invoice.js
                                <span>57 lines of code added, 0 removals, 0 errors, 6 warnings</span>
                            </div>
                            <div className="activity-helper">3h ago</div>
                        </li>
                        <li className="activity-item activity-danger">
                            <div className="activity-icon"><i className="material-icons">error_outline</i></div>
                            <div className="activity-text">Cant retrieve data from server
                                <span>Server is not responding, please contact provider</span>
                            </div>
                            <div className="activity-helper">6h ago</div>
                        </li>
                        <li className="activity-item">
                            <div className="activity-icon"><i className="material-icons">done</i></div>
                            <div className="activity-text">Files Uploaded
                                <span>2 new files uploaded</span>
                                <div className="mail-attachment-files">
                                    <div className="card">
                                        <img src="../../assets/images/card2.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">image.jpg</h5>
                                            <p className="card-text text-secondary">305 KB</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="../../assets/images/card1.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">image2.jpg</h5>
                                            <p className="card-text text-secondary">400 KB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="activity-helper">8h ago</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
