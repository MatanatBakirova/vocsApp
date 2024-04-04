import React, {useEffect, useState} from 'react'
import './Books.css'
import BookItem from "./BookItem.jsx";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Books = () => {


    const [bookList, setBookList] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const cachedBooks = localStorage.getItem('books');

        
       if (bookList) {
        setBookList(JSON.parse(cachedBooks));
       } 
         else {
            setLoading(true);

            const USER_TOKEN ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLnZvY2FidWxhcnkuYXovYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTIyMTI4NDYsImV4cCI6MTczNTU0MDg0NiwibmJmIjoxNzEyMjEyODQ2LCJqdGkiOiJ6VHBsYnphaTZ0cGVuN3VtIiwic3ViIjoiOTU3OCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.FPh38cqsmX-jd15Hg4ncB7DPuEImyfk7hz1On1agYXA'

            const api = 'https://api.vocabulary.az/api/books/list'


            axios.get(api, {
                headers: {
                    'Authorization': `Bearer ${USER_TOKEN}`
                }
            })
                .then(response => {
                    setBookList(response.data.data);
                    setLoading(false);
                    localStorage.setItem('books', JSON.stringify(response.data.data));
                })
                .catch((err) => {
                    console.log('Serverdə xəta: ' + err);
                    setLoading(false);
                })
        }
        },[]);

    if (loading) {
        return (
            <section className='mt-4' style={{width: "1024px"}}>
                <div className='fs-4 fw-semibold'>Books</div>
                <div className="d-flex">
                    <div className="col-12 col-md-6 col-lg-3" style={{margin: '10px'}}>
                        <Skeleton count={1} height={400} width={206}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={{margin: '10px'}}>
                        <Skeleton count={1} height={400} width={206}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={{margin: '10px'}}>
                        <Skeleton count={1} height={400} width={206}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={{margin: '10px'}}>
                        <Skeleton count={1} height={400} width={206}/>
                    </div>
                </div>
            </section>

        )
    }

    return (
        <section className='mt-4' style={{width: "1024px"}}>
            <div className='fs-4 fw-semibold'>Books</div>

            {/* <div className="container"> */}
            <Swiper
                spaceBetween={200}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    }
                }}>

                <div className="col-12 col-md-6 col-lg-4">
                    {bookList && bookList.map(bookData => (
                        <SwiperSlide>
                            <BookItem key={bookData.id}
                                      id={bookData.id}
                                      title={bookData.title}
                                      image={bookData.image}
                                      author={bookData.author}
                                      free={bookData.free}
                                      price={bookData.price}
                                      discount={bookData.discount}
                                      discount_price={bookData.discount_price}
                            />
                        </SwiperSlide>
                    ))}
                </div>

            </Swiper>
            {/* </div> */}

        </section>
    )
                    
                    }           

export default Books