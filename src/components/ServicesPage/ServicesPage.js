import "./ServicesPage.scss"
import ServiceDescription from "./ServiceDescription/ServiceDescription";
import HowWeDoIt from "./HowWeDoIt/HowWeDoIt";
import CallToAction from "./CallToAction/CallToAction";

function ServicesPage() {
    return ( 
        <>
            <div className='main-img'></div>
            <ServiceDescription/>
            <HowWeDoIt/> 
            <CallToAction/>
        </>
     );
}

export default ServicesPage;