import devTeam from '../../assets/img/customized-solutions-02.jpg'

function Tech1(props) {
    return (
        <div className="row mt-5 justify-content-center align-self-center">
            <h2 className='text-center mb-5'>GASTAR Technology</h2>
            <div className="col-lg-3 col-sm-12 text-center">
                <img src={devTeam} alt="Dev Support" className='mt-3 mb-5 rounded img-fluid imgShadow' style={{ maxHeight: "300px" }} />
            </div>
            <div className="col-lg-6 col-sm-12 text-justify mt-3 mb-4 justify-content-end">

                <p>
                    Another differentiator for ENSYTE is the company’s longstanding emphasis on technology, as opposed to generating billable hours, which translates into a significant focus on investing time and resources back into GASTAR™. The product has evolved through the Microsoft technology environment since inception and most recently was converted to the latest workstation and database technology utilizing the Visual Studio DOT.NET and WPF development tools. This technical base offers a long deployment life with minimal annual resource allocations for upgrades. Full adherence to the Microsoft software development and deployment tool sets assures the GASTAR™ client of long-term deployment and return on investment.</p>
            </div>
        </div>
    )
}

export default Tech1;