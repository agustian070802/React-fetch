import React from 'react'
import "./card.css"

export default function Card({
    image,
    username,
    name,
    phone,
    website,
    email
}) {

    return(
        <div className="cardcard">
            <div className="card_left">
                <img src={image} alt="Mypicture" className="avatar" />
            </div>
            
            <div className="card_right">
                <h3 className="username">{username}</h3>
                <p className="biodata">
                    name    : {name} <br />
                    email   : {email} <br />
                    phone   : {phone} <br />
                    website : {website} <br />
                    email   : {email} <br />
                </p>
            </div>
        </div>
    )
}