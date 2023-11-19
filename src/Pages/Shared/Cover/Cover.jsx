

const Cover = ({img , heading,desc}) => {
    return (

   
       <div>
         <div className="hero h-[600px] bg-fixed md:h-[650px] lg:h-[800px]" style={{backgroundImage: `url("${img}")`}}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content bg-black md:w-[500px] lg:w-[1320px] h-[420px] bg-opacity-30">
          <div className="max-w-md   font-cinzel">
            <h1 className="mb-5  text-7xl text-white drop-shadow-lg  font-bold">{heading}</h1>
            <p className="mb-5 text-xl text-white drop-shadow-lg font-cinzel">{desc}</p>
     
          </div>
        </div>
      </div>
       </div>
      
    );
};

export default Cover;