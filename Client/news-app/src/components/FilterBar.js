import React from 'react'

export default function FilterBar() {
    return (
        <div className="container d-flex justify-content-center">
            <div className = "row text-center">
                <div className = "col ">
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort By
                 </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Field</a>
                    <a className="dropdown-item" href="#">Date</a>
                </div>
            </div>
                </div>
                <div className = "col ">
                <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Choose a field
                 </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <a className="dropdown-item" href="#">Field</a>
                    <a className="dropdown-item" href="#">Field</a>
                    <a className="dropdown-item" href="#">Field</a>
                    <a className="dropdown-item" href="#">Field</a>
                    <a className="dropdown-item" href="#">Field</a>
                </div>
            </div>
                </div>
            </div>
           
         


        </div>
    )
}
