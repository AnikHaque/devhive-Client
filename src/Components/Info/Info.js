import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Info = () => {
    return (
        <div className="hero mt-10 py-10 bg-base-200">
            <div className="hero-content container mx-auto flex-col-reverse  lg:flex-row-reverse ">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" className="rounded-lg shadow-2xl" alt="" />
            <div className='lg:pr-14 '>
              <h2 className='text-left lg:text-4xl text-3xl font-bold pb-6 text-primary'>A whole world of freelance talent at your fingertips</h2>
              <div className='text-left pt-4'>
                        <div className='flex flex-row items-center'>
                            <FaCheckCircle className='text-lg'></FaCheckCircle>
                            <p className='text-lg font-bold d-flex pl-2'>The best for every budget</p>
                        </div>
                        <p className="pt-1 text-lg font-normal">Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
              </div>
              <div className='text-left pt-4'>
                        <div className='flex flex-row items-center'>
                            <FaCheckCircle className='text-lg'></FaCheckCircle>
                            <p className='text-lg font-bold d-flex pl-2'>Quality work done quickly</p>
                        </div>
                        <p className="pt-1 text-lg font-normal">Find the right freelancer to begin working on your project within minutes.</p>
              </div>
              <div className='text-left pt-4'>
                        <div className='flex flex-row items-center'>
                            <FaCheckCircle className='text-lg'></FaCheckCircle>
                            <p className='text-lg font-bold d-flex pl-2'>Protected payments, every time</p>
                        </div>
                        <p className="pt-1 text-lg font-normal">Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
              </div>
              <div className='text-left pt-4'>
                        <div className='flex flex-row items-center'>
                            <FaCheckCircle className='text-lg'></FaCheckCircle>
                            <p className='text-lg font-bold d-flex pl-2'>24/7 support</p>
                        </div>
                        <p className="pt-1 text-lg font-normal">Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
              </div>
            </div>
        </div>
        </div>

    );
};

export default Info;