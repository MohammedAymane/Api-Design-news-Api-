import React from 'react'

export default function FilterBar(props) {
    const fields = [
        "Sports",
        "Economie",
        "Politique"
    ]
    const handleLimitChange = (e) => {
        props.changeLimitInf(e.target.value)

    }
    const handleFilterChange = (e) => { }
    return (
        <div className="container d-flex justify-content-center">
            <div className="row text-center">
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text  badge-dark" id="inputGroup-sizing-default">Page size</span>
                        </div>
                        <input type="number" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={handleLimitChange} />
                    </div>

                </div>
                <div className="col ">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text  badge-dark" id="inputGroup-sizing-default">Sort</span>
                        </div>
                        <select class="custom-select">
                            
                            <option value={1}selected onClick = {()=>{
                               props.sort("date")
                           }}>Date</option>
                            <option value={2} onClick = {()=>{
                               props.sort("field")
                           }}>Field</option>


                        </select>                    
                        </div>


                </div>
                <div className="col ">
                <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text  badge-dark" id="inputGroup-sizing-default">Filer by field</span>
                        </div>
                        <select class="custom-select" id={"inputGroupSelect01"}>
                          <option value={-1}  onClick = {()=>{
                               props.filter("all")
                           }}>all</option>
                    {fields.map((field,i)=>{
                        
                       
                           return  <option value={i} onClick = {()=>{
                               props.filter(field)
                           }}>{field}</option>
                        
                    })}
    
  </select>                   
                        </div>
                </div>
            </div>




        </div>
    )
}
