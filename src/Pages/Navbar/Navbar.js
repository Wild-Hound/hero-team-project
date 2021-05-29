import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-black" aria-current="page" href="#">Home</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link ms-5" href="#">Home</a>
                    </li> */}
                    <li class="nav-item">
                        <a class="nav-link ms-5 text-black" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-5 text-black" href="#">Products</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link ms-5 text-black" href="#">Reviews</a>
                    </li> */}
                    {/* <li class="nav-item"> 
                        <a class="nav-link ms-5 text-black" href="#">Blogs</a>
                    </li> */}
                    <li class="nav-item">
                        <a class="nav-link ms-5 text-black" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;