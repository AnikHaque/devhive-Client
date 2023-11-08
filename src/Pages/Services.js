import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { useGetServiceQuery } from '../features/api/Services/ServicesApi';
import ServiceItem from '../Components/Services/ServiceItem';
import { FaVideo } from "react-icons/fa";


const Services = () => {

    const { data: serviceData } = useGetServiceQuery();

    return (
        <div className='container mx-auto'>
            <div>
                <div className='lg:ml-0 mt-10 ml-6'>
                    <h3 className='text-4xl font-bold text-left'>Website Design</h3>
                    <div className='flex items-start lg:flex-row flex-col pt-4 '>
                        <h4 className='text-lg text-left font-medium text-slate-400  flex  items-start'>Get a beautiful website design that people love to engage with.</h4>
                        <button className=" border-2 rounded-xl px-2 text-lg font-semibold text-slate-700 lg:ml-2 flex"><span className='px-1 pt-1.5'><FaVideo ></FaVideo></span>How Devhive Works</button>
                    </div>
                </div>
                <div className='mt-8 flex'>
                    <div className='mr-10'>
                        <select className="select select-bordered w-full max-w-xs">
                            <option selected>Service Option</option>
                            <option>Web Design</option>
                            <option>Graphic Design</option>
                            <option>UI Design</option>

                        </select>
                    </div>
                    <div className='mr-10'>
                        <select className="select select-bordered w-full max-w-xs">
                            <option selected>Seller Details</option>
                            <option>New Seller</option>
                            <option>Top Seller</option>
                            <option>Level Two</option>

                        </select>
                    </div>
                    <div className='mr-10'>
                        <select className="select select-bordered w-full max-w-xs">
                            <option selected>Budget</option>
                            <option>$5 - $50</option>
                            <option>$50 - $200</option>
                            <option>$200 - $1000</option>

                        </select>
                    </div>
                    <div className='mr-10'>
                        <select className="select select-bordered w-full max-w-xs">
                            <option selected>Delivery Time</option>
                            <option>Express 24H</option>
                            <option>up to 5 Days</option>
                            <option>Anytime</option>

                        </select>
                    </div>



                </div>
            </div>
            <div className='mt-10 mb-10 grid lg:grid-cols-4 grid-cols gap-6 '>
                {
                    serviceData?.map(data => <ServiceItem key={data._id} data={data}></ServiceItem>)
                }
            </div>
            <div className="btn-group my-10 mb-10 flex justify-center">
                <button className="border-2 border-slate-700 py-1 px-3 mx-1"><MdOutlineArrowBackIos /></button>
                <button className="border-2 border-slate-700 py-1 px-3 mx-1">1</button>
                <button className="border-2 border-slate-700 py-1 btn-primary px-3 mx-1">2</button>
                <button className="border-2 border-slate-700 py-1 px-3 mx-1">3</button>
                <button className="border-2 border-slate-700 py-1 px-3 mx-1">4</button>
                <button className="border-2 border-slate-700 py-1 px-3 mx-1"><MdOutlineArrowForwardIos /></button>
            </div>
        </div>
    );
};

export default Services;