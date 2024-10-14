// src/components/NewsCards.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import image1 from '../../assets/img/newsPic.jpg';
import NewsCard from './NewsCard';
import newsData from './newsData';
import { PAGE_SIZE } from '../NewsCards/NewsStandConstants';


function NewsCards() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { pageNumber } = useParams();
    const pageNum = parseInt(pageNumber) || 1; // Default to page 1 if not provided

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Calculate the start and end indices for slicing
    const startIndex = 25 - (pageNum - 1) * PAGE_SIZE; // Starting from 22
    const endIndex = startIndex - PAGE_SIZE; // End index for slicing

    // Slice the news data to get only the current page's items
    const currentNewsItems = newsData.slice(endIndex, startIndex); // Slice based on indices

    // Reverse the current news items to display in descending order
    const reversedNewsItems = currentNewsItems.reverse();

    return (
        <div className="row text-center blue-text justify-content-center bg-white">
            <h1 className="mt-5">ENSYTE News</h1>
            <img src={image1} className='img-fluid' alt='Ensyte News Releases' style={{ maxWidth: "350px" }} />
            <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3 g-0=4 mt-2 mb-5">
                {reversedNewsItems.map(news => (
                    <NewsCard
                        key={news.index}
                        title={news.title}
                        description={news.description}
                        image={news.image}
                        modalContent={news.modalContent}
                        buttonLabel="Read More"
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsCards;
