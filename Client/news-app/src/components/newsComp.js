import React from 'react'

export default function NewsComp() {
    return (
        <div className = "container-fluid py-3  ">
            <div className = "row ">
                <div className = "col  text-center">
                    <h3 class="display-5 news-title">title of the shit is must be okay </h3>
                </div>
                <div className = "col">
                <h6><span class="badge badge-pill badge-dark">Sport</span></h6>

                </div>
                <div className = "col-12">
                    <p>This is must be the description of the news</p>
                    <img src="https://html5box.com/html5gallery/images/Wilderness_1024.jpg" class="img-fluid rounded mx-auto d-block" alt="Responsive image"></img>
                   
                </div>

            </div>
        </div>
    )
}
