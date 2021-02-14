import React, { useState } from 'react';
import FilterBar from './FilterBar'
import Pagination from './pagination'
import AddNews from './addNews'
import EditNews from './editNews'
export default function Admin() {
    const [page, setpage] = useState(1)
    const [limit, setlimit] = useState(10)
    const [newsList, setnewsList] = useState([
        {  id : 1,
            title: "title 1",
            content: "desciption",
            photos: "https://html5box.com/html5gallery/images/Wilderness_1024.jpg",
            field: "Sports"},
            {  id : 2,
                title: "title costum ",
            content: "desciption",
            photos: "https://html5box.com/html5gallery/images/Wilderness_1024.jpg",
            field: "Sports"},
            {  id : 3,
                title: "title ok ",
            content: "desciption",
            photos: "https://html5box.com/html5gallery/images/Wilderness_1024.jpg",
            field: "Sports"},
            {  id : 4,
                title: "title",
            content: "desciption",
            photos: "https://html5box.com/html5gallery/images/Wilderness_1024.jpg",
            field: "Sports"}
    ])
    return (
        <div>
            <div>
                <div class="jumbotron jumbotron-fluid text-center">

                    <h1 class="display-1">this is admin news page</h1>
                    <AddNews />
                </div>
                <div className="container  justify-content-center">
                    <div className="row text-center py-2 justify-content-center">

                        <h1 className="Display-1" >This is the news list </h1>


                    </div>
                    <div className="row text-center py-5 justify-content-center">

                        <FilterBar />

                    </div>
                    <div className="row text-center py-2">
                    {newsList.map(element => {
              return <EditNews  news = {element}/>  
            })}
                       
                       
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
