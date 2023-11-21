
import feautredImg from "../../../assets/home/featured.jpg"
import heroImg from "../../../assets/home/featured.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Button from "../../Shared/Button/Button";
const Feauters = () => {
    return (
       <section className="lg:my-[150px] my-24 ">
        <SectionTitle
  subHeading={'---Check it out---'}
  heading={'FROM OUR MENU'}
        >

        </SectionTitle>

<div className="lg:mb-[170px] mb-20 text-white">

  

</div>
        <div className="hero lg:w-full w-[420px] md:w-[760px]  h-[550px] md:h-[848px] bg-fixed " style={{backgroundImage: `url(${feautredImg})` , opacity:'90'} }>
  <div className="hero-overlay bg-opacity-70">

  </div>
  
  <div className="hero-content  ">
 
    <div className=" flex flex-col lg:flex-row justify-center items-center gap-10  ">

      <img className="lg:w-[648px] w-[400px] md:w-[600px] " src={heroImg} alt="" />
     <div className=" ">
        <p className="text-white font-inter">March 20, 2023</p>
     <h1 className="mb-5 text-3xl font-inter text-white ">WHERE CAN I GET SOME?</h1>
      <p className="mb-5 font-inter text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi.</p>
      <Button title={'Read More'}></Button>
     </div>
    </div>
  </div>
</div>
       </section>
    );
};

export default Feauters;