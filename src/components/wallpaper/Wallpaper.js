import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Wallpaper = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3004/${props.category}`)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
  }, [props.category]);


  return (
    <>
      <div className="conatiner">
        <div className="row">
            <div className="shadow-sm p-3 mb-2 bg-body-tertiary rounded wallpapers ">
              {
                data.map((element) => (
                  <div className="card text-bg-dark" key={element.id}>
                    <img src={element.img} className="card-img" alt="..."/>
                      <div className="card-img-overlay">
                        <h5 className="card-title" style={{width:"20%",borderRadius:"30px",paddingLeft:"10px",WebkitTextStroke:"1px black",fontWeight:"bolder"}}>{element.title}</h5>
                        <div className="position-absolute bottom-0 end-0 translate-middle download">
                          <button type="button" className="btn btn-outline-info">Download</button>
                        </div>
                      </div>
                  </div>
                ))
              }
            </div>
        </div>
      </div>
    </>
  )
}

export default Wallpaper