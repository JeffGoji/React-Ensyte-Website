import React, { Component } from "react";
// import { NavLink } from 'react-router-dom'
import Slider from "react-slick";

import Slide1 from './Slide1'
// import Slide2 from './Slide2'
// import Slide3 from './Slide3'

import Slide7 from './Slide7'
import Slide8 from './Slide8'
import Slide9 from './Slide9'

export default class IntroCarousel extends Component {
    render() {
        const settings = {

            dots: true,
            infinite: true,
            speed: 2000,
            auto: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            accessibility: true,
            cssEase: "linear",

            // appendDots: dots => (
            //     <div
            //         style={{
            //             backgroundColor: "#ddd",
            //             borderRadius: "10px",
            //             padding: "10px"
            //         }}
            //     >
            //         <ul style={{ margin: "0px" }}> {dots} </ul>
            //     </div>
            // ),
            // customPaging: i => (
            //     <div
            //         style={{
            //             width: "30px",
            //             color: "blue",
            //             border: "1px blue solid"
            //         }}
            //     >
            //         {i + 1}
            //     </div>
            // )
        };
        return (
            <div className="text-center justify-content-center" >
                <div className=" d-none d-sm-block">
                    <Slider {...settings}>

                        {/* 
                    <div className="text-center ">
                        <Slide2 />
                    </div>
                    <div>
                        <Slide3 />
                    </div>  */}
                        <div>
                            <Slide1 />
                        </div>
                        <div>
                            <Slide7 />
                        </div>
                        <div>
                            <Slide8 />
                        </div>
                        <div>
                            <Slide9 />
                        </div>

                        {/* <div>
                        <Slide4 />
                    </div>
                    <div>
                        <Slide5 />
                    </div>
                    <div>
                        <Slide6 />
                    </div> */}





                    </Slider>
                </div>

                {/* This portion is only visible on Phone screens: */}
                <div className="d-block d-sm-none">
                    <Slide1 />
                </div>
            </div>
        );
    }
}