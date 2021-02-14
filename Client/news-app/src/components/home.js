import React, { useState } from 'react';
import NewsComp from './newsComp'
import FilterBar from './FilterBar'
import Pagination from './pagination'

export default function Home() {
    const [page, setpage] = useState(1)
    const [limit, setlimit] = useState(10)
    const [newsList, setnewsList] = useState([
        {  title: "title",
            content: "desciption",
            photos: "https://html5box.com/html5gallery/images/Wilderness_1024.jpg",
            field: "field"},
            {  title: "title",
            content: "desciption",
            photos: "https://html5box.com/html5gallery/images/Wilderness_1024.jpg",
            field: "field"},
            {  title: "title",
            content: "desciption",
            photos: "https://html5box.com/html5gallery/images/Wilderness_1024.jpg",
            field: "field"}
    ])
    const   changeLimit = function(x){
        setlimit(x)
        
    }
    const   changePage = async function(x){
        setpage(page + x)  
    }
    return (
        <div>
            <div className="jumbotron jumbotron-fluid text-center">
                
            <h1 class="display-1">this is reading news page</h1>
            </div>
            <div className = "container  justify-content-center">
                <div className = "row text-center">
                <FilterBar changeLimitInf = {changeLimit} />             
                </div>
            <div className = "row text-center py-5">
            {newsList.map(element => {
              return <NewsComp  news = {element}/>  
            })}
            
            </div>
             <Pagination page = {page} setPager = {changePage}/>
        </div>
        </div>
       
    )
}
