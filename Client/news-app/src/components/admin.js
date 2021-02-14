import React from 'react'
import NewsComp from './newsComp'
import FilterBar from './FilterBar'
import Pagination from './pagination'
import AddNews from './addNews'
export default function Admin() {
    return (
        <div>
           <div>
            <div class="jumbotron jumbotron-fluid text-center">
                
            <h1 class="display-1">this is admin news page</h1>
            </div>
            <div className = "container  justify-content-center">
                <AddNews/>
                <div className = "row text-center py-5">
                <FilterBar/>
                  
                </div>
            <div className = "row text-center py-2">
            
             <NewsComp/>
             <NewsComp/>
             <NewsComp/>
            </div>
             <Pagination/>
        </div>
        </div>
        </div>
    )
}
