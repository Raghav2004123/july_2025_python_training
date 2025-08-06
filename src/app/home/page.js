import React from 'react';

export default function Home() {
  return (
    <>
      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="/" className="logo"></a>
                <ul className="nav">
                  <li><a href="/" className="active">Home</a></li>
                  <li><a href="/category">Category</a></li>
                  <li><a href="/listing">Listing</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li>
                    <div className="main-white-button">
                      <a href="#"><i className="fa fa-plus"></i> Add Your Listing</a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                <h6>Over 36,500+ Active Listings</h6>
                <h2>Find Nearby Places &amp; Things</h2>
              </div>
            </div>

            <div className="col-lg-12">
              <form id="search-form" name="gs" method="submit" role="search" action="#">
                <div className="row">
                  <div className="col-lg-3 align-self-center">
                    <fieldset>
                      <select name="area" className="form-select" aria-label="Area" id="chooseArea">
                        <option>All Areas</option>
                        <option value="New Village">New Village</option>
                        <option value="Old Town">Old Town</option>
                        <option value="Modern City">Modern City</option>
                      </select>
                    </fieldset>
                  </div>

                  <div className="col-lg-3 align-self-center">
                    <fieldset>
                      <input type="text" name="address" className="searchText" placeholder="Enter a location" autoComplete="on" required />
                    </fieldset>
                  </div>

                  <div className="col-lg-3 align-self-center">
                    <fieldset>
                      <select name="price" className="form-select" aria-label="Price Range" id="choosePrice">
                        <option>Price Range</option>
                        <option value="$100 - $250">$100 - $250</option>
                        <option value="$250 - $500">$250 - $500</option>
                        <option value="$500 - $1000">$500 - $1,000</option>
                        <option value="$1000+">$1,000 or more</option>
                      </select>
                    </fieldset>
                  </div>

                  <div className="col-lg-3">
                    <fieldset>
                      <button className="main-button" type="submit"><i className="fa fa-search"></i> Search Now</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* The rest of your layout goes here */}
      {/* Follow the same pattern: replace class -> className and fix any inline JS */}

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about">
                <div className="logo">
                  <img src="assets/images/black-logo.png" alt="Plot Listing" />
                </div>
                <p>If you consider that <a href="https://templatemo.com/tm-564-plot-listing" target="_blank" rel="noreferrer">Plot Listing template</a> is useful for your website, please <a href="https://www.paypal.me/templatemo" target="_blank" rel="noreferrer">support us</a> via PayPal.</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="helpful-links">
                <h4>Helpful Links</h4>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li><a href="#">Categories</a></li>
                      <li><a href="#">Reviews</a></li>
                      <li><a href="#">Listing</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Awards</a></li>
                      <li><a href="#">Useful Sites</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-us">
                <h4>Contact Us</h4>
                <p>27th Street of New Town, Digital Villa</p>
                <div className="row">
                  <div className="col-lg-6">
                    <a href="tel:0100200340">010-020-0340</a>
                  </div>
                  <div className="col-lg-6">
                    <a href="tel:0900800760">090-080-0760</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="sub-footer">
                <p>
                  &copy; 2021 Plot Listing Co., Ltd. All Rights Reserved.
                  Design: <a href="https://templatemo.com" rel="noreferrer">TemplateMo</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
