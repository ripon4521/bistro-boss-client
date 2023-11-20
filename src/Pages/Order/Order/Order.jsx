import { useEffect, useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMeanu from "../../../Hooks/UseMeanu";
// import OrderCard from "../OrderCard/OrderCard";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])
    const categories = ['Salad','Pizza','Soup','Dessert','Drinks']
    const [meanu]=useMeanu();
    const {category} = useParams()
    const initialindex = categories.indexOf(category)
    // console.log(category);
    const drinks = meanu.filter(item=> item.category == 'drinks')
    const dessert = meanu.filter(item=> item.category == 'dessert')
    const pizza = meanu.filter(item=> item.category == 'pizza')
    const salad = meanu.filter(item=> item.category == 'salad')
    const soup = meanu.filter(item=> item.category == 'soup')
    const [tabindex,setTabindex]=useState(initialindex)

    return (
        <div className="mb-20">
            <Helmet>
                <title>Bistro Boss || Our Shop</title>
            </Helmet>
            <Cover img={orderCover} heading={'OUR SHOP'} desc={'Would you like to try a dish?'}></Cover>
            <div  className="text-center   my-28 font-inter md:text-2xl font-semibold text-black ">
            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
<div className="">
<TabList >
    <Tab>Salad</Tab>
    <Tab>Pizza </Tab>
    <Tab>Soup </Tab>
    <Tab>Dessret </Tab>
    <Tab>Drink </Tab>
  </TabList>
</div>
  <TabPanel><OrderTabs items={salad}></OrderTabs></TabPanel>
  <TabPanel><OrderTabs items={pizza}></OrderTabs></TabPanel>
  <TabPanel><OrderTabs items={soup}></OrderTabs></TabPanel>
  <TabPanel><OrderTabs items={dessert}></OrderTabs></TabPanel>
  <TabPanel><OrderTabs items={drinks}></OrderTabs></TabPanel>
  
</Tabs>
            </div>
        </div>
    );
};

export default Order;