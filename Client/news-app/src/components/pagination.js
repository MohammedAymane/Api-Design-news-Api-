import React , {useState} from 'react'

export default function Pagination(props) {
    
    const handleNext = (e)=>{
       
        props.setPager(1)
    }
    const handlePre = (e)=>{
       

            
            props.setPager(-1)
        
        
    }
    return (
        <div className="container d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#" onClick = {handlePre}>Previous</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" onClick = {handleNext}>Next</a>
                            </li>
                        </ul>
                    </nav>

                </ul>
            </nav>

        </div>
    )
}
