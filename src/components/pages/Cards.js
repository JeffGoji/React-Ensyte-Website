function Cards(props) {
    // const [data] = UseState(News);

    return (

        <div className="container-fluid mb-5 bg-white">

            {/* <Cards /> */}

            <div className="col">
                <div className="card mb-5">
                    <div className="card text-center">
                        <div className="card-header">FEATURED / NEWS RELEASE</div>
                        <div className="card-body">
                            <h3 className="card-title">{props.name}</h3>

                            <text href="#" className="btn btn-primary">Read More</text>
                        </div>
                        {/* <div className="card-footer text-muted">Posted 3/24/2022</div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Cards