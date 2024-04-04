import React, {useEffect, useState} from 'react'
import Header from "../../Header.jsx";
import {useParams} from "react-router-dom";
import axios from "axios";
import BookUnitTop from "./BookUnitTop.jsx";
import BookUnitCard from "./BookUnitCard.jsx";


const BookUnits = () => {

    const [bookUnitList, setBookUnitList] = useState([])

    const {id} = useParams(); 

    useEffect(() => {
        const cachedBookUnits = localStorage.getItem('bookUnits'+id);

        if(cachedBookUnits ) {
            setBookUnitList(JSON.parse(cachedBookUnits));
        }
        else{
            
            const USER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLnZvY2FidWxhcnkuYXovYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTIyMTI4NDYsImV4cCI6MTczNTU0MDg0NiwibmJmIjoxNzEyMjEyODQ2LCJqdGkiOiJ6VHBsYnphaTZ0cGVuN3VtIiwic3ViIjoiOTU3OCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.FPh38cqsmX-jd15Hg4ncB7DPuEImyfk7hz1On1agYXA';

            const api = 'https://api.vocabulary.az/api/books/'+id+'/units'
            axios.get(api, {
                headers: {
                    'Authorization': `Bearer ${USER_TOKEN}`
                }
            })
                .then(response => {
                    setBookUnitList(response.data.data);
                    localStorage.setItem('bookUnits'+id, JSON.stringify(response.data.data));
                })
                .catch((err) => {
                    console.log('Serverdə xəta: ' + err);
                })
        }

    }, [id]);


    return (
        <div>
            <Header/>
            <BookUnitTop/>
            {/* <div className="col-12 "> */}
            {
                bookUnitList.map((bookUnit) => {
                    return(
                        <BookUnitCard key={bookUnit.id}
                                      id={bookUnit.id}
                                     bookUnit={bookUnit} />
                    )  
                })}
            </div>
        // </div>
    );
}

export default BookUnits