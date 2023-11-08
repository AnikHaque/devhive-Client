import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ data }) => {
    const { _id, slugTitle, developerinfo, serviceImage } = data;
    console.log(data);
    return (
        <div className="card w-full bg-base-100 shadow-xl ">
            <div class="group block ">
                <div class="relative h-72 ">
                    <img
                        src={serviceImage}
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                        src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                </div>


            </div>
            <div className="card-body bg-state-300">
                <div className='flex'>
                    <div className="avatar-group -space-x-6">
                        <div className="avatar">
                            <div className="w-12">
                                <img src={developerinfo?.photoURL} alt='' />
                            </div>
                        </div>

                    </div>
                    <div className='pl-4'>
                        <h3 className='text-left font-bold'>{developerinfo?.username}</h3>
                        <h2 className='font-medium'>{developerinfo?.title}</h2>
                    </div>
                </div>
                <div>
                    <Link to={`/services/slug/${_id}`}  ><p className='text-left font-medium font-xl my-3'>{slugTitle}</p></Link>
                </div>
                <div className="card-actions justify-between items-center border-t-2 pt-4">
                    <div>
                        <div className="rating flex items-center">
                            <input type="radio" name="rating-1" className="mask text-sm mask-star base-400 bg-warning" />
                            <h2 className='text-lg pl-1'>4.8</h2>
                            <h3 className='text-lg pl-1'>(35)</h3>
                        </div>
                    </div>
                    <div className='flex'>
                        <h2 className='text-sm flex items-center font-medium pt-1 pr-1' >STARTING AT</h2>
                        <h3 className='text-2xl font-semibold'>$5</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;