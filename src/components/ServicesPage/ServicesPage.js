import "./ServicesPage.scss"
import ServiceDescription from "./ServiceDescription/ServiceDescription";
import HowWeDoIt from "./HowWeDoIt/HowWeDoIt";

function ServicesPage() {
    return ( 
        <>
            <div className='main-img'></div>
            <ServiceDescription/>
            <HowWeDoIt/> 
        </>
     );
}

export default ServicesPage;