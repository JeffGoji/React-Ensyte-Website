import { useEffect } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-white" style={{ marginTop: "5.7rem" }}>
            <div className="row align-items-center-top lightblue-bg">
                <h2 className="text-center mt-3 mb-2 card-title">Contact Us</h2>
                <div className="col-lg-6 col-sm-12 mt-3 mb-3">
                    <div className="card rounded-2">
                        <div className="card-header bg-primary text-white">
                            <h2 className="text-center card-title">Contact Form</h2>
                        </div>
                        <div>
                            <div className="mb-3 card-body">
                                <p className="text-center">Fill out our contact form below to submit any questions you may have, request a demo of our software, or request customer support.</p>
                                {/* <form onSubmit={handleSubmit}> */}
                                <div className="mb-3">

                                    <ContactForm />

                                </div>

                                {/* <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="John"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Henry"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                        <input className="form-control" id="phone" placeholder="555-555-5555"></input>
                                    </div>
                                    
                                    <div className="d-grid gap-2 col-6 mx-auto mb-5">
                                        <button className="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>*/}
                            </div>
                        </div>
                    </div>
                </div>



                {/* Address and Information section */}
                <div className="col-lg-6 col-sm-12 mt-3 mb-3">
                    <div className="card rounded-2">
                        <div className="card-header bg-primary text-white"><h2 className="card-title text-center">Contact Information</h2></div>
                        <div className="card-body">

                            <div className="card-text fs-5">
                                <dl>
                                    <dt><h3>ENSYTE Energy Software Int’l, Inc.</h3></dt>
                                    <dt>Phone</dt>
                                    <dd><a href="tel:+7133717800" alt="Click to call">(713) 371-7800</a></dd>
                                    <dt>Fax</dt>
                                    <dd>(713) 622-2876</dd>
                                    <dt>Email</dt>
                                    <dd>ENSYTE Energy Software Int’l, Inc.
                                        <br />
                                        770 S. Post Oak Ln., Suite 330
                                        <br />
                                        Houston, TX 77056</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default Contact;