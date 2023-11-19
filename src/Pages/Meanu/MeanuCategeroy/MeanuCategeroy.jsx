import Cover from "../../Shared/Cover/Cover";
import MeanuItem from "../../Shared/MeanuItem/MeanuItem";


const MeanuCategeroy = ({items,heading,desc,coverImg}) => {
    return (
        <div>
          {heading &&    <Cover 
            heading={heading}
            desc={desc}
            img={coverImg}>

            </Cover>}
            <div className="mt-20  p-4 grid grid-cols-1 md:grid-cols-2 gap-9">
    
    {
        items.map(item=><MeanuItem key={item._id} item={item}></MeanuItem>)
    }
      </div>
      <div className='flex justify-center my-16 '>
         <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
         </div>
        </div>
    );
};

export default MeanuCategeroy;