import React from 'react'
import NewsComp from './newsComp'
import FilterBar from './FilterBar'
import Pagination from './pagination'
export default function Admin() {
    return (
        <div>
           <div>
            <div class="jumbotron jumbotron-fluid text-center">
                
            <h1 class="display-1">this is admin news page</h1>
            </div>
            <div className = "container  justify-content-center">
                <div className = "row text-center">
                <FilterBar/>
                    <div className = 'col-4 '>
                
                    </div>
                    
                </div>
            <div className = "row text-center py-5">
            
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
