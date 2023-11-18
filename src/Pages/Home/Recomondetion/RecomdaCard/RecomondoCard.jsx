

const RecomondoCard = ({item}) => {
    const{image, name,recipe} = item
    return (
        <div>
                        <div className="   w-[354px] h-461px] overflow-hidden bg-white shadow-lg dark:bg-gray-800">
    <img className="object-cover w-full h-56" src={image} alt="avatar"/>

    <div className="py-5 text-center">
        <a href="#" className="block text-xl font-inter font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{name}</a>
        <h1 className="text-sm  text-gray-700 dark:text-gray-200">{recipe}</h1>
        <button className="uppercase text-black font-semibold rounded px-3 py-2 bg-yellow-400 font-inter mt-3 ">add to cart</button>
    </div>
</div>
        </div>
    );
};

export default RecomondoCard;