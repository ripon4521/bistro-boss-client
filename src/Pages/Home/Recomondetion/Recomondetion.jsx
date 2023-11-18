import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecomondoCard from "./RecomdaCard/RecomondoCard";


const Recomondetion = () => {
    const[recomn , setRecomon] = useState([])
    useEffect(()=>
    {
        fetch('meanu.json')
        .then(res=>res.json())
        .then(data=>{
            setRecomon(data)
            // console.log(data);
        })
    },[])
    return (
        <section>
            <SectionTitle
            subHeading={'---Should Try---'}
            heading={'CHEF RECOMMENDS'}
            >

            </SectionTitle>
            <div className="my-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2">
            {
                recomn.slice(9,12).map(item=><RecomondoCard key={item._id} item={item}></RecomondoCard>)
            }
            </div>
        </section>
    );
};

export default Recomondetion;