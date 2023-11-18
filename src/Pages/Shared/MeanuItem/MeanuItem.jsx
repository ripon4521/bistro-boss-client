const MeanuItem = ({item}) => {
    console.log(item);
    const {image,price,name,recipe}=item;
    return (
        <div className="flex   ">
           <img style={{borderRadius:'0 200px 200px 200px'}} className=" mb-4 w-[100px]" src={image} alt="" /> 
           <div>
            <h3 className="uppercase text-xl text-black font-cinzel">{name}--------</h3>
            <p className="font-inter">{recipe}</p>
          
           </div>
           <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MeanuItem;