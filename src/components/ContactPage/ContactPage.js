import './ContactPage.scss'

function ContactPage() {
    return (
        <>
            <section className='contact-info-wrapper'>
                <article className='find-us-wrapper'>
                    <h2>FIND US ON</h2>
                    <div className='find-us-info'>
                        <div className='mobile'>
                            <h2>Mobile</h2>
                            <p>+359 898473056</p>
                        </div>
                        <div className='email'>
                            <h2>Email</h2>
                            <p>pendeva@gmail.com</p>
                        </div>

                    </div>
                </article>
                <article className='contact-us-wrapper'>
                    <h2>CONTACT US</h2>
                    <form className='form-wrapper'> 
                        <div className='input-wrapper'>
                        <input type='text' placeholder='First name' />
                        <input type='text' placeholder='Last name' />
                        <input type='email' placeholder='Email' />
                        <input type='text' placeholder='Phone' />
                        </div>
                        <textarea placeholder='Your message'></textarea>
                    </form>
                    <button className='send-btn'>SEND</button>
                </article>
            </section>
        </>
    );
}
export default ContactPage