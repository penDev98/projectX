import './HomePage.scss'
import Header from "./Header/Header";
import Team from "./Team/Team";
import OfferedServices from "./OfferedServices/OfferedServices";

function HomePage() {
    return (  
    <>
    <div className='main-img'></div>
    <Team/>
    <OfferedServices/>
    </>
    );
}

export default HomePage;