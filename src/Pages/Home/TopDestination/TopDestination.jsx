import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopDestination = () => {
    return (
        <div className='my-7 pb-7'>
            <h2 className='text-4xl font-bold text-teal-700 text-center mb-9'>Top Destination</h2>
            <div className=''>
                <Swiper
                    effect={'coverflow'}
                    style={{
                        '--swiper-navigation-color': '#00a693',
                        '--swiper-pagination-color': '#00a693',
                    }}
                    slidesPerView={4}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    speed={600}
                    parallax={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide className='pb-5'>
                        <div className='shadow-xl rounded-lg'>
                            <div className='p-3 h-3/4'><img src="https://i.ibb.co/2qmQxsK/India-1.jpg" alt="" /></div>
                            <div className='text-center'>
                                <h2 className='text-xl font-bold text-teal-700'>Taj Mahal</h2>
                                <h2 className='text-xl font-bold text-teal-700 py-3'>India</h2>
                                <button className='px-3 mb-4 py-2 bg-teal-700 text-white rounded'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-5'>
                        <div className='shadow-xl rounded-lg'>
                            <div className='p-3 h-3/4'><img src="https://i.ibb.co/z6tfKqF/swizerland.jpg" alt="" /></div>
                            <div className='text-center'>
                                <h2 className='text-xl font-bold text-teal-700'>Bern</h2>
                                <h2 className='text-xl font-bold text-teal-700 py-3'>Swizerland</h2>
                                <button className='px-3 mb-4 py-2 bg-teal-700 text-white rounded'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-5'>
                        <div className='shadow-xl rounded-lg'>
                            <div className='p-3 h-3/4'><img src="https://i.ibb.co/Rp9WZRb/England-1.png" alt="" /></div>
                            <div className='text-center'>
                                <h2 className='text-xl font-bold text-teal-700'>London</h2>
                                <h2 className='text-xl font-bold text-teal-700 py-3'>England</h2>
                                <button className='px-3 mb-4 py-2 bg-teal-700 text-white rounded'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-5'>
                        <div className='shadow-xl rounded-lg'>
                            <div className='p-3 h-3/4'><img src="https://i.ibb.co/Y31m0nc/Newzealand-1.png" alt="" /></div>
                            <div className='text-center'>
                                <h2 className='text-xl font-bold text-teal-700'>Queenstown</h2>
                                <h2 className='text-xl font-bold text-teal-700 py-3'>New Zealand</h2>
                                <button className='px-3 mb-4 py-2 bg-teal-700 text-white rounded'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-5'>
                        <div className='shadow-xl rounded-lg'>
                            <div className='p-3 h-3/4'><img src="https://i.ibb.co/58zgwWt/Italy.jpg" alt="" /></div>
                            <div className='text-center'>
                                <h2 className='text-xl font-bold text-teal-700'>Rome</h2>
                                <h2 className='text-xl font-bold text-teal-700 py-3'>Italy</h2>
                                <button className='px-3 mb-4 py-2 bg-teal-700 text-white rounded'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-5'>
                        <div className='shadow-xl rounded-lg'>
                            <div className='p-3 h-3/4'><img src="https://i.ibb.co/1T1Yy4W/Bali.jpg" alt="" /></div>
                            <div className='text-center'>
                                <h2 className='text-xl font-bold text-teal-700'>Bali</h2>
                                <h2 className='text-xl font-bold text-teal-700 py-3'>Indonesia</h2>
                                <button className='px-3 mb-4 py-2 bg-teal-700 text-white rounded'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default TopDestination;