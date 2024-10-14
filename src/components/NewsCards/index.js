// src/components/NewsStand.js
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import image1 from '../../assets/img/newsPic.jpg';
import NewsCard from './NewsCard'; // Assuming NewsCard is the reusable component
import newsData from './newsData'; // Import the news data

function NewsStand() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-white">
            <div className="text-center text-black justify-content-center pb-5">
                <h1 className="mt-5">ENSYTE Latest NEWS</h1>
                <img src={image1} className='img-fluid' alt='Ensyte data Releases' style={{ maxHeight: "18rem" }} />

                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3 g-0=4 mt-2">
                    {newsData.slice(0, 3).map((news, index) => (
                        <NewsCard
                            key={index}
                            title={news.title}
                            description={news.description}
                            image={news.image}
                            modalContent={news.modalContent}
                            buttonLabel="Read More"
                        />
                    ))}
                </div>

                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3 g-0=4 mt-4">
                    {newsData.slice(3, 6).map((news, index) => (
                        <NewsCard
                            key={index + 3}
                            title={news.title}
                            description={news.description}
                            image={news.image}
                            modalContent={news.modalContent}
                            buttonLabel="Read More"
                        />
                    ))}
                </div>

                <div>
                    <NavLink to="../newsstand2">
                        <button className='btn btn-lg btn-warning m-2'>Next</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NewsStand;
