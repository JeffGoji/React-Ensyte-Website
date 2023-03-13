import React, { useState } from 'react';
import data from '../data.json';

function CardData() {
    const [cardList] = useState(data);

    return (

        <div className="col" >
            {/* Map through 'portfolioList' and render a 'Card' for each card */}
            {cardList.map((cards) => (
                <CardData
                    key={cards.id}
                    title={cards.name}
                    image={cards.image}
                    date={cards.date}

                />
            ))}


            <div className="card mb-5" key={data.id}>
                <div className="card text-center">
                    <div className="card-header">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <h5 className="card-title">
                            {data.title}
                            <img src={data.image} alt='Card' />
                        </h5>
                        <button href="#" className="btn btn-primary">Read More</button>
                    </div>
                    <div className="card-footer text-muted" id="card1">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardData;