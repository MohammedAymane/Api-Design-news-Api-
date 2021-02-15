import React, { useState,useEffect } from 'react';
import FilterBar from './FilterBar'
import Pagination from './pagination'
import AddNews from './addNews'
import EditNews from './editNews'
export default function Admin() {
    const URL  = "http://localhost:9000"
    const [page, setpage] = useState(1)
    const [limit, setlimit] = useState(10)
    const [Filter, setFilter] = useState("all")
    const [sort, setsort] = useState("date")
    const [newsList, setnewsList] = useState([
       
    ])
    useEffect(async () => {
        let urlFormater = URL + "/news?"
        if(Filter != "all"){
            urlFormater += "?filter=Field9" 
        }
        var data = await fetch(urlFormater)
        var json = await data.json();
        setnewsList(json)
    },[Filter])
    const   changeLimit = function(x){
        setlimit(x)
        
    }
    const   changePage = async function(x){
        if(page + x> 1){
            setpage(page + x) 
        }
        
    }
    const changeFilter = (filter)=>{
        setFilter(filter)

    }
    const changeSort = (sort)=>{
        setsort(sort)

    }
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

                    <FilterBar changeLimitInf = {changeLimit} filter = {changeFilter}  sort = {changeSort}/>             


                    </div>
                    <div className="row text-center my-2">
                    {newsList.map(element => {
               return( 
                <div className = "col-4">
                <EditNews  key = {element.id} news = {element}/>
                </div>)  
            })}
                       
                       
                    </div>
                    <Pagination page = {page} setPager = {changePage}/>
                </div>
            </div>
        </div>
    )
}
