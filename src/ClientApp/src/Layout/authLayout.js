import { Outlet } from "react-router-dom";

function AuthLayout() {

    return (
        <div className="container-fluid">
            <div className="row content">
                <p>I am auth layout</p>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default AuthLayout;