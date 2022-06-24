const ContactForm = () => {
    return (

        <form name="contact" method="POST" data-netlify="true">
            <p>
                <label>Your Name: <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="John" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /></label>
            </p>
            {/* <p>
                <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                </select></label>
            </p> */}
            <p>
                <label>Message: <textarea name="message" className="form-control" rows="3"></textarea></label>
            </p>
            <p>
                <button type="submit" className="btn btn-primary">Send</button>
            </p>
        </form>)
}

export default ContactForm