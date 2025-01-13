import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/Fiction.jpg'
import slide2 from '../../../assets/home/Non-fiction.jpg'
import slide3 from '../../../assets/home/Academic.jpg'
import slide4 from '../../../assets/home/Children.jpg'
import slide5 from '../../../assets/home/Language.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"  Offers"}
                heading={"The Difference"}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='mb-14'>
                    <img src={slide1} alt="" />
                    <h3 className='text-2xl uppercase font-semibold text-gray-300 text-center -mt-14' >Fiction</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-2xl uppercase font-semibold text-gray-300 text-center -mt-14' >Non-Fiction</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-2xl uppercase font-semibold text-gray-300 text-center -mt-14' >Academic</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-2xl uppercase font-semibold text-gray-300 text-center -mt-14' >Children's Books</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-2xl uppercase font-semibold text-gray-300 text-center -mt-14' >Lanuage Books</h3>
                </SwiperSlide>


            </Swiper>
        </section>
    );
};

export default Category;