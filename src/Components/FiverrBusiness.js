import React from 'react';
import img from '../image/fiverrBusiness.jpg'
import {GrCheckboxSelected} from 'react-icons/gr'

const FiverrBusiness = () => {
    return (
        <div className='bg-primary py-20 mt-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4'>
            <div className='ml-7 text-[white] gap-1'>
                <h1 className='text-3xl'>devHivebusiness. <span className='bg-primary-focus p-1 rounded-full text-sm'>New</span></h1>
                <h2 className='text-5xl font-bold mt-4'>A business solution designed for teams</h2>
                <p className='text-2xl mt-4'>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                <p className='flex gap-3 mt-4'> <GrCheckboxSelected className='text-2xl'/> <span className='text-xl'>Connect to freelancers with proven business experience</span></p>
                <p className='flex gap-3 mt-4'> <GrCheckboxSelected className='text-2xl'/> <span className='text-xl'>Get matched with the perfect talent by a customer success manager</span></p>
                <p className='flex gap-3 mt-4'> <GrCheckboxSelected className='text-2xl'/> <span className='text-xl'>Manage teamwork and boost productivity with one powerful workspace</span></p>
                <button className='btn mt-10 bg-secondary hover:shadow-sm hover:bg-accent hover:text-black'>Explore devHive Business</button>
            </div>
            <div>
                <img src={img} alt=''></img>
            </div>
        </div>
        </div>
    );
};

export default FiverrBusiness;