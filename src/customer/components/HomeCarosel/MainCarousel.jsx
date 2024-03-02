import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';





const MainCarousel = () => {

    const items = mainCarouselData.slice(0, 10).map((item) => {
        <img className='cursor-pointer'
            role='presentation' src={item.image} alt="" />
    })
    return (
        <div>
            <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg"/>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </div>
    )

}

export default MainCarousel;