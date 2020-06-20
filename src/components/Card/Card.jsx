import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

Card.propTypes = {
    cImg : PropTypes.string,
    cTitle : PropTypes.string,
    cDetail : PropTypes.string
}

Card.defaultProps = {
    cImg : "https://picsum.photos/200/200",
    cTitle : "Lorem ipsum dolor sit",
    cDetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem pariatur ipsam"
}

function Card(props){
    return (
        <div className="my-card">
            <div className="my-card__header">
                <img src={props.cImg} alt=""/>
            </div>
            <div className="my-card__body">
                <div className="my-card__body__title">
                    <h5>{props.cTitle}</h5>
                </div>
                <div className="my-card__body__detail">
                    <p>
                        {props.cDetail}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card