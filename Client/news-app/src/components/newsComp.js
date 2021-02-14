import React from 'react'

export default function NewsComp(props) {

    return (
        <div className = "container-fluid py-3  ">
            <div className = "row ">
                <div className = "col  text-center">
                    <h3 class="display-5 news-title">{props.news.title} </h3>
                </div>
                <div className = "col">
                <h6><span class="badge badge-pill badge-dark">{props.news.field}</span></h6>

                </div>
                <div className = "col-12">
                    <p>{props.news.content}</p>
                    <img src={props.news.photos} class="img-fluid rounded mx-auto d-block" alt="Responsive image"></img>
                   
                </div>

            </div>
        </div>
    )
}
