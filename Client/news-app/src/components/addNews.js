import React from 'react'

export default function AddNews() {
    return (
        <div className="container d-flex justify-content-center py-2">
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-light btn-lg add-news-btn" data-toggle="modal" data-target="#exampleModal">
                    Add News
  </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">What's Up ?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
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

                                </form>

                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary"> Post</button>
                                <button type="button" className="btn btn-outline-secondary"data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
