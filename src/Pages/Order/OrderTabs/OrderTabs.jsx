import OrderCard from "../OrderCard/OrderCard";


const OrderTabs = ({items}) => {
    return (
        <div>
            <div className="my-20 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2">
    {
        items.map(item=><OrderCard key={item._id} item={item}></OrderCard>)
    }
    </div>
        </div>
    );
};

export default OrderTabs;