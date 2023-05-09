function SideMenu() {
    return (
        <div className="col-sm-3 sidenav">
            <div className="input-group mt-2">
                <input type="text" className="form-control" placeholder="Search Blog.." />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                </span>
            </div>
        </div>
    )
}

export default SideMenu;