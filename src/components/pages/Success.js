import { NavLink } from 'react-router-dom';

const Success = () => {
    return (
        <div className="container-fluid text-center">
            <main className="row">
                <div className="col-12">
                    <h2>Thank you for submitting the contact form!</h2>
                    <h4>A member of our team will get back to you shortly</h4>
                    <NavLink to='/'><button className='btn btn-lg btn-primary'>Click here to Return to main screen</button></NavLink>
                </div>

            </main>

        </div>)
}

export default Success