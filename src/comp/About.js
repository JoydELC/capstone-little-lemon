import React from "react";
import res_1 from '../assets/res_1.jpg';
import res_2 from '../assets/res_2.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


    function About(){
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return(
            <div className="about-container" id="About">
                <div className="about-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
Velit officia consequat duis enim velit mollit.  
                    </p>
                </div>
                <div className="about-pics">
                    <Slider {...settings}>
                        <img src={res_1} alt="res_1"/>
                        <img src={res_2} alt="res_2"/>
                    </Slider>
                </div>
            </div>
        )
    }
export default About;