import React from 'react';
import img1 from '../../image/pexels-liza-summer-6347902.jpg'
import img2 from '../../image/pexels-andrea-piacquadio-842912.jpg'
import img3 from '../../image/pexels-vlada-karpovich-4050295.jpg'
import BannerItem from './BannerItem/BannerItem';
import './CarouselSlider.css'


const CarouselSlider = () => {
    const sliders = [
        {
            image: img1,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1
        },
       
    ]
    return (
        <div>
            <div className="carousel w-full my-10">

                {
                    sliders.map(slide => <BannerItem
                        key={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }

            </div>
        </div>
    );
};

export default CarouselSlider;