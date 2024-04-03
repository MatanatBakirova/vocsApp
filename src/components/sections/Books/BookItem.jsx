// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Books.css'
import {Link} from "react-router-dom";


const BookItem = ({id, title, author, image, price, discount, discount_price, free}) => {
    return (

        <div className="card">
            <Link to={`/book/${id}`}>
                <div className='books-image '>
                    <img src={image} className="card-img-top" alt=""/>
                </div>
            </Link>
            <div className="card-body">
                <Link to={`/book/${id}`}>
                    <h5 className="card-title ">{title}</h5>
                </Link>
                <span className=' card-text d-flex gap-2'>
                    {
                        (() => {
                            if (discount) {
                                return <>
                                    <p className="card-text fw-bold fs-5 text-primary">{discount_price} AZN</p>
                                    <p className="card-text text-decoration-line-through fs-6 p-1 text-secondary">{price} AZN</p>
                                </>;

                            } else if (!discount && !free) {
                                return <p className="card-text fw-bold fs-5 text-primary">{price} AZN</p>;
                            } else {
                                return <p className="card-text fw-bold fs-5 text-primary">FREE</p>;
                            }
                        })()
                    }

                            </span>
                <a href="#" className="owner fw-light">{author}</a>
            </div>
        </div>
    )
}

export default BookItem