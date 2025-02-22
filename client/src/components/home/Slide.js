import React from "react";
import "./Slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({items}) => { 
  return (
    <div className="products-section">
      { items && Object.keys(items).length &&
          <div className="products-items">
            {/* <!-- shop-section1 --> */}
            <div className="shop-section">
              {/* <!-- box1 --> */}
              <div className="box">
                <div className="box-content" id='product1'>
                  <h2>{items.at(0).tagline}</h2>
                  <NavLink to={`/getproduct/${items.at(0).id}`}  style={{ textDecoration: 'none' }}>
                  <div>
                    <div className="box-img">
                      <img src={items.at(0).url} className="box-img" alt="" />
                    </div>
                    <div className="discount">
                      <div className="off">
                        <p>{items.at(0).price.discount}</p>
                      </div>
                      <div className="time">
                        <p>Limited time deal</p>
                      </div>
                    </div>
                    <p className="title">{items.at(0).title.shortTitle}</p>
                    <div className="box1-footer">
                      <a href="" className="footer-name">
                        See all deals
                      </a>
                    </div>
                  </div>
                  </NavLink>
                </div>
              </div>

              {/* <!-- box2 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(1).tagline}</h2>
                  <NavLink to={`/getproduct/${items.at(1).id}`}  style={{ textDecoration: 'none' }}>
                  <div>
                    <div>
                      <img
                        src={items.at(1).url}
                        className="box2-img"
                        alt=""
                      />
                    </div>
                    <div className="box-footer">
                      <a href="" className="footer-name">
                        Shop now
                      </a>
                    </div>
                  </div>
                  </NavLink>
                </div>
              </div>

              {/* <!-- box3 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(2).tagline}</h2>
                  <NavLink to={`/getproduct/${items.at(2).id}`}  style={{ textDecoration: 'none' }}>
                  <div>
                    <div>
                      <img
                        src={items.at(2).url}
                        className="box2-img"
                        alt=""
                      />
                    </div>
                    <div className="box-footer">
                      <a href="" className="footer-name">
                        Shop now
                      </a>
                    </div>
                  </div>
                  </NavLink>
                </div>
              </div>

              {/* <!-- box4 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(3).tagline}</h2>
                  <div className="box4">
                  <NavLink to={`/getproduct/${items.at(3).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img1">
                      <div>
                        <img
                          className="box4-img"
                          src={items.at(3).url}
                          alt=""
                        />
                      </div>
                      <div className="img-info">{items.at(3).title.shortTitle}</div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(4).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img2">
                      <div>
                        <img
                          className="box4-img"
                          src={items.at(4).url}
                          alt=""
                        />
                      </div>
                      <div className="img-info">{items.at(4).title.shortTitle}</div>
                    </div>
                    </NavLink>
                  </div>

                  <div className="box4">
                  <NavLink to={`/getproduct/${items.at(5).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img1">
                      <div>
                        <img
                          className="box4-img"
                          src={items.at(5).url}
                          alt=""
                        />
                      </div>
                      <div className="img-info">{items.at(5).title.shortTitle}</div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(6).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img2">
                      <div>
                        <img
                          className="box4-img"
                          src={items.at(6).url}
                          alt=""
                        />
                      </div>
                      <div className="img-info">{items.at(6).title.shortTitle}</div>
                    </div>
                    </NavLink>
                  </div>
                  <div className="box4-footer">
                    <a href="" className="footer-name">
                      See more
                    </a>
                  </div>
                </div>
              </div>
              <hr className="thick-hr" />
            </div>

            {/* <!-- shop-section2 --> */}
            <div className="shop-section2">
              {/* <!-- box5 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(7).tagline}</h2>
                  <NavLink to={`/getproduct/${items.at(7).id}`}  style={{ textDecoration: 'none' }}>
                  <div>
                    <div>
                      <img
                        src={items.at(7).url}
                        className="box2-img"
                        alt=""
                      />
                    </div>
                    <div className="box-footer">
                      <a href="" className="footer-name">
                        Shop gifts
                      </a>
                    </div>
                  </div>
                  </NavLink>
                </div>
              </div>

              {/* <!-- box6 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(8).tagline}</h2>
                  <NavLink to={`/getproduct/${items.at(8).id}`}  style={{ textDecoration: 'none' }}>
                  <div className="box6-upper">
                    <div>
                      <img
                        src={items.at(8).url}
                        className="box6-img1"
                        alt=""
                      />
                    </div>
                    <div className="img-info-box6">
                      {items.at(8).title.shortTitle}
                    </div>
                  </div>
                  </NavLink>
                  <div className="box6-lower">
                  <NavLink to={`/getproduct/${items.at(9).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box6-1">
                      <div>
                        <img
                          src={items.at(9).url}
                          className="box6-img2"
                          alt=""
                        />
                      </div>
                      <div className="img-info-box6">
                        {items.at(9).title.shortTitle}
                      </div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(10).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box6-2">
                      <div>
                        <img
                          src={items.at(10).url}
                          className="box6-img2"
                          alt=""
                        />
                      </div>
                      <div className="img-info-box6">
                        {items.at(10).title.shortTitle}
                      </div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(11).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box6-3">
                      <div>
                        <img
                          src={items.at(11).url}
                          className="box6-img2"
                          alt=""
                        />
                      </div>
                      <div className="img-info-box6">
                        {items.at(11).title.shortTitle}
                      </div>
                    </div>
                    </NavLink>
                  </div>
                  <div className="box-footer">
                    <a href="" className="footer-name">
                      See more from Amazon gadgets
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- box7 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(12).tagline}</h2>
                  <div className="box4">
                  <NavLink to={`/getproduct/${items.at(12).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img1">
                      <div>
                        <img
                          src={items.at(12).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">{items.at(12).title.shortTitle}</div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(13).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img2">
                      <div>
                        <img
                          src={items.at(13).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">{items.at(13).title.shortTitle}</div>
                    </div>
                    </NavLink>
                  </div>

                  <div className="box4">
                  <NavLink to={`/getproduct/${items.at(14).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img1">
                      <div>
                        <img
                          src={items.at(14).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">{items.at(14).title.shortTitle}</div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(15).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img2">
                      <div>
                        <img
                          src={items.at(15).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">{items.at(15).title.shortTitle}</div>
                    </div>
                    </NavLink>
                  </div>
                  <div className="box4-footer">
                    <a href="" className="footer-name">
                      See all deals
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- box8 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(16).tagline}</h2>
                  <div className="box4">
                  <NavLink to={`/getproduct/${items.at(16).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img1">
                      <div>
                        <img
                          src={items.at(16).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">{items.at(16).title.shortTitle}</div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(17).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img2">
                      <div>
                        <img
                          src={items.at(17).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">{items.at(17).title.shortTitle}</div>
                    </div>
                    </NavLink>
                  </div>

                  <div className="box4">
                  <NavLink to={`/getproduct/${items.at(18).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img1">
                      <div>
                        <img
                          src={items.at(18).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">{items.at(18).title.shortTitle}</div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(19).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img2">
                      <div>
                        <img
                          src={items.at(19).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">{items.at(19).title.shortTitle}</div>
                    </div>
                    </NavLink>
                  </div>
                  <div className="box4-footer">
                    <a href="" className="footer-name">
                      See more
                    </a>
                  </div>
                </div>
              </div>
              <hr className="thick-hr" />
            </div>

            {/* Slider-1, box17 */}
            <div className="slide-section">
              <div className="slide-box">
                <div className="box-content">
                  <div className="starter">
                    <h2>International top sellers</h2>
                    <a href="" className="starter-name">
                      Shop now
                    </a>
                  </div>
                  <div className="slide">
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      draggable={false}
                      swipeable={true}
                      showDots={false}
                      centerMode={true}
                      autoPlay={true}
                      autoSpeed={4000}
                      keyBoardControl={true}
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                      containerClass="carousel-container"
                    >
                      {
                        items.slice(34).map((e)=>{
                          return(
                            <NavLink to={`/getproduct/${e.id}`}>
                            <div className="slide-items">
                              <div className="product-imgs">
                                <img className="product-img" src={e.url} alt="" />
                              </div>
                            </div>
                            </NavLink>
                          )
                        })
                      }
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>

            {/* advertisement */}

            <div className="ad-section">
              <img className="ad-img" src="Images/ad.jpg" alt="" />
            </div>

            {/* <!-- Shop-section-3 --> */}
            <div className="shop-section3">
              {/* <!-- box9 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(20).tagline}</h2>
                  <NavLink to={`/getproduct/${items.at(20).id}`}  style={{ textDecoration: 'none' }}>
                  <div>
                    <div>
                      <img
                        src={items.at(20).url}
                        alt=""
                        className="box9-img"
                      />
                    </div>
                    <div className="box-footer">
                      <a href="" className="footer-name">
                        Shop now
                      </a>
                    </div>
                  </div>
                  </NavLink>
                </div>
              </div>

              {/* <!-- box10 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(21).tagline}</h2>
                  <div className="box4">
                  <NavLink to={`/getproduct/${items.at(21).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img1">
                      <div>
                        <img
                          src={items.at(21).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">
                        {items.at(21).title.shortTitle}
                      </div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(22).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img2">
                      <div>
                        <img
                          src={items.at(22).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">
                        {items.at(22).title.shortTitle}
                      </div>
                    </div>
                    </NavLink>
                  </div>

                  <div className="box4">
                  <NavLink to={`/getproduct/${items.at(23).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img1">
                      <div>
                        <img
                          src={items.at(23).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">
                        {items.at(23).title.shortTitle}
                      </div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(24).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img2">
                      <div>
                        <img
                          src={items.at(24).url}
                          alt=""
                          className="box4-img"
                        />
                      </div>
                      <div className="img-info">
                        {items.at(24).title.shortTitle}
                      </div>
                    </div>
                    </NavLink>
                  </div>
                  <div className="box4-footer">
                    <a href="" className="footer-name">
                      See more
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- box11 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(25).tagline}</h2>
                  <NavLink to={`/getproduct/${items.at(25).id}`}  style={{ textDecoration: 'none' }}>
                  <div>
                    <div>
                      <img
                        src={items.at(25).url}
                        alt=""
                        className="box9-img"
                      />
                    </div>
                    <div className="box-footer">
                      <a href="" className="footer-name">
                        Shop video games
                      </a>
                    </div>
                  </div>
                  </NavLink>
                </div>
              </div>

              {/* <!-- box12 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(26).tagline}</h2>
                  <NavLink to={`/getproduct/${items.at(26).id}`}  style={{ textDecoration: 'none' }}>
                  <div>
                    <div>
                      <img
                        src={items.at(26).url}
                        alt=""
                        className="box2-img"
                      />
                    </div>
                    <div className="box-footer">
                      <a href="" className="footer-name">
                        Find your laptop here
                      </a>
                    </div>
                  </div>
                  </NavLink>
                </div>
              </div>
              <hr className="thick-hr" />
            </div>

            {/* <!-- Shop-section-4 --> */}
            <div className="shop-section4">
              {/* <!-- box13 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(27).tagline}</h2>
                  <NavLink to={`/getproduct/${items.at(27).id}`}  style={{ textDecoration: 'none' }}>
                  <div>
                    <div>
                      <img
                        src={items.at(27).url}
                        alt=""
                        className="box9-img"
                      />
                    </div>
                    <div className="box-footer">
                      <a href="" className="footer-name">
                        See more software products
                      </a>
                    </div>
                  </div>
                  </NavLink>
                </div>
              </div>

              {/* <!-- box14 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(28).tagline}</h2>
                  <NavLink to={`/getproduct/${items.at(28).id}`}  style={{ textDecoration: 'none' }}>
                  <div>
                    <div>
                      <img
                        src={items.at(28).url}
                        alt=""
                        className="box9-img"
                      />
                    </div>
                    <div className="box-footer">
                      <a href="" className="footer-name">
                        Shop personal computers
                      </a>
                    </div>
                  </div>
                  </NavLink>
                </div>
              </div>

              {/* <!-- box15 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(29).tagline}</h2>
                  <div className="box4">
                  <NavLink to={`/getproduct/${items.at(29).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img1">
                      <div>
                        <img
                          src={items.at(29).url}
                          alt=""
                          className="box15-img"
                        />
                      </div>
                      <div className="box15-img-info">
                        {items.at(29).title.shortTitle}
                      </div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(30).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img2">
                      <div>
                        <img
                          src={items.at(30).url}
                          alt=""
                          className="box15-img"
                        />
                      </div>
                      <div className="box15-img-info">
                        {items.at(30).title.shortTitle}
                      </div>
                    </div>
                    </NavLink>
                  </div>

                  <div className="box4">
                  <NavLink to={`/getproduct/${items.at(31).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img1">
                      <div>
                        <img
                          src={items.at(31).url}
                          alt=""
                          className="box15-img"
                        />
                      </div>
                      <div className="box15-img-info">
                        {items.at(31).title.shortTitle}
                      </div>
                    </div>
                    </NavLink>
                    <NavLink to={`/getproduct/${items.at(32).id}`}  style={{ textDecoration: 'none' }}>
                    <div className="box4-img2">
                      <div>
                        <img
                          src={items.at(32).url}
                          alt=""
                          className="box15-img"
                        />
                      </div>
                      <div className="box15-img-info">
                        {items.at(32).title.shortTitle}
                      </div>
                    </div>
                    </NavLink>
                  </div>
                  <div className="box15-footer">
                    <a href="" className="footer-name">
                      Shop more fall finds
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- box16 --> */}
              <div className="box">
                <div className="box-content">
                  <h2>{items.at(33).tagline}</h2>
                  <NavLink to={`/getproduct/${items.at(33).id}`}  style={{ textDecoration: 'none' }}>
                  <div>
                    <div>
                      <img
                        src={items.at(33).url}
                        alt=""
                        className="box9-img"
                      />
                    </div>
                    <div className="box-footer">
                      <a href="" className="footer-name">
                        Shop now
                      </a>
                    </div>
                  </div>
                  </NavLink>
                </div>
              </div>
              <hr className="thick-hr" />
            </div>

            {/* Slider-2, box18 */}
            <div className="slide-section2">
              <div className="slide-box">
                <div className="box-content">
                  <div className="starter">
                    <h2>Inspired by your browsing history</h2>
                    <a href="" className="starter-name">
                      Shop now
                    </a>
                  </div>
                  <div className="slide">
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      draggable={false}
                      swipeable={true}
                      showDots={false}
                      centerMode={true}
                      autoPlay={true}
                      autoSpeed={4000}
                      keyBoardControl={true}
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                      containerClass="carousel-container"
                    >
                      {
                        items.slice(34).map((e)=>{
                          return(
                            <NavLink to={`/getproduct/${e.id}`}  style={{ textDecoration: 'none' }}>
                            <div className="slide-items">
                              <div className="product-imgs">
                                <img className="product-img" src={e.url} alt="" />
                              </div>
                            </div>
                            </NavLink>
                          )
                        })
                      }
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Sign-in */}
            <center>
            <fieldset className="bottom-signin">
              <div className="blank"></div>
              <div className="blank"></div>
              <div className="per-rec">
                <center>See personalised recommendations</center>
              </div>      
              <div>
                <center>
                <NavLink to='/signin' style={{textDecoration:"none"}}><button className="sign-in2">Sign in</button></NavLink>
                </center>
              </div>
              <div className="per-rec2">
                <center>
                    <p className="new">New customer?
                    <NavLink to="/register" className="link-11px">Start here</NavLink></p>
                </center>
              </div>
            </fieldset>
            </center>
          </div>
      }
    </div>
  );
};

export default Slide;
