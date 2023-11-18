import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MeanuItem from "../../Shared/MeanuItem/MeanuItem";


const FromMeanu = () => {
    const[meanu , setMeanu]= useState([]);
    useEffect(()=>{
       fetch('meanu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem = data.filter(item=> item.category == 'popular')
            setMeanu(popularItem)
            console.log(popularItem);
        })
    },[])
    return (
        <section className="mb-12">
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}>

            </SectionTitle>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-9">
            {
                meanu.map(item=><MeanuItem key={item._id} item={item}></MeanuItem>)
            }
            </div>
            </section>
    );
};

export default FromMeanu;