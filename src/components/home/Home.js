import React from 'react'
import Wallpaper from '../wallpaper/Wallpaper';

const Home = (props) => {

  const style = {
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center"
  }

  return (
    <>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <ul className="my-3 list-group border border-info " id='category' style={style}>
                <a href="/anime" className="list-group-item list-group-item-action " >Anime</a>
                <a href="/bikes" className="list-group-item list-group-item-action " >Bikes</a>
                <a href="/cars" className="list-group-item list-group-item-action " >Cars</a>
                <a href="/dark" className="list-group-item list-group-item-action " >Dark</a>
                <a href="/games" className="list-group-item list-group-item-action " >Games</a>
                <a href="/nature" className="list-group-item list-group-item-action " >Nature</a>
              </ul>
            </div>
            <div className="col-md-9 border border-info">
              <Wallpaper category={props.category} />
            </div>
          </div>
        </div>
    </>
  )
}

export default Home