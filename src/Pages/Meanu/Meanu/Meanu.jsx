import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import meanuImg from "../../../assets/menu/banner3.jpg"
import desertBg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../../../assets/menu/pizza-bg.jpg"
import saladBg from "../../../assets/menu/salad-bg.jpg"
import soupBg from "../../../assets/menu/soup-bg.jpg"
// import meanuImg2 from "../../../assets/menu/dessert-bg.jpeg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMeanu from '../../../Hooks/UseMeanu';
import MeanuCategeroy from '../MeanuCategeroy/MeanuCategeroy';


const Meanu = () => {


    const [meanu]=useMeanu();
    const offered = meanu.filter(item=> item.category == 'offered')
    const dessert = meanu.filter(item=> item.category == 'dessert')
    const pizza = meanu.filter(item=> item.category == 'pizza')
    const salad = meanu.filter(item=> item.category == 'salad')
    const soup = meanu.filter(item=> item.category == 'soup')

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

            <div className=''>
        <MeanuCategeroy items={offered}>

        </MeanuCategeroy>


        <MeanuCategeroy
        desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        coverImg={desertBg}
        heading={'Desert'} items={dessert}>

        </MeanuCategeroy>

        <MeanuCategeroy
        items={pizza}
        coverImg={pizzaBg}
        heading={'Pizza'}
        desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        >

        </MeanuCategeroy>

        <MeanuCategeroy
        items={salad}
        coverImg={saladBg}
        heading={'Salad'}
        desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}

        ></MeanuCategeroy>

<MeanuCategeroy
        items={soup}
        coverImg={saladBg}
        heading={'Soup'}
        desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}

        ></MeanuCategeroy>

        
        </div>
       
           </div>
           
       
         
      


      




        </div>
    );
};

export default Meanu;