import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [down, setDown] = useState(0);
    const [up, setUp] = useState(3);
    const [pageNumber, setPage] = useState(1);
    const handleUp = () => {
        setDown(down + 1)
        setUp(up + 1)
    }
    const handleDown = () => {
        setDown(down - 1)
        setUp(up - 1)
    }
    const pages = Math.ceil(reviews.length / 3);
    const totalPages = [];
    for (let i = 1; i <= pages; i++) {
        totalPages.push(i)
    }
    const handlePage = (down) => {
        setDown(down * 3);
        setUp(down * 3 + 3)
    }
    useEffect(() => {
        fetch('https://pure-dawn-17806.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.reverse()))
    }, [])
    return (
        <section className='my-28 mx-auto mt-24 mb-24 max-w-7xl'>
            <h1 className='text-[#24cfcc] text-center text-4xl font-bold mb-10'>Our Customer Reviews</h1>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto text-[#1a1717]'>
                        {
                            reviews.slice(down, up).map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                        <button onClick={handleDown} className="btn btn-circle btn-warning" disabled={down === 0}>❮</button>
                        <button onClick={handleUp} className="btn btn-circle btn-warning" disabled={up >= reviews.length}>❯</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2 mt-3">
                {
                    totalPages.map((page, index) => <button key={index} className={`btn btn-xs ${pageNumber === page ? 'btn-warning' : 'btn-primary'}`} onClick={() => {
                        handlePage(page - 1)
                        setPage(page)
                    }}>{page}</button>)
                }
            </div>

        </section>
    );
};

export default Reviews;