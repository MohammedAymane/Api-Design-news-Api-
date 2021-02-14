import React from 'react'

export default function EditNews() {
    return (
        <div className = "container-fluid d-flex justify-content-center edit-news-cont">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title of the news</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">News Body, What's happening?</label>
                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows={10} defaultValue={""} />
                </div>
                <div className="form-group d-flex justify-content-center">
                    <div className="dropdown ">
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
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Add a photo</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <div className="form-group px-5">
                    <div className = "container ">
                        <div className  = "row">
                            <div className = "col ">
                            <button type="button" className="btn btn-secondary"> Update</button>

                            </div>
                            <div className = "col ">
                            <button type="button" className="btn btn-outline-secondary">Delete</button>

                            </div>
                        </div>
            
                    </div>
                     </div>
               

            </form>
        </div>
    )
}
