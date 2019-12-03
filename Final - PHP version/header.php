<?php 
$directoryURI = $_SERVER['REQUEST_URI'];
$path = parse_url($directoryURI, PHP_URL_PATH);
$components = explode('/', $path);
?>

<body>
    <!--Start Navbar-->
    <header class="m-head jsHead">
        <div class="m-head__content">
            <div class="contain">
                <nav class="m-head__nav">
                    <div class="m-head__home">
                        <a href="#">
                            <picture>
                                <source media="(min-resolution: 192dpi)"
                                    srcset="images/catmugs1.png">
                                <img class="m-head__logo" alt="CatMugs"
                                    src="images/catmugs2.png">
                            </picture>
                        </a>
                    </div>
                    <div class="m-head__site-navs">
                        <div class="m-head__site-nav--menu m-head__account jsDropdown">
                            <div class="m-head__site-nav">
                                <a class="m-head__avatar-link jsDropdownTouch">
                                    <i class="icon touchable tp tp-user icon-l1 m-head__nav-icon"></i>
                                </a>
                                <div class="m-head__dropdown-arrow"></div>
                                <div class="m-head__dropdown">
                                    <nav class="m-head__dropdown-links">
                                        <a class="mtrl-modal-trigger m-head__dropdown-link" href="#login-modal"
                                            id="create-link">
                                            Create Account
                                        </a>
                                        <a class="mtrl-modal-trigger m-head__dropdown-link" href="#login-modal"
                                            id="login-link"
                                            onclick="$('#login-modal').show_login_options($('#account-login'));">
                                            Log In
                                        </a>
                                        <a class="m-head__dropdown-link" href="/signup/designer/sell-art-online">Contact/FAQ</a>
                                        <a class="m-head__dropdown-link" href="/signup/designer/sell-art-online">About
                                            CatMugs</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="m-head__site-nav--menu jsDropdown jsHeadCart">
                            <div class="m-head__site-nav m-head__cart">
                                <a class="jsDropdownTouch" href="/cart">
                                    <i class="icon touchable tp tp-cart icon-l1 m-head__nav-icon"></i>
                                </a>
                                <div class="m-head__dropdown-arrow"></div>
                                <div class="m-head__dropdown">
                                    <div class="m-head__cart-content">
                                        <div class="m-head__dropdown-head">
                                            <span class="h h5 h--no-s">My cart</span>
                                            <span class="link link--1 jsDropdownTouch">
                                                <i class="icon-l1 tp tp-x-light" id="cart"></i>
                                            </span>
                                        </div>
                                        <div class="active jsHeadCartEmpty m-head__cart-empty text-block">
                                            <p>Your cart is looking pretty empty!</p>
                                            <a class="btn btn--large btn--full" id="shopNow" href="/t-shirts">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="m-head__site-nav m-head__sidenav-ctrl">
                            <a class="hamburger-menu jsSiteSideNavCtrl" data-activates="slide-out" href="#">
                                <i class="icon tp tp-hamburger"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div class="m-head__tagline">
            <div class="contain m-head__tagline-cont">
                <a class="link" href="#" target="_blank">
                    5% of each purchase goes toward animal shelters.
                </a>
            </div>
        </div>

        <nav class="contain">
            <div class="m-head__subnav">
                <div class="m-head__subnav-menu m-head__browse jsDropdown jsDropdownTouch">
                    <a class="h__h3--loud link link--2 gtmHeaderLink" data-gtm-header-link-text="Browse"
                        href="/t-shirts" id="nav1">Browse</a>
                    <div class="m-head__dropdown-arrow"></div>
                    <div class="m-head__dropdown jsDropdownContent">
                        <nav class="m-head__dropdown-links jsDropdownLinks">
                            <a class="gtmHeaderLink" data-gtm-header-link-text="All Designs" href="#">All
                                Mugs</a>
                            <a class="gtmHeaderLink" data-gtm-header-link-text="New Tees on Sale"
                                href="#">Most Popular</a>
                            <a class="gtmHeaderLink" data-gtm-header-link-text="Featured Designers"
                                href="#">Mugs on Sale</a>
                            <a class="gtmHeaderLink" data-gtm-header-link-text="Newest Designers"
                                href="#">Newest Designers</a>
                        </nav>
                    </div>
                </div>
                <div class="m-head__subnav-menu jsDropdown jsDropdownTouch" >
                    <a class="h__h3--loud link link--2" href="#" id="nav2">Cat Shaped Mugs</a>
                </div>
                <div class="m-head__subnav-menu jsDropdown jsDropdownTouch">
                    <a class="h__h3--loud link link--2" href="#" id="nav3">Cat Print Mugs</a>
                </div>
                <div class="m-head__subnav-menu jsDropdown jsDropdownTouch">
                    <a class="h__h3--loud link link--2" href="#" id="nav3">Pusheen Mugs</a>
                </div>
            </div>
        </nav>
    </header>