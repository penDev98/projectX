import "./ServicesPage.scss"
import ServiceDescription from "./ServiceDescription/ServiceDescription";
import HowToDescription from "./HowToDescription/HowToDescription";

function ServicesPage() {
    return ( 
        <>
            <div className='main-img'></div>
            <ServiceDescription/>
            <HowToDescription/> 
        </>
     );
}

export default ServicesPage;