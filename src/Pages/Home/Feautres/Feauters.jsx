
import feautredImg from "../../../assets/home/featured.jpg"
import heroImg from "../../../assets/home/featured.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Feauters = () => {
    return (
       <section className="my-[150px] ">
<div className="-mb-[170px] text-white">
<SectionTitle
  subHeading={'---Check it out---'}
  heading={'FROM OUR MENU'}
        >

        </SectionTitle>
</div>
        <div className="hero lg:h-[848px]  " style={{backgroundImage: `url(${feautredImg})` , opacity:'90'} }>
  <div className="hero-overlay bg-opacity-70">

  </div>
  
  <div className="hero-content  ">
 
    <div className=" flex justify-center items-center gap-10  ">

      <img className="w-[648px]" src={heroImg} alt="" />
     <div>
        <p className="text-white font-inter">March 20, 2023</p>
     <h1 className="mb-5 text-3xl font-inter text-white ">WHERE CAN I GET SOME?</h1>
      <p className="mb-5 font-inter text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
      <button className="text-white border-b-4">Read More</button>
     </div>
    </div>
  </div>
</div>
       </section>
    );
};

export default Feauters;