import React,{useState} from 'react'

export default function EditNews(props) {
  const fields = [
      "Sports",
      "Economie",
      "Politique"
  ]
  const [news, setnews] = useState(props.news)
    return (
        <div className = "container-fluid d-flex justify-content-center  edit-news-cont">
            <form>
            
                <div className="form-group">
                    <label htmlFor={news.id+"exampleInputEmail1"}>Title of the news</label>
                    <input type="text" className="form-control" id={news.id+"exampleInputEmail1"} aria-describedby="emailHelp" placeholder="Enter title" defaultValue = {news.title}/>

                </div>
                <div className="form-group">
            <img src={news.photos} class="img-fluid rounded mx-auto d-block" alt="Responsive image"></img>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">News Body, What's happening?</label>
                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows={10} defaultValue={news.content} />
                </div>
                <div className="form-group d-flex justify-content-center">
                <select class="custom-select" id={"inputGroupSelect01"+ news.id}>
                    {fields.map((field,i)=>{
                        
                        if(field == news.field){
                            return <option value={i} selected>{field}</option>
                        }
                        else{
                           return  <option value={i}>{field}</option>
                        }
                    })}
    
  </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Add a photo</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <div className="form-group px-5">
                    <div className = "container ">
                        <div className  = "row">
                            <div className = "col ">
                            <button type="button" className="btn btn-secondary"> Update</button>

                            </div>
                            <div className = "col ">
                            <button type="button" className="btn btn-outline-secondary">Delete</button>

                            </div>
                        </div>
            
                    </div>
                     </div>
               

            </form>
        </div>
    )
}
