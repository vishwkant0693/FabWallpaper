import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav class="navbar bg-body-tertiary p-0 m-0">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img
                            src="img/Navbar-title.png"
                            alt="Bootstrap"
                            width="240"
                            height="24"
                        />
                    </a>
                    {/* <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/explore">Explore</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/upload">Upload</a>
                        </li>
                    </ul> */}
                </div>
            </nav>
        </>
    )
}

export default Header