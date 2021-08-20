import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const SliderLayout = styled.div`
    width: 450px;
    height: 550px;
    margin: 0 auto;
    margin-top: 50px;
`;

const SliderImage = styled.img`
    width: 100%;
    height: 100%;
`;

const MainSlider = () => {

    const settings = {
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(
    <SliderLayout>
            <Slider {...settings}>
                <div>
                    <SliderImage src={'/images/1.PNG'}/>
                </div>
                <div>
                    <SliderImage src={'/images/2.PNG'}/>
                </div>
                <div>
                    <SliderImage src={'/images/4.PNG'}/>
                </div>
            </Slider>
      </SliderLayout>
    );
};

export default MainSlider;