
import value2 from '../../assets/img/gastar-value.png'

function Value(props) {
    return (
        <div className="row blue-bg blue-pc text-white justify-content-center align-self-center mt-5">
            <h2 className='text-center mt-5'>GASTAR Value</h2>
            <div className="col-lg-3 col-sm-12 text-center">
                <img src={value2} alt="Product" className='mt-3 img-fluid rounded mb-5' />
            </div>
            <div className="col-lg-6 col-sm-12 mt-2 mb-2">
                <p>ENSYTE provides flexible, comprehensive, and feature-rich risk mitigation software solutions for managing the natural gas supply chain—from the producer/marketer to the end user/customer. Our highly customizable GASTAR software is designed by users for users to streamline oil and natural gas business processes. Mix and match the modules and features within the software to best suit your uses and needs. With our powerful, comprehensive natural gas management software (GMS), you’ll minimize risk and optimize performance in your operations to save valuable time and money.</p>
            </div>
        </div>
    )
}

export default Value;