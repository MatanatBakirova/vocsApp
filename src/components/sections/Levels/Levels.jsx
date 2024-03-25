import React, {useEffect, useState} from 'react'
import './LevelsCard.css'
import {Swiper, SwiperSlide} from "swiper/react";
import axios from "axios";
import LevelsCard from "./LevelsCard.jsx";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'




const Levels = () => {

    const [levels, setLevels] = useState([])
    const [loading, setloading]= useState(false)

    useEffect(() => {

        setloading(true)

        const levelsApi = "https://api.vocabulary.az/api/levels"
        axios.get(levelsApi)
            .then(response => {
                setLevels(response.data.data)
                setloading(false)
            })
            .catch(() => { 
                console.log('Serverdə xəta var :( ')
                setloading(false)
        })

        console.log(`used levels - ${levelsApi}`);
    }, []);

    if(loading){

        return(
            <section className='mt-4' style={{width: "1024px"}}>
                <div className='fs-4 fw-semibold'>Levels</div>
                <div className="d-flex">
                    <div className="col-12 col-md-6 col-lg-3" style={{ margin: '5px' }}>
                        <Skeleton count={1} height={124} width={206}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={{ margin: '5px' }}>
                        <Skeleton count={1} height={124} width={206}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={{ margin: '5px' }}>
                        <Skeleton count={1} height={124} width={206}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3" style={{ margin: '5px' }}>
                        <Skeleton count={1} height={124} width={206}/>
                    </div>
                </div>
            </section>
        )
    }
    

    return (
        <section className='mt-4' style={{width: "1024px"}}>
            <div className="levels-word">
                <span className='fs-4 fw-semibold pb-5'>Levels</span>
            </div>


            <Swiper
                spaceBetween={3}
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

                <div className="container">
                    <div className="col-12 col-md-6 col-lg-4 gap-2 d-flex">
                        {levels && levels.map(aData => (
                            <SwiperSlide key={aData.id + 't'}>
                                <LevelsCard key={aData.id}
                                            name={aData.name}
                                            short_name={aData.short_name}
                                            color={aData.color}
                                            words_count={aData.words_count}
                                            group_count={aData.group_count}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </div>
            </Swiper>

        </section>
    )
}

export default Levels

