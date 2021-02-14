import React from 'react'

export default function FilterBar(props) {
    const handleLimitChange = (e)=>{
        props.changeLimitInf(e.target.value)
        
    }
    return (
        <div className="container d-flex justify-content-center">
            <div className="row text-center">
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text  badge-dark" id="inputGroup-sizing-default">Page size</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange = { handleLimitChange}/>
                    </div>

                </div>
                <div className="col ">
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
                <div className="col ">
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
