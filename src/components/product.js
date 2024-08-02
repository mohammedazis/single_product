import React from 'react'

function Product() {
  return (
    <div>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <meta name="keywords" content="EscrowBChain" />
        <meta name="description" content="Niche Home Decor, Accessories, Clothing, Kitchen & Bar, Art, Gifts" />
        <link rel="icon" type="image/png" href="assets/images/niche-star.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
        <link rel="stylesheet prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" /> 
        <title>New - Product Page </title>
        <header>
          <h1 hidden>Welcome to Niche Website</h1>
          <div className="bg-img">
            <nav className="navbar navbar-expand-md navbar-light fixed-top navi">
              <a className="navbar-brand" href="index.html"><img src="" alt="screen Logo" className="logo mobile-logo" /></a>
              <div className="navbar-toggler-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
              <div className="collapse navbar-collapse flex-column navigation-bar" id="navbar">
                <div className="container-fluid">
                  <form className="form-inline search-form">
                    <div>
                      <select className="selectpicker rounded-pill form-input">
                        <option>₹</option>
                        <option>USD</option>
                        <option>EUR</option>
                      </select>
                    </div>
                    <div className="input-group rounded-pill form-input justify-content-center">
                      <div className="input-group-prepend border-0">
                        <button id="button-addon4" type="button" className="btn btn-link text-info"><i className="fa fa-search search-icon" /></button>
                      </div>
                      <input type="search" placeholder="Search" aria-describedby="button-addon4" className="form-control bg-none border-0" />
                    </div>
                  </form>
                  <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav navi-list" style={{marginLeft: 'auto'}}>
                      <a className="navbar-brand" href="index.html"><img src="assets/images/niche-logo.png" alt="Niche Logo" className="logo desktop-logo" /></a>   
                    </ul>
                  </div> 
                  <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav navi-list2">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">
                          <i className="far fa-user" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <a className="dropdown-item" href="profile.html">Profile</a>
                          <a className="dropdown-item" href="contact-us.html">Contact Us</a>
                          <a className="dropdown-item" href="#">Settings</a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">Log out</a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link"><i className="fas fa-shopping-cart" /></a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link"><i className="far fa-star" /></a>
                      </li>   
                    </ul>
                  </div>  
                </div>
                <div className="container-fluid">
                  <ul className="navbar-nav justify-content-center w-100 menu2">
                    <li className="nav-item active">
                      <a className="nav-link" href="daily-discovery.html">Daily Discovery</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Art
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Prints &amp; Paintings</a>
                        <a className="dropdown-item" href="#">Prints &amp; Posters</a>
                        <a className="dropdown-item" href="#">Photography Prints</a>
                        <a className="dropdown-item" href="#">Painting</a>
                        <a className="dropdown-item" href="#">Collectibles</a>
                        <a className="dropdown-item" href="#">Sculpture</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="home-decor.html"> Home Decor </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Kitchen &amp; Bar</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Accessories
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Face Masks</a>
                        <a className="dropdown-item" href="#">Fitness &amp; Sports</a>
                        <a className="dropdown-item" href="#">Beauty &amp; Wellness</a>
                        <a className="dropdown-item" href="#">Bags</a>
                        <a className="dropdown-item" href="#">BackPacks</a>
                        <a className="dropdown-item" href="#">Weekenders &amp; Duffle</a>
                        <a className="dropdown-item" href="#">Laptop Cases</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Clothing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Gifts</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sales</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <main>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <button className="help-btn"><i className="far fa-question-circle" /><br />Help</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <a href="#" className="menu-herf">Home </a>
                <a href="#" className="menu-herf">| Shop </a>
                <a href="#" className="menu-herf">| Accessories </a>
                <a href="#" className="menu-herf">| Bags </a>
                <a href="#" className="menu-herf2">| Product by Up-fuse </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mb-4">
                <div className="row">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-12 col-6 mb-3">
                        <img src="https://assets.sangeethamobiles.com/product_img/14503/1694714823_KSI.jpg" className="product-photo-side" />
                      </div>
                      <div className="col-md-12 col-6 mb-3">
                        <img src="https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1694758834&width=823" className="product-photo-side" />
                      </div>
                      <div className="col-md-12 col-6 mb-3">
                        <img src="https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-2__en-IN.jpg?v=1694758839&width=2048" className="product-photo-side" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <img src="https://assets.sangeethamobiles.com/product_img/14503/1694714823_KSI.jpg" className="product-photo-center" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="row justify-content-start">
                      <div className="col-md-10">
                        <i className="fa fa-star star-icon7"> </i>
                        <i className="fa fa-star star-icon7" />
                        <i className="fa fa-star star-icon7" />
                        <i className="fa fa-star star-icon7" />
                        <i className="fa fa-star star-icon7" />
                        &nbsp; &nbsp;
                        <i className="fas fa-heart heart-icon1" />
                        <span className="num-likes">1.2k Likes</span>
                      </div>
                      <div className="col-md-10">
                        <p className="section-title6 mb-0">Folder Laptop Cases</p>
                        <p className="section-title2 mb-0">500 ₹</p>
                        <p className="lines-title">By Up-fuse</p>
                      </div>
                      <div className="col-md-10">
                        <p className="lines-title mb-1">Color: Black</p>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="color1"><span className="pl-2">(2)</span></div>
                        <div className="color2"><span className="pl-2">(2)</span></div>
                        <div className="color3"><span className="pl-2">(2)</span></div>
                        <div className="color4"><span className="pl-2">(2)</span></div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <p className="lines-title mb-0">Size:</p>
                        <span className="size1">13”</span>
                        <span className="size2">15”</span>
                      </div>
                      <div className="col-md-12 mb-3">
                        <button className="btn cart-btn2">Add to Cart <i className="fas fa-shopping-cart" /></button>
                      </div>
                      <div className="col-md-10 mb-4">
                        <div className="row no-gutter">
                          <div className="col-md-6 col-5">
                            <button className="btn wishlist-btn"> 
                              <i className="far fa-star" />
                              <p className="mb-0">Wishlist it</p>
                            </button>
                          </div>
                          <div className="col-md-6 col-5">
                            <button className="btn like-btn"> 
                              <i className="far fa-heart" />
                              <p className="mb-0">Like it</p>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10 mb-5">
                        <span className="share-on">Share on: </span> 
                        <i className="fab fa-whatsapp icons-share" />
                        <i className="fab fa-facebook-f icons-share" />
                      </div>
                      <div className="col-md-12">
                        <p className="product-descrip mb-0">Product Description</p>
                        <ul className="list-group product-list">
                          <li>Made of material:</li>
                          <li>Used in…</li>
                          <li>Has outer pocket</li>
                          <li>Has outer pocket</li>
                          <li>Has outer pocket</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spaces1" />
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row justify-content-start">
                      <div className="col-md-12">
                        <p className="rating-text"> 5/5 </p>
                      </div>
                      <div className="col-md-2 col-6 text-center mt-2 mb-2 no-padding">
                        <i className="fa fa-star fa-lg star-icon4"> </i>
                        <i className="fa fa-star-half-alt fa-lg star-icon4" />
                        <i className="far fa-star fa-lg star-icon4" />
                        <i className="far fa-star fa-lg star-icon4" />
                        <i className="far fa-star fa-lg star-icon4" />
                      </div>
                      <div className="col-md-2 col-6 no-padding">
                        <button className="review-btn">Add a review</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      {/* <div class="col-md-12">
                                <p class="rating-text"> 5/5 </p>
                            </div>
                            <div class="col-md-7 col-6 text-center mt-2 mb-2">
                                    <i class="fa fa-star fa-lg star-icon4"> </i></li>
                                    <i class="fa fa-star-half-alt fa-lg star-icon4"></i></li>
                                    <i class="far fa-star fa-lg star-icon4"></i></li>
                                    <i class="far fa-star fa-lg star-icon4"></i></li>
                                    <i class="far fa-star fa-lg star-icon4"></i></li>
                            </div>
                            <div class="col-md-5 col-6 no-padding">
                                <button class="review-btn">Add a review</button>
                            </div> */}
                      <div className="col-md-12">
                        <div className="line1" />
                      </div>
                      <div className="col-md-12">
                        <p className="reviewer-text">Amount of reviewers </p>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-12">
                        <div className="row progress-bg">
                          <div className="col-md-6 col-5">
                            <span className="rating-num mr-3">  5 </span> 
                            <i className="fa fa-star star-icon5" />
                            <span className="reviewer-num ml-3"> (25) </span>
                          </div>
                          <div className="col-md-6 col-7 mt-2">
                            <div className="progress progress-wait">
                              <div className="progress-bar progress-done" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-1">
                        <div className="row">
                          <div className="col-md-6 col-5">
                            <span className="rating-num mr-3">  4 </span> 
                            <i className="far fa-star star-icon5" />
                            <span className="reviewer-num ml-3"> (6) </span>
                          </div>
                          <div className="col-md-6 col-7 mt-2">
                            <div className="progress progress-wait">
                              <div className="progress-bar progress-done" role="progressbar" style={{width: '60%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-1">
                        <div className="row">
                          <div className="col-md-6 col-5">
                            <span className="rating-num mr-3">  3 </span> 
                            <i className="far fa-star star-icon5" />
                            <span className="reviewer-num ml-3"> (6) </span>
                          </div>
                          <div className="col-md-6 col-7 mt-2">
                            <div className="progress progress-wait">
                              <div className="progress-bar progress-done" role="progressbar" style={{width: '35%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-1">
                        <div className="row">
                          <div className="col-md-6 col-5">
                            <span className="rating-num mr-3">  2 </span> 
                            <i className="far fa-star star-icon5" />
                            <span className="reviewer-num ml-3"> (1) </span>
                          </div>
                          <div className="col-md-6 col-7 mt-2">
                            <div className="progress progress-wait">
                              <div className="progress-bar progress-done" role="progressbar" style={{width: '30%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-1">
                        <div className="row">
                          <div className="col-md-6 col-5">
                            <span className="rating-num mr-3">  1 </span> 
                            <i className="far fa-star star-icon5" />
                            <span className="reviewer-num ml-3"> (1) </span>
                          </div>
                          <div className="col-md-6 col-7 mt-2">
                            <div className="progress progress-wait">
                              <div className="progress-bar progress-done" role="progressbar" style={{width: '15%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="row justify-content-center">
                      <div className="col-md-9 col-9">
                        <p className="users-reviews mb-2"> Reviews by the users</p>
                      </div>
                      <div className="col-md-9 col-9">
                        <p className="users-name mb-0"> Ahmed 30 years old</p>
                      </div>
                      <div className="col-md-9 col-9">
                        <p className="star-icon6 mb-1">
                          <i className="fas fa-star star-icon6" />
                          <i className="fas fa-star star-icon6" />
                          <i className="fas fa-star star-icon6" />
                          <i className="fas fa-star star-icon6" />
                          <i className="fas fa-star star-icon6" />
                          <span className="users-stars mb-1"> (5 stars) Reviews</span>
                        </p>
                      </div>
                      <div className="col-md-9 col-9">
                        <p className="users-use mb-1"> Product used in: office</p>
                      </div>
                      <div className="col-md-9 col-9 mb-2">
                        <p className="users-recommend"> 
                          I liked the bags’ structure, 
                          and bought my 2nd bag wit the same brand. 
                          Delivery was fast!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-12">
                        <img src="" className="reviewer-photo" />
                        <p className="users-photo mb-1"> Photo taken by the user</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spaces1" />
            <div className="row">
              <div className="col-md-12">
                <p className="section-title4">You may also Like </p>
              </div>
              <div className="col-md-12">
                <div className="discovers-grid">
                  <a href="#">
                    <figure>
                      <div className="image-icons">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.QVBY30VqTi-tlYt_BaoGqAHaEo&pid=Api&P=0&h=220" />
                        <i className="far fa-heart heart-icon" />
                        <i className="far fa-star star-icon" />
                        <i className="fas fa-share-alt share-icon" />
                        <button className="cart-btn">Add to Cart <i className="fas fa-shopping-cart" /></button>
                      </div>
                      <figcaption className="discover-caption">
                        <p className="discover-subtitle">Hassan Salem Designs</p>
                        <p className="discover-title">Product Name</p>
                        <div className="price-div">
                          <p className="price">300 ₹</p>
                          <p className="sale-price">200 ₹</p>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#">
                    <figure>
                      <div className="image-icons">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.cYww58vgVLnYHbbuOhz4MAHaEE&pid=Api&P=0&h=220" />
                        <i className="far fa-heart heart-icon" />
                        <i className="far fa-star star-icon" />
                        <i className="fas fa-share-alt share-icon" />
                        <button className="cart-btn">Add to Cart <i className="fas fa-shopping-cart" /></button>
                      </div>
                      <figcaption className="discover-caption">
                        <p className="discover-subtitle">Hassan Salem Designs</p>
                        <p className="discover-title">Product Name</p>
                        <div className="price-div">
                          <p className="price">300 ₹</p>
                          <p className="sale-price">200 ₹</p>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#">
                    <figure>
                      <div className="image-icons">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.rBt148ufwi8Dfa7xxNUypwHaI0&pid=Api&P=0&h=220" />
                        <i className="far fa-heart heart-icon" />
                        <i className="far fa-star star-icon" />
                        <i className="fas fa-share-alt share-icon" />
                        <button className="cart-btn">Add to Cart <i className="fas fa-shopping-cart" /></button>
                      </div>
                      <figcaption className="discover-caption">
                        <p className="discover-subtitle">Hassan Salem Designs</p>
                        <p className="discover-title">Product Name</p>
                        <div className="price-div">
                          <p className="price">300 ₹</p>
                          <p className="sale-price">200 ₹</p>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#">
                    <figure>
                      <div className="image-icons">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.cYww58vgVLnYHbbuOhz4MAHaEE&pid=Api&P=0&h=220" />
                        <i className="far fa-heart heart-icon" />
                        <i className="far fa-star star-icon" />
                        <i className="fas fa-share-alt share-icon" />
                        <button className="cart-btn">Add to Cart <i className="fas fa-shopping-cart" /></button>
                      </div>
                      <figcaption className="discover-caption">
                        <p className="discover-subtitle">Hassan Salem Designs</p>
                        <p className="discover-title">Product Name</p>
                        <div className="price-div">
                          <p className="price">300 ₹</p>
                          <p className="sale-price">200 ₹</p>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
            <div className="spaces1" />
            <div className="row">
              <div className="col-md-12">
                <p className="section-title4">Products from up-fuse </p>
              </div>
              <div className="col-md-12">
                <div className="discovers-grid">
                  <a href="#">
                    <figure>
                      <div className="image-icons">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.rBt148ufwi8Dfa7xxNUypwHaI0&pid=Api&P=0&h=220" />
                        <i className="far fa-heart heart-icon" />
                        <i className="far fa-star star-icon" />
                        <i className="fas fa-share-alt share-icon" />
                        <button className="cart-btn">Add to Cart <i className="fas fa-shopping-cart" /></button>
                      </div>
                      <figcaption className="discover-caption">
                        <p className="discover-subtitle">Hassan Salem Designs</p>
                        <p className="discover-title">Product Name</p>
                        <div className="price-div">
                          <p className="price">300 ₹</p>
                          <p className="sale-price">200 ₹</p>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#">
                    <figure>
                      <div className="image-icons">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.f10mAp7Jk0Luel5vbFe_cgHaHa&pid=Api&P=0&h=220" />
                        <i className="far fa-heart heart-icon" />
                        <i className="far fa-star star-icon" />
                        <i className="fas fa-share-alt share-icon" />
                        <button className="cart-btn">Add to Cart <i className="fas fa-shopping-cart" /></button>
                      </div>
                      <figcaption className="discover-caption">
                        <p className="discover-subtitle">Hassan Salem Designs</p>
                        <p className="discover-title">Product Name</p>
                        <div className="price-div">
                          <p className="price">300 ₹</p>
                          <p className="sale-price">200 ₹</p>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#">
                    <figure>
                      <div className="image-icons">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.f10mAp7Jk0Luel5vbFe_cgHaHa&pid=Api&P=0&h=220" />
                        <i className="far fa-heart heart-icon" />
                        <i className="far fa-star star-icon" />
                        <i className="fas fa-share-alt share-icon" />
                        <button className="cart-btn">Add to Cart <i className="fas fa-shopping-cart" /></button>
                      </div>
                      <figcaption className="discover-caption">
                        <p className="discover-subtitle">Hassan Salem Designs</p>
                        <p className="discover-title">Product Name</p>
                        <div className="price-div">
                          <p className="price">300 ₹</p>
                          <p className="sale-price">200 ₹</p>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#">
                    <figure>
                      <div className="image-icons">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.59TWNUIMi9JqeQ1oiEwVLQAAAA&pid=Api&P=0&h=220" />
                        <i className="far fa-heart heart-icon" />
                        <i className="far fa-star star-icon" />
                        <i className="fas fa-share-alt share-icon" />
                        <button className="cart-btn">Add to Cart <i className="fas fa-shopping-cart" /></button>
                      </div>
                      <figcaption className="discover-caption">
                        <p className="discover-subtitle">Hassan Salem Designs</p>
                        <p className="discover-title">Product Name</p>
                        <div className="price-div">
                          <p className="price">300 ₹</p>
                          <p className="sale-price">200 ₹</p>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
            <div className="spaces" />
            <br />
          </div>
        </main>
        <br /><br />
        <footer className="niche-footer">
          <div className="container">
            <div className="row"> 
              <div className="col-md-10 offset-md-1 col-10 offset-1">							
                <div className="row">
                  <div className="col-md-3">
                    <p className="footer-title">Get to know us</p>
                    <p className="footer-info">Privacy Policy</p>
                    <p className="footer-info">Terms &amp; Conditions</p>
                  </div>
                  <div className="col-md-3">
                    <p className="footer-title">Info</p>
                    <p className="footer-info">FAQs</p>
                    <p className="footer-info">Return Policy</p>
                    <p className="footer-info">Contact Us</p>
                  </div>
                  <div className="col-md-3">
                    <p className="footer-title">Account</p>
                    <p className="footer-info">My Account</p>
                    <p className="footer-info">My orders</p>
                    <p className="footer-info">Order Tracking</p>
                    <p className="footer-info">Gift Card Balance</p>
                  </div>
                  <div className="col-md-3">
                    <p className="footer-title">Designers</p>
                    <p className="footer-info">Become a Designer</p>
                    <p className="footer-info">Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  );


















    </div>
  )
}

export default Product