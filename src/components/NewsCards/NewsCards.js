// src/components/NewsCards.js
import React, { useEffect } from 'react';
import image1 from '../../assets/img/newsPic.jpg';
import NewsCard from './NewsCard';

const newsData = [
    {
        title: 'ENSYTE Enhances Producer Services Solution',
        description: 'Details about the enhancement...',
        image: 'path/to/image1.jpg',
        buttonLabel: 'Read More',
        modalContent: `ENSYTE is rolling out enhancements to its GASTAR Producer Services Solution to include:
        Better Logic for Capturing Natural Gas Sales Netback Quantity and Value; ...`, // add more details here
    },
    {
        title: 'Second News Item',
        description: 'Details about the second news item...',
        image: 'path/to/image2.jpg',
        buttonLabel: 'Read More',
        modalContent: `Details about the second news item...`, // add more details here
    },
    // Add more card data as needed
];

function NewsCards() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="row text-center blue-text justify-content-center bg-white">
            <h1 className="mt-5">ENSYTE News</h1>
            <img src={image1} className='img-fluid' alt='Ensyte News Releases' style={{ maxWidth: "350px" }} />
            <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3 g-0=4 mt-2 mb-5">
                {newsData.map((news, index) => (
                    <NewsCard
                        key={news.index}
                        title={news.title}
                        description={news.description}
                        image={news.image}
                        buttonLabel={news.buttonLabel}
                        modalContent={news.modalContent}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsCards;
