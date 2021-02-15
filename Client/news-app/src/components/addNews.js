import React, { useState } from 'react'

export default function AddNews() {
    const fields = [
        "Sports",
        "Economie",
        "Politique"
    ]
    const [image, setimage] = useState(null)
    const [news, setNews] = useState({
        title: "",
        content: "",
        field: "",
        date: ""
    })
    const postNews = async () => {
        let photo = document.getElementById("image-file").files[0];
        let formData = new FormData();
        console.log(photo)
        formData.append("image", photo);
        formData.append("data", JSON.stringify(news))
        await fetch('http://localhost:9000/news', { method: "POST", 
          body: formData });
    }

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
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title"
                                            onChange={(e) => setNews(prevState => ({
                                                ...prevState,
                                                title: e.target.value
                                            })
                                            )} />

                                    </div>
                                    <div className="form-group" >

                                        <label htmlFor="birthday"  >Really? When ?</label>
                                        <input type="date" className="form-control text-center" id="birthday" name="birthday" onChange={(e) => setNews(prevState => ({
                                            ...prevState,
                                            date: e.target.value
                                        })
                                        )} />


                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">News Body, What's happening?</label>
                                        <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows={10}
                                            onChange={(e) => setNews(prevState => ({
                                                ...prevState,
                                                content: e.target.value
                                            })
                                            )} defaultValue={""} />
                                    </div>
                                    <div className="form-group d-flex justify-content-center">
                                        <select class="custom-select" id="inputGroupSelect01add" onClick={(e) => setNews(prevState => ({
                                            ...prevState,
                                            field: e.target.value
                                        })
                                        )} >
                                            {fields.map((field, i) => {

                                                if (field == news.field) {
                                                    return <option value={field} selected >{field}</option>
                                                }
                                                else {
                                                    return <option value={field}>{field}</option>
                                                }
                                            })}

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image-file">Add a photo</label>
                                        <input type="file" className="form-control-file" id="image-file" onChange = {(e)=>{
                                            setimage(e.target.value)
                                        }}/>
                                    </div>

                                </form>

                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary" onClick = {
                                    
                                        postNews

                                    
                                }> Post</button>
                                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
