

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 text-center mx-auto my-8">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h3 className="text-4xl font-bold uppercase py-4 border-y-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;