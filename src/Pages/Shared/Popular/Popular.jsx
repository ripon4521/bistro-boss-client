// import { useEffect, useState } from "react";
import useMeanu from "../../../Hooks/UseMeanu";

import MeanuItem from "../MeanuItem/MeanuItem";

const Popular = () => {
//     const[meanu , setMeanu]= useState([]);
// useEffect(()=>{
//    fetch('meanu.json')
//     .then(res=>res.json())
//     .then(data=>{
//         const popularItem = data.filter(item=> item.category == 'popular')
//         setMeanu(popularItem)
//         console.log(popularItem);
//     })
// },[])

const [meanu , loading] = useMeanu()
const popularItem = meanu.filter(item=> item.category == 'popular')

    return (
        
       <div className="mt-12 p-4 grid grid-cols-1 md:grid-cols-2 gap-9">
    
            {
                popularItem.map(item=><MeanuItem key={item._id} item={item}></MeanuItem>)
            }
              </div>
    );
};

export default Popular;