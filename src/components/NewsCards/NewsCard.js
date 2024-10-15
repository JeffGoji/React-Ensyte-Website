// src/components/NewsCard.js
import React, { useState } from 'react';

const NewsCard = ({ title, description, image, modalContent, buttonLabel }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="col mb-4">
                <div className="card mb-5 h-100">
                    <div className="card-header text-center blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={image} alt={title} className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">{title}</h4>
                    </div>
                    <div className='card-footer'>
                        <button className="btn btn-primary btn-lg" onClick={handleOpenModal}>
                            {buttonLabel}
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header text-center blue-bg">
                                <h3 className="modal-title text-white">{title}</h3>
                                <button type="button" className="btn-close text-white" onClick={handleCloseModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-6 text-wrap">
                                {/* <div className="text-center mb-4">
                                    <img src={image} alt={title} className='imgShadow img-fluid rounded' style={{ maxHeight: "35rem" }} />
                                </div> */}
                                <p>{modalContent}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-white" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NewsCard;
