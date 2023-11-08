import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FreelancersImage = () => {
    const [Persons, setParsons] = useState([])

    useEffect(() => {
        fetch('FackData.json')
            .then(res => res.json())
            .then(data => setParsons(data))
    }, [])


    return (
        <div className='px-5'>
            <h1 className='text-center text-3xl font-bold mt-20 px-5'>Join our growing freelance community</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-5  gap-5'>

                {
                    Persons.map(person => <>
                        <Link to="#" class="group relative block bg-black">
                            <img
                                alt="Developer"
                                src={person.img}
                                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div class="relative p-4 sm:p-6 lg:p-8">
                           
                                <div class="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p class="text-xl text-white">
                                           {person.profession}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                    )
                }
            </div>
        </div>
    );
};

export default FreelancersImage;