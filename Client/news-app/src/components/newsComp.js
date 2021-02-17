import React, { useState } from 'react'

export default function NewsComp(props) {
    const [news, setnews] = useState(props.news)

    return (
        <div>
            <div className="container-fluid py-5 edit-news-cont " data-toggle="modal" data-target={"#exampleModal" + props.news._id}>
                <div className="row ">
                    <div className="col-8  text-center limit" >
                        <h3 class="display-5 news-title">{props.news.title} </h3>
                    </div>
                    <div className="col-2 ">
                        <h6><span class="badge badge-pill badge-dark">{props.news.field}</span></h6>

                    </div>
                    <div className="col-12">
                        <h5>{props.news.date}</h5>
                        <p>{props.news.content.substr(0, 50) + " ..."}</p>
                        <img src={"http://localhost:9000/" + props.news.photos.substr(2)} class="img-fluid rounded mx-auto d-block" alt="Responsive image"></img>

                    </div>

                </div>
            </div>
            <div className="modal fade" id={"exampleModal" + props.news._id} tabIndex={-1} role="dialog" aria-labelledby={"exampleModalLabel" + props.news._id} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header d-flex text-center">
                            
                            <div className="col-8  text-center limit" >
                            <h5 className="modal-title" id={"exampleModalLabel" + props.news._id}>{props.news.title}</h5>
                                </div>
                                <div className="col-2 ">
                                    <h6><span class="badge badge-pill badge-dark">{props.news.field}</span></h6>

                                </div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className = "container-fluid">
                            <div className="row ">
                               
                               <div className="col-12">
                                   <h5>{props.news.date}</h5>
                                   <p>{props.news.content}</p>
                                   <img src={"http://localhost:9000/" + props.news.photos.substr(2)} class="img-fluid " alt="Responsive image"></img>

                               </div>

                           </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
