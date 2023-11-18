
const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="text-center md:w-3/12 mx-auto ">
            <p className="text-yellow-500 font-inter py-4">{subHeading}</p>
            <h1 className="uppercase font-inter text-4xl border-y-4 py-4">{heading}</h1>
            
        </div>
    );
};

export default SectionTitle;