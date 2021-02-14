import React from 'react'
import NewsComp from './newsComp'
import FilterBar from './FilterBar'
import Pagination from './pagination'
import AddNews from './addNews'
import EditNews from './editNews'
export default function Admin() {
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
                        <EditNews />
                        <EditNews />
                        <EditNews />
                        <EditNews />
                       
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
