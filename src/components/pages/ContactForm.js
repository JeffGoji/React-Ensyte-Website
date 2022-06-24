const ContactForm = () => {
    return (

        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="/#/index" />
            <p>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" required className="form-control" />
            </p>
            <p>
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" name="email" required className="form-control" />
            </p>
            <p>
                <label htmlFor="message">Message</label> <br />
                <textarea id="message" name="message" required className="form-control" row="3"></textarea>
            </p>
            <p>
                <input type="submit" value="Submit message" />
            </p>
        </form>
    )
}

export default ContactForm