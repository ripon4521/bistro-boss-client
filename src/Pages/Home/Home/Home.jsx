import { Helmet } from "react-helmet";
import CallUs from "../../../components/SectionTitle/CallUs/CallUs";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";

import Categeory from "../Categeory/Categeory";
import Feauters from "../Feautres/Feauters";
import FromMeanu from "../FromMeanu/FromMeanu";
import Recomondetion from "../Recomondetion/Recomondetion";
import Testimoniyels from "../Testimoniels/Testimoniyels";
import { useEffect } from "react";
// import { useEffect } from "react";


const Home = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            
    <Banner></Banner>
    <Categeory></Categeory>
    <BistroBoss></BistroBoss>
    <FromMeanu></FromMeanu>
    <CallUs></CallUs>
    <Recomondetion></Recomondetion>
    <Feauters></Feauters>
    <Testimoniyels></Testimoniyels>
   
        </div>
    );
};

export default Home;