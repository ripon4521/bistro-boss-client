import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const Cover = ({img , heading,desc}) => {
    return (

        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the meanu"
        strength={-200}
    >
         <div>
         <div className="hero w-full h-[600px]  md:h-[650px] lg:h-[800px]" >
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content bg-black md:w-[500px] lg:w-[1320px] h-[420px] bg-opacity-30">
          <div className="max-w-md   font-cinzel">
            <h1 className="mb-5  text-7xl text-white drop-shadow-lg  font-bold">{heading}</h1>
            <p className="mb-5 text-xl text-white drop-shadow-lg font-cinzel">{desc}</p>
            <Link to={`/order/${heading}`} className="text-yellow-600 bg-white btn btn-outline font-inter border-0 border-b-4">Order Now</Link>
          </div>
        </div>
      </div>
       </div>
    </Parallax>
   
      
      
    );
};

export default Cover;