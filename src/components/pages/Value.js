
import value2 from '../../assets/img/gastar-value.png'

function Value(props) {
    return (
        <div>
            <div className="row blue-bg justify-content-center align-self-center">
                <h1 className='text-center mb-3 mt-3 text-white'>GASTAR Value</h1>
            </div>
            <div className="row blue-pc justify-content-center align-self-center mt-2">
                <div className="col-lg-3 col-sm-12 text-center">
                    <img src={value2} alt="Product" className='mt-3 img-fluid rounded imgShadow mb-5' />
                </div>
                <div className="col-lg-6 col-sm-12 mt-6 mb-2">
                    <p>ENSYTE provides flexible, comprehensive, and feature-rich risk mitigation software solutions for managing the natural gas supply chain—from the producer/marketer to the end user/customer. Our highly customizable GASTAR software is designed by users for users to streamline oil and natural gas business processes. Mix and match the modules and features within the software to best suit your uses and needs. With our powerful, comprehensive natural gas management software (GMS), you’ll minimize risk and optimize performance in your operations to save valuable time and money.</p>
                </div>
            </div>
        </div>
    )
}

export default Value;