const ContactForm = () => {

    (() => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

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
                <input name="robot" required className="form-check-input m-2" type="checkbox" value="not a robot" id="robot"></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    I am not a Robot
                </label>
            </p>
            <div className="invalid-feedback">
                You must agree before submitting.
            </div>
            <p>
                <input type="submit" value="Submit message" className="btn btn-lg btn-primary" />
            </p>

        </form>

    )
}

export default ContactForm