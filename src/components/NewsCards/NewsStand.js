import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import NewsStandImage from '../../assets/img/newsPic.jpg';
import newsData from '../NewsCards/newsData';
import NewsCard from '../NewsCards/NewsCard';
import { PAGE_SIZE } from '../NewsCards/Constants';

function NewsStand() {
    const { pageNumber } = useParams(); // Get page number from URL
    const pageNum = parseInt(pageNumber) || 1; // Default to page 1 if not provided

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Calculate the start and end indices for slicing
    const startIndex = 22 - (pageNum - 1) * PAGE_SIZE; // Starting from 22
    const endIndex = startIndex - PAGE_SIZE; // End index for slicing

    // Slice the news data to get only the current page's items
    const currentNewsItems = newsData.slice(endIndex, startIndex); // Slice based on indices

    // Reverse the current news items to display in descending order
    const reversedNewsItems = currentNewsItems.reverse();

    return (
        <div className="container-fluid bg-white">
            <div className="text-center text-black justify-content-center pb-5">
                <h1 className="mt-5">ENSYTE Latest NEWS</h1>
                <img src={NewsStandImage} className='img-fluid' alt='Ensyte data Releases' style={{ maxHeight: "18rem" }} />
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3 g-0=4 mt-2">
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

                <div>
                    <NavLink to={`/news/${pageNum - 1}`}>
                        <button className='btn btn-lg btn-warning m-2' disabled={pageNum === 1}>Prev</button>
                    </NavLink>
                    <NavLink to={`/news/${pageNum + 1}`}>
                        <button className='btn btn-lg btn-warning m-2' disabled={startIndex <= 0}>Next</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NewsStand;




