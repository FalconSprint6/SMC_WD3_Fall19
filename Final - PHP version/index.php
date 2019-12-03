<?php $title = "Home"; ?>

<?php require_once('head.php'); ?>
<?php require_once('header.php'); ?>
<!-- Side Nav that doesnt work-->
<!--<nav class="side-nav m-side-nav-site jsSiteSideNav active">
        <ul>
        <li class="side-nav__section side-nav__search side-nav__nav">
        <form action="/search_submission" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch"><input type="hidden" name="authenticity_token" value="tKci8B4wEqIY7I+IcRXS8RY07yEzeGSYbMf9avU9CJKMnLaJ859hY4j5zG4+RlThoR11u7jnxHRrnrti+6xP2w==">
        <div class="form-field-icon-wrap">
        <i class="icon tp tp-search"></i>
        <input type="text" name="query" id="query" class="form__control form__control--1 side-nav__search-field m-side-nav-site__search-field" placeholder="Search all designs">
        </div>
        </form>
        
        </li>
        <li class="side-nav__section">
        <span class="side-nav__h h h--4">My TeePublic</span>
        <ul>
        <li class="side-nav__nav">
        <a class="login mtrl-modal-trigger side-nav__link" href="#login-modal" id="login-link" onclick="$('#login-modal').show_login_options($('#account-login'));">
        <i class="tp tp-enter side-nav__icon icon-l1"></i>
        <span class="side-nav__nav-text">Sign In</span>
        </a><div style="display: none;"><a href="zyqfbeuezcrtstuxryrfecverbuvxvwvf.html" id="zzvzcxzwdvswcfvrfxzsvvuesqcuswbscy" rel="file">dwxqfazttswdre</a></div>
        </li>
        <li class="side-nav__nav">
        <a class="create-account mtrl-modal-trigger side-nav__link" href="#login-modal" id="create-link" onclick="$('#login-modal').show_login_options($('#account-creation'));">
        <i class="tp tp-plus-circle side-nav__icon icon-l1"></i>
        <span class="side-nav__nav-text">Create an Account</span>
        </a>
        </li>
        <li class="side-nav__nav">
        <a class="side-nav__link" href="/signup/designer/sell-art-online">
        <img class="side-nav__icon icon-l1" src="https://assets.teepublic.com/assets/logos/tp-crest-transparent-48x48-67a5566161549ad0afa49db25c91c3858e030d4f99f31b65e3db101c28494d01.png">
        <span class="side-nav__nav-text">About TeePublic</span>
        </a>
        </li>
        </ul>
        </li>
        <li class="side-nav__section">
        <span class="side-nav__h h h--4">Shop</span>
        <ul>
        <li class="side-nav__nav">
        <a class="side-nav__link" href="/t-shirts">
        <i class="tp tp-art-1 side-nav__icon icon-l1"></i>
        <span class="side-nav__nav-text">All Designs</span>
        </a>
        </li>
        <li class="side-nav__nav">
        <a class="side-nav__link" href="/t-shirts?sort=newest">
        <i class="tp tp-tag side-nav__icon icon-l1"></i>
        <span class="side-nav__nav-text">New Tees on Sale</span>
        </a>
        </li>
        <li class="side-nav__nav">
        <a class="side-nav__link" href="/featured-designers">
        <i class="tp tp-star side-nav__icon icon-l1"></i>
        <span class="side-nav__nav-text">Featured Designers</span>
        </a>
        </li>
        <li class="side-nav__nav">
        <a class="side-nav__link" href="/newest-designers">
        <i class="tp tp-new side-nav__icon icon-l1"></i>
        <span class="side-nav__nav-text">Newest Designers</span>
        </a>
        </li>
        </ul>
        </li>
        <li class="side-nav__nav">
        <button class="side-nav__link side-nav__link--button jsChangeIntlSettings">
        <img class="side-nav__icon icon-l1 side-nav__img" src="https://assets.teepublic.com/assets/icons/glyph__globe--dark@2x-5146dd82543b68a722f4a16b0f0314dee0cd041aa9ebd414ff42315382962f27.png">
        <span class="side-nav__nav-text">English (US) - $ USD</span>
        </button>
        </li>
        </ul>
        
        </nav>-->

    
    <!--End Navbar-->
    <!--Start Body-->
    <div class="container">
        <div class="row">
            <div class="col">
                    <div class="bd-example mb-4">
                            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                              <ol class="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                              </ol>
                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <img src="images/carousel1.jpg" class="d-block w-100" alt="...">
                                  <div class="carousel-caption d-none d-md-block">
                                    <h2 class="carH5">Cat Mug Sets</h2>
                                    <h3 class="carP">We got em!</h3>
                                  </div>
                                </div>
                                <div class="carousel-item">
                                  <img src="images/carousel2.jpg" class="d-block w-100" alt="...">
                                  <div class="carousel-caption d-none d-md-block">
                                        <h2 class="carH5">Cat Mug Sets</h2>
                                        <h3 class="carP">We got em!</h3>
                                  </div>
                                </div>
                                <div class="carousel-item">
                                  <img src="images/carousel3.jpg" class="d-block w-100" alt="...">
                                  <div class="carousel-caption d-none d-md-block">
                                    <h2 class="carH5">Cat Mug Sets</h2>
                                    <h3 class="carP">We got em!</h3>
                                  </div>
                                </div>
                              </div>
                              <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                              </a>
                              <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                              </a>
                            </div>
                          </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3 class="h__h3--loud mb-3">Newest Arrivals</h3>
            </div>
        </div>
        <div class="row">
                <div class="col-md-6">
                        <div class="card mb-3">
                                <img src="images/home-card-1.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h3 class="card-title">Don't Care Cat Mug</h3>
                                  <h2 class="card-text">$5.99</h2>
                                  <a href="product1.html" class="btn btn-primary">Go to Page</a>
                                  <a href="#" class="btn btn-primary">Add to Cart</a>
                                </div>
                              </div>
                </div>
                <div class="col-md-6">
                        <div class="card mb-3">
                                <img src="images/home-card-2.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h3 class="card-title">French Cat Mug</h3>
                                  <h2 class="card-text">$5.99</h2>
                                  <a href="product2.html" class="btn btn-primary">Go to Page</a>
                                  <a href="#" class="btn btn-primary">Add to Cart</a>
                                </div>
                              </div>
                </div>
                <div class="col-md-6">
                        <div class="card mb-3">
                                <img src="images/home-card-3.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h3 class="card-title">Pusheen Things I Love Mug</h3>
                                  <h2 class="card-text">$5.99</h2>
                                  <a href="product3.html" class="btn btn-primary">Go to Page</a>
                                  <a href="#" class="btn btn-primary">Add to Cart</a>
                                </div>
                              </div>
                </div>
                <div class="col-md-6">
                        <div class="card mb-3">
                                <img src="images/home-card-4.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h3 class="card-title">Black Cat Mug</h3>
                                  <h2 class="card-text">$5.99</h2>
                                  <a href="#" class="btn btn-primary">Go to Page</a>
                                  <a href="#" class="btn btn-primary">Add to Cart</a>
                                </div>
                              </div>
                </div>
        </div>
    </div>
<!--Newsletter-->

<?php require_once('footer.php'); ?>