function SideMenu() {
    return (
        <div className="col-sm-3 sidenav">
            <h4>John's Blog</h4>
            <ul className="nav nav-pills nav-stacked">
                <li className="active"><a href="#section1">Home</a></li>
                <li><a href="#section2">Friends</a></li>
                <li><a href="#section3">Family</a></li>
                <li><a href="#section3">Photos</a></li>
            </ul><br />
            <div className="input-group">
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