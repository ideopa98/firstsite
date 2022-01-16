import React from 'react'

import { NavLink } from 'react-router-dom'

const Card = (props) => {
    return (
        <>

            <div className='col-md-4 col-10 mx-auto'>
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='mt-3'>
                                    <NavLink to="/contact" className="btn-get-started">Apply Now</NavLink>
                                </div>
                    </div>
                </div>
            </div>




        </>
    )
}
export default Card;