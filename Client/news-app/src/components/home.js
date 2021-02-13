import React from 'react'
import NewsComp from './newsComp'
export default function Home() {
    return (
        <div className = "container-fluid d-flex justify-content-center py-2">
            <div className = "row text-center">
            <div className = "col-12 py-5">
                <h1>this is reading news page</h1>
                </div>
             <NewsComp/>
             <NewsComp/>
             <NewsComp/>
            </div>
             
        </div>
    )
}
