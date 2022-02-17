import React, { useState } from 'react'

export default function EditNews(props) {

    const fields = [
        "Sports",
        "Economie",
        "Politique"
    ]
    const [image, setimage] = useState(null)
    const [news, setnews] = useState(props.news)
    const updateNews = async () => {
        let formData = new FormData();
        let photo = document.getElementById("image-file"+news._id).files[0];

        
            console.log(photo)
            formData.append("image", photo);
        
        
        formData.append("data", JSON.stringify(news))
        await fetch('http://localhost:9000/news/'+ news._id , { method: "PUT", 
          body: formData });
          window.location.reload();
    }
    const deleteNews = async () => {
        await fetch('http://localhost:9000/news/'+ news._id , { method: "DELETE"
          });
          window.location.reload();
    }
    return (
        <div className="container-fluid d-flex justify-content-center my-5 edit-news-cont">
            <form>

                <div className="form-group">
                    <label htmlFor={news.id + "exampleInputEmail1"}>Title of the news</label>
                    <input type="text" className="form-control" id={news.id + "exampleInputEmail1"} aria-describedby="emailHelp" placeholder="Enter title"
                        defaultValue={news.title} onChange={(e) => {
                            setnews(prevState => ({
                                ...prevState,
                                title: e.target.value
                            })
                            )
                        }} />

                </div>
                <div className="form-group" >

                    <label htmlFor="birthday"  >Really? When ?</label>
                    <input type="date" className="form-control text-center" id="birthday" name="birthday" defaultValue = {news.date} onChange={(e) => setnews(prevState => ({
                        ...prevState,
                        date: e.target.value
                    })
                    )} />


                </div>
                <div className="form-group">
                    <img src={"http://localhost:9000/" + props.news.photos.substr(2)} class="img-fluid rounded mx-auto d-block" alt="Responsive image"></img>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">News Body, What's happening?</label>
                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows={10} defaultValue={news.content} onChange={(e) => {
                        setnews(prevState => ({
                            ...prevState,
                            content: e.target.value
                        })
                        )
                    }} />
                </div>
                <div className="form-group d-flex justify-content-center">
                    <select class="custom-select" id={"inputGroupSelect01" + news.id} onChange={(e) => {
                        setnews(prevState => ({
                            ...prevState,
                            field: e.target.value
                        })
                        )
                    }}>
                        {fields.map((field, i) => {

                            if (field == news.field) {
                                return <option value={field} selected>{field}</option>
                            }
                            else {
                                return <option value={field}>{field}</option>
                            }
                        })}

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image-file">Add a photo</label>
                    <input type="file" className="form-control-file" id={"image-file"+news._id}  />
                </div>
                <div className="form-group px-5">
                    <div className="container ">
                        <div className="row">
                            <div className="col ">
                                <button type="button" className="btn btn-secondary" onClick = {updateNews} > Update</button>

                            </div>
                            <div className="col ">
                                <button type="button" className="btn btn-outline-secondary" onClick = {deleteNews}>Delete</button>

                            </div>
                        </div>

                    </div>
                </div>


            </form>
        </div>
    )
}
