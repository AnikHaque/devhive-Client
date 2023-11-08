import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const sliders = [
        {
            name: 'WordPress',
            img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png',
        },
        {
            name: 'Graphic Design',
            img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png',
        },
        {
            name: 'Voice Over',
            img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png',
        },
        {
            name: 'Video Explainer',
            img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png',
        }
    ]
    return (
        <div className='container mx-auto p-10'>
            <div className='grid justify-items-stretch'>
                <h1 className='text-3xl text-center font-extrabold ml-10 font-serif p-3 my-4'>Popular professional services</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    sliders.map(slider => <>
                        <Link
                            href="#"
                            style={{backgroundImage: `url(${slider.img})`}}
                            class="relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
                        >
                            <div class="absolute inset-0 bg-black/25"></div>

                            <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                                <div class="sm:pt-18 pt-12 text-white lg:pt-24">
                                    <h3 class="text-xl text-[white] font-bold sm:text-2xl">{slider.name}</h3>
                                </div>
                            </div>
                        </Link>

                    </>)
                }
            </div>
        </div>
    );
};

export default Services;


