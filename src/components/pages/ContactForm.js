const ContactForm = () => {
    return (

        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" required className="form-control" />
            </p>
            <p>
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" name="email" required className="form-control" />
            </p>
            <p>
                <label htmlFor="phone">Phone Number</label> <br />
                <input type="phone" id="phone" name="phone" required className="form-control" />
            </p>

            <p>
                <label htmlFor="company">Company</label> <br />
                <input type="text" id="company" name="company" required className="form-control" />
            </p>
            <p>
                <label htmlFor="position">Position</label> <br />
                <input type="text" id="position" name="position" required className="form-control" />
            </p>

            <p>
                <label htmlFor="message">Message</label> <br />
                <textarea id="message" name="message" required className="form-control" row="5"></textarea>
            </p>
            <p>
                <input type="submit" value="Submit message" />
            </p>
        </form>
    )
}

export default ContactForm