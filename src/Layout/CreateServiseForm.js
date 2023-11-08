import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import CreateServiseFormHeader from '../Components/Header/CreateServiseFormHeader';
// import CreateServiseOverview from '../Pages/CreateServiseOverview';
// import CreateServisePricing from '../Pages/CreateServisePricing';
// import CreateServiseRequirements from '../Pages/CreateServiseRequirements';

const CreateServiseForm = () => {
    const { register, formState: { errors } } = useForm();

    const [step, setStep] = useState(1)

    let content;

    if (step === 1) {
        content = < div className='min-h-full bg-[#f3d0d0] px-36 py-16'>
            <div className='w-8/12 m-auto'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Gig Title
                </label>
                <input type="text"  {...register("gig_title", {
                    required: 'gig_title is required',

                })} className="input input-bordered w-full " placeholder='I will do Something i am really good at' required />

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Describe your Gig
                </label>
                <textarea type="text"  {...register("gig_describe", {
                    required: 'gig_describe is required',

                })} className="input input-bordered w-full " placeholder='Describe your gig' required />

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Category
                </label>



                {/* checkout servise and provider */}

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Servises</th>
                                <th>Tools</th>
                                <th>Featuers</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>

                                <td>

                                    <input
                                        {...register('Business WordPress websites', { required: true })}
                                        type="checkbox"
                                        name="business_wordpress_websites"
                                        value="Business WordPress websites"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">Business WordPress websites</span>



                                </td>
                                <td>

                                    <input
                                        {...register('WordPress', { required: true })}
                                        type="checkbox"
                                        name="wordpress"
                                        value="Pizza"
                                        className="form-check-input"

                                    />

                                    <span className="label-text pl-2">WordPress</span>
                                </td>

                                <td>

                                    <input
                                        {...register('Mobile_Friendly', { required: true })}
                                        type="checkbox"
                                        name="mobile_friendly"
                                        value="Mobile-Friendly"
                                        className="form-check-input"

                                    />

                                    <span className="label-text pl-2">Mobile-Friendly</span>
                                </td>



                            </tr>

                            {/* row 2 */}

                            <tr>

                                <td>

                                    <input
                                        {...register('e-commerce', { required: true })}
                                        type="checkbox"
                                        name="e_commarce"
                                        value="E-commerce website"
                                        className="form-check-input"

                                    />

                                    <span className="label-text pl-2">E-commerce website</span>


                                </td>
                                <td>

                                    <input
                                        {...register('Divi', { required: true })}
                                        type="checkbox"
                                        name="divi"
                                        value="Divi"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">Divi</span>
                                </td>

                                <td>

                                    <input
                                        {...register('custom Design', { required: true })}
                                        type="checkbox"
                                        name="custom_design"
                                        value="Custom Design"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">Custom Design</span>
                                </td>



                            </tr>

                            {/* row-3 */}

                            <tr>

                                <td>

                                    <input
                                        {...register('Personal Websites & Blogs', { required: true })}
                                        type="checkbox"
                                        name="personal_website_&_blogs"
                                        value="Personal Websites & Blogs"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">Personal Websites & Blogs</span>


                                </td>
                                <td>

                                    <input
                                        {...register('Elementor', { required: true })}
                                        type="checkbox"
                                        name="elementor"
                                        value="Elementor"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">Elementor</span>
                                </td>

                                <td>

                                    <input
                                        {...register('User-friendly UI/UX design', { required: true })}
                                        type="checkbox"
                                        name="user_friendly_ui/ux_design"
                                        value="User-friendly UI/UX design"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">User-friendly UI/UX design</span>
                                </td>



                            </tr>

                            {/* row 4 */}

                            <tr>

                                <td>

                                    <input
                                        {...register('React', { required: true })}
                                        type="checkbox"
                                        name="react"
                                        value="React"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">React</span>


                                </td>
                                <td>

                                    <input
                                        {...register('Wordpress', { required: true })}
                                        type="checkbox"
                                        name="wordpress"
                                        value="Wordpress"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">Wordpress</span>
                                </td>

                                <td>

                                    <input
                                        {...register('Speed optimized', { required: true })}
                                        type="checkbox"
                                        name="Speed optimized"
                                        value="speed_ptimized"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">Speed optimized</span>
                                </td>



                            </tr>

                            {/* row 5 */}
                            <tr>

                                <td>

                                    <input
                                        {...register('Portfolio', { required: true })}
                                        type="checkbox"
                                        name="portfolio"
                                        value="Portfolio"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">Portfolio</span>


                                </td>
                                <td>

                                    <input
                                        {...register('Gutenburg', { required: true })}
                                        type="checkbox"
                                        name="gutenburg"
                                        value="Gutenburg"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">Gutenburg</span>
                                </td>

                                <td>

                                    <input
                                        {...register('Social media integration', { required: true })}
                                        type="checkbox"
                                        name="Social media integration"
                                        value="social_media_integration"
                                        className="form-check-input"

                                    />
                                    <span className="label-text pl-2">Social media integration</span>
                                </td>



                            </tr>
                        </tbody>







                    </table>
                </div>

                <button className='btn btn-secondary absolute right-72 mt-2' onClick={() => setStep(2)} >Continue</button>

            </div>

        </div>
    }


    if (step === 2) {
        content = <div className=' py-20 bg-[#f3d0d0] '>
            <div className='grid grid-cols-4 lg:grid-cols-4 ml-36  '>


                <div>
                    <h3 className='bg-accent text-center py-4'>BASIC</h3>
                    <input type="text"  {...register("package", {
                        required: 'package is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Name your package' />

                    <input type="text"  {...register("details", {
                        required: 'details is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Describe the details of your offering' />


                    <select {...register("delivary time")} className="input input-bordered w-full max-w-xs ">
                        <option disabled selected>Delivary Time</option>
                        <option value="graphicsDesign"> 1 day delivary</option>
                        <option value="programmingTech">2 days delivary</option>
                        <option value="videoAnimation">3 days delivary</option>
                    </select>


                </div>

                <div>
                    <h3 className='bg-accent text-center py-4'>STANDARD</h3>
                    <input type="text"  {...register("package", {
                        required: 'package is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Name your package' />

                    <input type="text"  {...register("details", {
                        required: 'details is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Describe the details of your offering' />


                    <select {...register("delivary time")} className="input input-bordered w-full max-w-xs ">
                        <option disabled selected>Delivary Time</option>
                        <option value="graphicsDesign"> 1 day delivary</option>
                        <option value="programmingTech">2 days delivary</option>
                        <option value="videoAnimation">3 days delivary</option>
                    </select>


                </div>


                <div>
                    <h3 className='bg-accent text-center py-4'>PREMIUM</h3>
                    <input type="text"  {...register("package", {
                        required: 'package is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Name your package' />

                    <input type="text"  {...register("details", {
                        required: 'details is required',
                    })} className="input input-bordered input-group-lg w-full py-10 px-1 placeholder:text-sm "
                        placeholder='Describe the details of your offering' />


                    <select  {...register("delivary time")} className="input input-bordered w-full max-w-xs ">
                        <option disabled selected >Delivary Time</option>
                        <option value="graphicsDesign"> 1 day delivary</option>
                        <option value="programmingTech">2 days delivary</option>
                        <option value="videoAnimation">3 days delivary</option>
                    </select>


                </div>

            </div>
            <button className='btn btn-secondary absolute right-60 mt-5' onClick={() => setStep(3)} >Continue</button>

        </div>

    }

    if (step === 3) {
        content = <div className=' min-h-full bg-[#f3d0d0] px-32 py-28 ' >
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Profile Image
            </label>
            <input type="file"  {...register("img", {
                required: 'img is required',
            })} className="input input-bordered w-full  "
            />

            <div className='flex gap-4'>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Select your Own Country
                    </label>

                    <select  {...register("Country Name")} className="input input-bordered w-full  ">
                        <option disabled selected >Country Name</option>
                        <option value="Bangladesh"> Bangladesh</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="United State">United State</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Sudia Arabia">Sudia Arabia</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Select Member since
                    </label>
                    <input type="date"  {...register("since", {
                        required: 'since is required',
                    })} className="input input-bordered w-full   "
                    />
                </div>
            </div>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Introduction your Experiences
            </label>
            <input type="text"  {...register("text", {
                required: 'text is required',
            })} className="input input-bordered  w-full min-h-full py-10   " placeholder='Describe  your experiences here...'
            />


            <button className='btn btn-secondary absolute right-48 mt-24' onClick={() => setStep(4)} >Submit</button>

        </div>
    }


    return (
        <div>
            <div>
                <ul className="steps flex justify-center">
                    <li className={`step ${step === 1 && 'step-primary'}`}>
                        <span>Overview</span>
                    </li>
                    <li className={`step ${step === 2 && 'step-primary'}`}>
                        <span>Pricing</span>
                    </li>
                    <li className={`step ${step === 3 && 'step-primary'}`}>
                        <span>Requirement</span>
                    </li>
                </ul>
                <div className='divide'></div>
            </div>
            {content}
        </div>
    );
};

export default CreateServiseForm;