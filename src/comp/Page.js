// components/Page.js
// En el archivo donde importas react-slick
import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import projects from '../assets/Dishes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from "../styles/Main.module.css";
import Testimonials from './Testimonials';
import About from './About';

export default function Page() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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

    return (
        <>
            <Hero />
            <div className={`${styles.mainCards}`} id="Specials">
                <div className={`${styles.mainTBtn}`}>
                    <h1>Specials</h1>
                    <button>Online Menu</button>
                </div>
                <Slider {...settings}>
                    {projects.map((project) => (
                        <Specials
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                        />
                    ))}

                </Slider>
            </div>
            <Testimonials />
            <About />
        </>
    )
}