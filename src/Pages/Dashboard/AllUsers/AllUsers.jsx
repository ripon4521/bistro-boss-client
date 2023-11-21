import axios from "axios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
    const {data}=useQuery({
        
    })
   


    return (
        <div className="mt-10">
            <SectionTitle subHeading={'MANAGE ALL USERS'} heading={'---How many??---'}></SectionTitle>
            <div className="bg-slate-100 mt-10 w-[1112px] ml-60   p-10  shadow-lg">
            <div className=" flex justify-center gap-48 mb-10  w-[992px] ">
          <h1 className="text-3xl font-cinzel text-black font-bold drop-shadow-lg">
            Total Users:
          </h1>
          <h1 className="text-3xl font-cinzel text-black font-bold drop-shadow-lg">
            All Users:
          </h1>
         
        </div>
            </div>
        </div>
    );
};

export default AllUsers;