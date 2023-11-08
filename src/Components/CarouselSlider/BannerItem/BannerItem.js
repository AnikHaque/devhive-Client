import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='carousel-img '>

                <img src={image} className="w-screen rounded-xl h-96" alt='' />
            </div>

            <div className="absolute  flex justify-end transform -translate-y-1/2 left-5  top-1/3">
                <h1 className='font-bold font-serif text-white text-4xl uppercase'>

                    ...
                </h1>
            </div>


            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle btn-outline border-4 bg-slate-200 mr-2">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle btn-outline border-4 bg-slate-200">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;