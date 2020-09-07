import React from 'react';

function Contact({image, name, phoneNumber}){
    return (
    <li>
        <img className="contact-image" 
        src={image}
        alt={name}
        width="60px" 
        height="60px" />
        <div className="contact-info">
            <div className="contact-name">{name}</div>
            <div className="contact-number">{phoneNumber}</div>
        </div>
    </li>
    )
}

export default Contact;