import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Reviews from "../Reviews/Reviews";
import TopDestination from "../TopDestination/TopDestination";
import UpComingTours from "../UpComingTours/UpComingTours";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopDestination></TopDestination>
            <UpComingTours></UpComingTours>
            <Blogs></Blogs>
            <Reviews></Reviews>
            {/* <h2>This is Home page</h2> */}
        </div>
    );
};

export default Home;