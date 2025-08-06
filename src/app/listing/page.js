import React from "react";

export default function Listing() {
  return (
    <>
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" alt="Plotlist Logo" />
                </a>
                <ul className="nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="category.html">Category</a>
                  </li>
                  <li>
                    <a href="listing.html">Listing</a>
                  </li>
                  <li>
                    <a href="contact.html" className="active">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <div className="main-white-button">
                      <a href="#">
                        <i className="fa fa-plus" /> Add Your Listing
                      </a>
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

      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="top-text header-text">
                <h6>Keep in touch with us</h6>
                <h2>Feel free to send us a message about your business needs</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div id="map">
                      <iframe
                        src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="650px"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Map"
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <form id="contact" action="contact-form-handler.php" method="post">
                      <div className="row">
                        <div className="col-lg-6">
                          <fieldset>
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Name"
                              autoComplete="on"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <label htmlFor="surname">Surname</label>
                            <input
                              type="text"
                              name="surname"
                              id="surname"
                              placeholder="Surname"
                              autoComplete="on"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <label>I'm interested in:</label>
                          <ul>
                            <li>
                              <input
                                type="checkbox"
                                name="interest[]"
                                value="cars"
                                id="cars"
                              />
                              <label htmlFor="cars">
                                <span>Cars</span>
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                name="interest[]"
                                value="apartments"
                                id="apartments"
                              />
                              <label htmlFor="apartments">
                                <span>Apartments</span>
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                name="interest[]"
                                value="shopping"
                                id="shopping"
                              />
                              <label htmlFor="shopping">
                                <span>Shopping</span>
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                name="interest[]"
                                value="food"
                                id="food"
                              />
                              <label htmlFor="food">
                                <span>Food &amp; Life</span>
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                name="interest[]"
                                value="traveling"
                                id="traveling"
                              />
                              <label htmlFor="traveling">
                                <span>Traveling</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <label htmlFor="message">Message</label>
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              placeholder="Message"
                              required
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="main-button">
                              <i className="fa fa-paper-plane" /> Send Message
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about">
                <div className="logo">
                  <img src="assets/images/black-logo.png" alt="Plot Listing Template" />
                </div>
                <p>
                  If you consider that{" "}
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/tm-564-plot-listing"
                    target="_parent"
                    
                  >
                    Plot Listing template
                  </a>{" "}
                  is useful for your website, please{" "}
                  <a
                    rel="nofollow"
                    href="https://www.paypal.me/templatemo"
                    target="_blank"
                    
                  >
                    support us
                  </a>{" "}
                  a little via PayPal.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="helpful-links">
                <h4>Helpful Links</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <a href="#">Categories</a>
                      </li>
                      <li>
                        <a href="#">Reviews</a>
                      </li>
                      <li>
                        <a href="#">Listing</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Awards</a>
                      </li>
                      <li>
                        <a href="#">Useful Sites</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
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
                    <a href="#">010-020-0340</a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#">090-080-0760</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="sub-footer">
                <p>
                  Copyright © 2025 Plot Listing Co., Ltd. All Rights Reserved.
                  <br />
                  Design:{" "}
                  <a
                    rel="nofollow"
                    href="https://templatemo.com"
                    title="CSS Templates"
                    
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
