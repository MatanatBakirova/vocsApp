import React from 'react'
import './Books.css'

const BookItem = ({title, author, image, price, discount, discount_price, free}) => {
    return (
        <div className="card">
            <div className='books-image'>
                <img src={image} className="card-img-top" alt=""/>
            </div>
            <div className="card-body" style={{marginTop: "250px;"}}>
                <h5 className="card-title ">{title}</h5>
                <span className='d-flex gap-2'>
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
        </div>)
}

export default BookItem