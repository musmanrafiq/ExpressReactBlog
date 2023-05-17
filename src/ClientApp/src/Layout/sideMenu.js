import { useState } from "react";
import { useSearchParams } from 'react-router-dom';

function SideMenu() {

    const [searchInput, setSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const searchInputChange = (evnt) => {
        setSearch(evnt.target.value);
    }

    const searchInputKeyDown = (evnt) => {
        if (evnt.key == 'Enter') {
            searchParams.set("query", searchInput)
            setSearchParams(searchParams);
        } else if (evnt.key === "Backspace") {

            if (!searchInput) {
                
                searchParams.set("query", searchInput)
                setSearchParams(searchParams);
            }
        }

    }
    return (
        <div className="col-sm-3 sidenav">
            <div className="input-group mt-2">
                <input type="text"
                    value={searchInput}
                    onChange={searchInputChange}
                    onKeyDown={searchInputKeyDown}
                    className="form-control" placeholder="Search Blog.." />

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