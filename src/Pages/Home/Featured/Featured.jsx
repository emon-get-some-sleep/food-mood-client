import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item">

            </SectionTitle>
            <div className="md:flex justify-center items-center py-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia omnis a animi harum delectus hic atque ducimus blanditiis doloribus! Necessitatibus alias quidem deserunt et officiis sequi incidunt amet recusandae, quis minima suscipit, impedit quos eaque veniam id architecto natus reprehenderit. Blanditiis, cumque? Corrupti porro adipisci ex placeat obcaecati soluta.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;