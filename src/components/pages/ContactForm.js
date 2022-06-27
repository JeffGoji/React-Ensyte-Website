const ContactForm = () => {
    return (
        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label htmlFor="name" className="form-label">Name</label> <br />
                <input type="text" id="name" name="name" required className="form-control" />
            </p>
            <p>
                <label htmlFor="email" className="form-label">Email</label> <br />
                <input type="email" id="email" name="email" required className="form-control" />
            </p>
            <p>
                <label htmlFor="phone" className="form-label">Phone Number</label> <br />
                <input type="phone" id="phone" name="phone" required className="form-control" />
            </p>

            <p>
                <label htmlFor="company" className="form-label">Company</label> <br />
                <input type="text" id="company" name="company" required className="form-control" />
            </p>
            <p>
                <label htmlFor="position" className="form-label">Position</label> <br />
                <input type="text" id="position" name="position" required className="form-control" />
            </p>

            <p>
                <label htmlFor="message" className="form-label">Message</label> <br />
                <textarea id="message" name="message" required className="form-control" row="5"></textarea>
            </p>
            <p>
                <input htmlFor="Not a robot" className="form-check-input m-2" type="checkbox" value="I am not a Robot" id="flexCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    I am not a Robot
                </label>

            </p>

            <p>
                <input type="submit" value="Submit message" className="btn btn-lg btn-primary" />
            </p>

        </form>
    )
}

export default ContactForm