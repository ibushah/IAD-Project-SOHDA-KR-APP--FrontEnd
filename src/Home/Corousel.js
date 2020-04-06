import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, title} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} style={{height:'140px'}} />
            <div className="details">
                {/* <span className="index">{index+1}</span> */}
                <p className="location">
                    {title}
                </p>
                
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;