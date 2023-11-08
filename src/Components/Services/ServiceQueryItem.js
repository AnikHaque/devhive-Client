import React from 'react';
import { Link } from 'react-router-dom';

const ServiceQueryItem = ({ service }) => {
    console.log(service);
    const { _id, slugTitle, developerinfo, serviceImage } = service || {};
    return (
        <Link to={`/services/slug/${_id}`}>
            <div className='mx-20 my-6'>
                <article class="flex bg-white transition hover:shadow-xl">

                    <div class="hidden sm:block sm:basis-56">
                        <img
                            alt="Guitar"
                            src={serviceImage}
                            class="aspect-square h-full w-full object-cover"
                        />
                    </div>
                    <div class="flex flex-1 flex-col justify-between">
                        <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="#">
                                <h3 class="font-bold uppercase text-gray-900 ml-10">
                                    {slugTitle}
                                </h3>
                            </a>


                            <div className="card-body bg-state-300 ">
                                <div className='flex'>
                                    <div className="avatar-group -space-x-6">
                                        <div className="avatar ">
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
                </article>



            </div>
        </Link>
    );
};

export default ServiceQueryItem;