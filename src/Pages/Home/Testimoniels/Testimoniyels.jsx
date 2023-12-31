import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import img from "../../../assets/home/quote-left 1.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimoniyels = () => {
    const [review,setReview]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
            // console.log(data);
        })
    },[])
    return (
        <section className="my-20 max-w-6xl mx-auto">
            <SectionTitle
            subHeading={'---What Our Clients Say---'}
            heading={'TESTIMONIALS'}
            >
            </SectionTitle>

         <div>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            review.map(item=>   <SwiperSlide key={item._id}
            
            >

                
                <div className="w-[50%] mx-auto">
                <p className="flex justify-center my-10"> 
                <Rating
      style={{ maxWidth: 180 }}
      value={item.rating}
      readOnly
    />
                </p>


                    <img className="mx-auto my-10 " src={img} alt="" />

                   
                    <p className="text-center font-inter">{item.details}</p>
                    <h2 className="text-orange-400 font-inter text-center text-2xl font-inter">{item.name}</h2>
                </div>
            </SwiperSlide>)
        }
        
      </Swiper>
         </div>
          
        </section>
    );
};

export default Testimoniyels;