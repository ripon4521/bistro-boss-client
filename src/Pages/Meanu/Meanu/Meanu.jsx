import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import meanuImg from "../../../assets/menu/banner3.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


import Popular from '../../Shared/Popular/Popular';


const Meanu = () => {
    return (
        <div>
            <Helmet >
                <title>Bistro Boss || Meanu</title>
            </Helmet>
            <Cover 
            heading={'OUR MENU'}
            desc={'Would you like to try a dish?'}
            img={meanuImg}>

            </Cover>
           <div className='my-20'>
           <SectionTitle
            heading={'---Dont miss---'} subHeading={'TODAYS OFFER'}>
                
            </SectionTitle>
           </div>
           
          <div className=''>
          <Popular></Popular>


          </div>
         
         <div className='flex justify-center my-16 '>
         <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
         </div>
        </div>
    );
};

export default Meanu;