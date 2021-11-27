import './OfferedServices.scss'

function OfferedServices() {
    return (
        <>
            <div className="services-component">
                <h2>SERVICES</h2>
                <ul>
                    <li className="services">
                        <p className="service-img"></p>
                        <p className="service-description">WEB DEVELOPMENT <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil, accusantium dolorum dolore nesciunt aut. Beatae ut quasi aut, fuga placeat nihil quas cumque ipsam possimus porro voluptatem vel ab!</p>
                    </li>
                    <li className="services">
                        <p className="service-description">WEB DESIGN <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio dolores non. Perspiciatis dolorem quo praesentium, placeat sunt veniam! Nesciunt, ea. Possimus odit beatae atque harum dolorem provident explicabo veritatis.</p>
                        <p className="service-img"></p>
                    </li>
                    <li className="services">
                        <p className="service-img"></p>
                        <p className="service-description">NESHTO SI DRUGO <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, repellat illum eum necessitatibus dolor dolores, corporis expedita blanditiis perspiciatis impedit quis? Itaque sed, aut quibusdam molestiae harum odio quae hic.</p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default OfferedServices;