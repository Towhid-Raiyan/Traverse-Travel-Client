import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-teal-700 text-center my-9'>Blogs</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5">
                <div className="relative mx-auto">
                    <img src="https://i.ibb.co/nbZz07q/blog-1-1.jpg" alt="" className="rounded-lg h-[450px] w-80 hover:transition hover:ease-in-out duration-1000 hover:brightness-50 " />
                    <div className="w-72 ml-4 h-40 bg-white text-black rounded-md absolute top-[270px] z-10 hover:brightness-90">
                        <div className="p-6">
                            <h1 className="text-xl font-bold pb-3 hover:text-teal-700 hover:underline">You Should See Things When Visiting Japan</h1>
                            <hr></hr>
                            <div className="font-semibold py-3 hover:text-teal-700 hover:underline flex justify-between items-center">
                                <h3 >Read More</h3>
                                <h3 className="text-teal-600"><FaArrowRight /></h3>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative mx-auto">
                    <img src="https://i.ibb.co/kczrp2H/blog-1-2.jpg" alt="" className="rounded-lg h-[450px] w-80 hover:transition hover:ease-in-out duration-1000 hover:brightness-50 " />
                    <div className="w-72 ml-4 h-40 bg-white text-black rounded-md absolute top-[270px] z-10 hover:brightness-90">
                        <div className="p-6">
                            <h1 className="text-xl font-bold pb-3 hover:text-teal-700 hover:underline">You Should See Things When Visiting Egypt</h1>
                            <hr></hr>
                            <div className="font-semibold py-3 hover:text-teal-700 hover:underline flex justify-between items-center">
                                <h3 >Read More</h3>
                                <h3 className="text-teal-600"><FaArrowRight /></h3>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative mx-auto">
                    <img src="https://i.ibb.co/N976PrN/blog-1-3.jpg" alt="" className="rounded-lg h-[450px] w-80 hover:transition hover:ease-in-out duration-1000 hover:brightness-50 " />
                    <div className="w-72 ml-4 h-40 bg-white text-black rounded-md absolute top-[270px] z-10 hover:brightness-90">
                        <div className="p-6">
                            <h1 className="text-xl font-bold pb-3 hover:text-teal-700 hover:underline">You Should See Things When Visiting France</h1>
                            <hr></hr>
                            <div className="font-semibold py-3 hover:text-teal-700 hover:underline flex justify-between items-center">
                                <h3 >Read More</h3>
                                <h3 className="text-teal-600"><FaArrowRight /></h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;