import React from 'react';

export default class Slide6 extends React.Component {

    render() {

        return (
            <div className='mt-3 justify-content-center bg-white'>
                <div class="card text-black lightGradient imgBg3 p-5" style={{ minHeight: "600px" }}>
                    <h1 className="card-title mt-5 blue-text">GASTAR Hosting Options</h1>
                    <p className="card-text fs-4"> ENSYTE offers flexible options with regards to hosting environments for GASTAR. We have clients who house GASTAR on their own environment, as well as clients that host the solution using other services such as Amazon Web Services (AWS). ENSYTE also partners with CyberlinkASP to provide a hosted environment for GASTAR for a monthly fee.</p>
                    <h2 className="mt-5 blue-text">NGL / LNG Module Features:</h2>
                    <div className="mt-3 mb-5 text-start fs-4">
                        <h2>GASTAR hosting:</h2>
                        <div className='text-start fs-4'>
                            <ul>
                                <li>Client-Owned Environment</li>
                                <li>ENSYTE Hosted Environment</li>
                                <li>Other Hosting Services (Amazon Web Services, Azure, etc.)</li>
                            </ul>


                        </div>

                    </div>
                </div >
            </div>
        )
    }
}