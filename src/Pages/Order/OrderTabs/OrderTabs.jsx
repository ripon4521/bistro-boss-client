import OrderCard from "../OrderCard/OrderCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const OrderTabs = ({items}) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

    return (
        <div>



            <div >

            <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
       <div className="my-20 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2">
       {
        items.slice(0,6).map(item=><OrderCard key={item._id} item={item}></OrderCard>)
    }
       </div>
        </SwiperSlide>
   </Swiper>
    </div>
        </div>
    );
};

export default OrderTabs;