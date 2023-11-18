import CallUs from "../../../components/SectionTitle/CallUs/CallUs";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";

import Categeory from "../Categeory/Categeory";
import Feauters from "../Feautres/Feauters";
import FromMeanu from "../FromMeanu/FromMeanu";
import Recomondetion from "../Recomondetion/Recomondetion";


const Home = () => {
    return (
        <div>
    <Banner></Banner>
    <Categeory></Categeory>
    <BistroBoss></BistroBoss>
    <FromMeanu></FromMeanu>
    <CallUs></CallUs>
    <Recomondetion></Recomondetion>
    <Feauters></Feauters>
   
        </div>
    );
};

export default Home;