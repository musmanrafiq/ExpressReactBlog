import Footer
    from "./footer";
import Head from "./header";
import SideMenu from "./sideMenu";
import { Outlet } from 'react-router-dom';

function DefaultLayout() {

    return (
        <>
            <Head />
            <div className="container-fluid">
                <div className="row content">
                    <SideMenu />
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DefaultLayout;