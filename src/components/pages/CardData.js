import React, { useState } from 'react';
import projects from '../../Articles';

function CardData(props) {
    const [projectList] = useState(projects);
    // let newsContent = [
    //     {
    //         title: "ENSYTE Enhances Producer Services Solution",
    //     }
    // ];

    return (

        <div className="col" >

            {props.children}
            {/* Map through 'portfolioList' and render a 'Card' for each project */}
            {projectList.map((projects) => (
                <CardData
                    name={projects.name}

                />
            ))}


            {/* <div className="card mb-5">
                <div className="card text-center">
                    <div className="card-header">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <h5 className="card-title">
                            {newsContent[0].title}
                        </h5>
                        <button href="#" className="btn btn-primary">Read More</button>
                    </div>
                    <div className="card-footer text-muted" id="card1">

                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default CardData;