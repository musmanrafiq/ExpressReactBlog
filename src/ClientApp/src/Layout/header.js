import { Link } from 'react-router-dom';

function Head() {

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm mb-1">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Bootcamp's Blog</Link>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>)

}

export default Head;