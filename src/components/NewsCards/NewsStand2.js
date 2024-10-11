// src/components/NewsStand2.js
import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import newsData from '../NewsCards/newsData'; // Import the news data
import NewsCard from '../NewsCards/NewsCard'; // Assuming NewsCard is the reusable component
import { PAGE_SIZE } from '../NewsCards/Constants'; // Import constants

function NewsStand2() {
    const { pageNumber } = useParams(); // Get page number from URL
    const pageNum = parseInt(pageNumber) || 2; // Default to page 1 if not provided

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Calculate the start and end indices for slicing
    const startIndex = 16 - (pageNum - 1) * PAGE_SIZE; // Start from 16, decrease by PAGE_SIZE for each new page
    const endIndex = startIndex - PAGE_SIZE; // The end index for slicing

    return (
        <div className="container-fluid bg-white">
            <div className="text-center text-black justify-content-center pb-5">
                <h1 className="mt-5">ENSYTE Latest NEWS</h1>
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3 g-0=4 mt-2">
                    {newsData
                        .filter(item => item.index <= 16 && item.index > endIndex) // Filter entries based on calculated indices
                        .sort((a, b) => b.index - a.index) // Sort in descending order by index
                        .map(news => (
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

                <div>
                    <NavLink to={`/newsstand/${pageNum - 1}`}>
                        <button className='btn btn-lg btn-warning m-2' disabled={pageNum === 1}>Prev</button>
                    </NavLink>
                    <NavLink to={`/newsstand/${pageNum + 1}`}>
                        <button className='btn btn-lg btn-warning m-2'>Next</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NewsStand2;
