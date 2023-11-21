import { iterate } from "localforage";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxoisSecure from "../../../Hooks/useAxoisSecure";

const Cart = () => {
  const [cart , refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  const axiosSecure=useAxoisSecure()


  const handledelete=_id=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/cart/${_id}`)
      .then(res=>{
        if (res.data.deletedCount>0) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch();
 
        }
       
      })
        }
      });
    
  }

  return (
    <div>
      <div className="mr-[150px]">
        <SectionTitle
          subHeading={"WANNA ADD MORE?"}
          heading={"---My Cart---"}
        ></SectionTitle>
      </div>
      <div className=" bg-slate-100 mt-10 w-[1112px] ml-56   p-10  shadow-lg">
        <div className="flex justify-around  mb-10   gap-10 w-[992px] ">
          <h1 className="text-3xl font-cinzel text-black font-bold drop-shadow-lg">
            Total orders: {cart.length}
          </h1>
          <h1 className="text-3xl font-cinzel text-black font-bold drop-shadow-lg">
            total price: ${totalPrice}
          </h1>
          <button className="px-3 py-2 bg-white text-black font-inter uppercase font-bold rounded">
            Pay
          </button>
        </div>

        <div className="overflow-x-auto  ">
          <table className="table">
            {/* head */}
         
          <thead className="text-black text-sm ">
              <tr>
                
              <div className="">
              <th></th>
                    <th>#</th>
                  
              <th >Food Image</th>
              </div>
            
            <th>Food Name</th>
                <th>Price</th>
                <th>Action</th>
             
              </tr>
            </thead>
       
            <tbody>
                {
                    cart.map((item , index) =>   <tr  key={item._id}>
                     
                        
                        <td>
                      
                          <div className="flex gap-5">
                          <div className="text-left">  <th>
                            {index}
                        </th></div>
                            <div className="avatar">
                          
                              <div className="mask mask-squircle  w-12 h-12">
                                <img
                                  src={item.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                          
                          </div>
                        </td>
                        <td>
                        {item.name}
                         
                        </td>
                        <td>${item.price}</td>
                        <th>
                          <button onClick={()=>handledelete(item._id)} className="px-3 py-2 text-2xl text-white rounded bg-red-600"><FaRegTrashAlt /></button>
                        </th>
                      </tr>
                )
                }



             
        
            </tbody>
          
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
