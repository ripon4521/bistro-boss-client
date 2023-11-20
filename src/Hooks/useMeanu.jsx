import { useEffect, useState } from "react";


const useMeanu = () => {
    const[meanu , setMeanu]= useState([]);
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
       fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>{
            // const popularItem = data.filter(item=> item.category == 'popular')
            setMeanu(data)
            setLoading(false)
            // console.log(popularItem);
        })
    },[])
    return [meanu,loading]
};

export default useMeanu;