import { Outlet } from "react-router-dom";

function AdminLayout() {

    return (
        <div className="container-fluid">
            <div className="row content">
                <p>I am admin layout</p>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default AdminLayout;