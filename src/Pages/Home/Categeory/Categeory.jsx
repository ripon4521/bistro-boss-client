import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"

const Categeory = () => {
    return (
        <div className='mb-10'>
            <h1 className='text-6xl my-10 text-yellow-400 text-center font-inter font-semibold drop-shadow-lg'>Our Food Categeory</h1>
              <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-4xl  text-white shadow-lg uppercase font-cinzel text-center -mt-12'>Salad</h1>
        </SwiperSlide>
       
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className='text-4xl text-white shadow-lg  uppercase font-cinzel text-center -mt-12'>Salad</h1>
        </SwiperSlide>
       
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className='text-4xl text-white shadow-lg  uppercase font-cinzel text-center -mt-12'>Soups</h1>
        </SwiperSlide>
       
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className='text-4xl text-white shadow-lg uppercase font-cinzel text-center -mt-12'>pizzas</h1>
        </SwiperSlide>
       
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className='text-4xl text-white shadow-lg   uppercase font-cinzel text-center -mt-12'>desserts</h1>
        </SwiperSlide>
       
        
      </Swiper>
        </div>
    );
};

export default Categeory;