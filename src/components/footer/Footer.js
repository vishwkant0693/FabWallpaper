import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const style = {
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center"
  }
  return (
    <>
      <div class="card text-center p-3 mb-2 bg-info-subtle text-emphasis-info">
        <div class="card-body">
          <a className="navbar-brand" href="">
            <img src="img/Navbar-title.png" alt="Bootstrap" width="250" height="28" />
          </a>
          <p class="mt-2 card-text">
            <GitHubIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
          </p>
        </div>
        <div class="card-footer text-body-secondary" style={style}>
          &#169; 2023 Designed by : Vishwkant
        </div>
      </div>
    </>
  )
}

export default Footer