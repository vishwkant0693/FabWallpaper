import React from 'react'

const Upload = () => {
  const fileInput = document.getElementById("fileInput");
  const titleInput = document.getElementById("titleInput");
  const categoryInput = document.getElementById("categoryInput");
  const uploaderInput = document.getElementById("uploaderInput");


  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="mb-3">
              <label for="titleInput" className="form-label">Title</label>
              <input type="title" className="form-control" id="titleInput" placeholder="" />
            </div>
            <div className="mb-3">
              <label for="categoryInput" className="form-label">Category</label>
              <select className="form-select" aria-label="Default select example" id="categoryInput">
                <option selected>Category</option>
                <option value="anime">Anime</option>
                <option value="bikes">Bikes</option>
                <option value="cars">Cars</option>
                <option value="dark">Dark</option>
                <option value="games">Games</option>
                <option value="nature">Nature</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="uploaderInput" className="form-label">Uploaded By</label>
              <input type="email" className="form-control" id="uploaderInput" placeholder="" />
            </div>
            <div className="mb-3">
              <label for="formFile" className="form-label">Select File</label>
              <input className="form-control" type="file" id="fileInput" />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mt-4 mb-5">
              <button className="btn btn-success" type="button">Upload</button>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  )
}

export default Upload