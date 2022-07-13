import value2 from '../../assets/img/gas-producer.jpg'

function Flex(props) {
    return (
        <div className="row blue-bg text-white justify-content-center align-self-center blue-team">
            <h2 className='text-center mb-4 mt-2'>GASTAR Flexibility</h2>
            <div className="col-lg-6 col-sm-12 mt-1 ">
                <p>GASTAR can be offered as an off-the-shelf “plug-n-play” product or as a fully customized system. ENSYTE offers flexible options with regards to hosting environments for GASTAR. We have clients who house GASTAR on their own environment, as well as clients that host the solution using other services such as Amazon Web Services (AWS). ENSYTE also partners with Cyberlink ASP Solutions to provide a hosted environment for GASTAR for a monthly fee. Visit our Hosting Options page to learn more.</p>
            </div>
            <div className="col-lg-3 col-sm-12 text-center">
                <img src={value2} alt="Product" className='mt-1 mb-5 img-fluid rounded imgShadow' />
            </div>
        </div>
    )
}

export default Flex;