// import { MdSettings } from "react-icons/md";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import useAxoisSecure from "../../../Hooks/useAxoisSecure";
import useCart from "../../../Hooks/useCart";


const OrderCard = ({item}) => {
    const {image, recipe,name,price}=item;
  const {user} = useAuth();
  const axiosSecure =useAxoisSecure();
  const [,refetch ]= useCart()

    const handleAddTocart = food =>{
            if (user && user?.email) {
       
                // Send data on database 
            const cartItem ={
                email: user?.email,
                name,
                image,
                price }


            axiosSecure.post('/cart',cartItem)
            .then(result =>{
                refetch()
                toast.success("Added to the Cart!")
            
                console.log(result);
            })
            .catch(error=>{
                toast.error("Please Login!")
                console.log(error);
            })

        //     .then(res=> {

        //         toast.success("Added to the Cart!")
        //     console.log(res);
        //     refetch()
        //     })

            
        //     .catch(err=>{
        //         console.log(err)})
        // }
        
        // {toast.error("Please Login!")}}

            }}


    return (
      <div>
        <div>
          <div className=" ml-8 md:ml-0 p-0 md:p-3  w-[354px] h-[461px] overflow-hidden bg-white shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src={image}
              alt="avatar"
            />
            <p className="bg-black text-sm text-white px-2 rounded absolute  ml-60 -mt-52  py-2 w-20">
              ${price}
            </p>

            <div className="py-5 text-center">
              <a
                href="#"
                className="block text-xl font-inter font-bold text-gray-800 dark:text-white"
                tabindex="0"
                role="link"
              >
                {name}
              </a>
              <h1 className="text-sm  text-gray-700 dark:text-gray-200">
                {recipe}
              </h1>
              <button
                onClick={handleAddTocart}
                className=" text-[#BB8506]  bg-[#E8E8E8] btn btn-outline mt-3 uppercase  border-0 border-b-4"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OrderCard;