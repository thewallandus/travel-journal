import React from 'react';
import { GoLocation } from "react-icons/go";
import Body from './Body';
import './Card.css'


export default function Card (props) {
    
    return (
        <div className="card">
            <div className="card--component">
                <img src={`${props.url}`} alt="" width="300px"/>
                <div className="card--right">
                    <div className="card--location-sec">
                        <GoLocation color="#F55A5A" fontSize="1.1rem"/>
                        <span className="card--location-country">{props.location}</span>
                        <a href="#" className='card--google-Maps'>View on Google Maps</a>
                    </div>
                    <h2 className="card--title">{props.title}</h2>
                    <div className="card--date">
                        <span>{props.startDate} - </span>
                        <span>{props.endDate}</span>
                    </div>
                    <p className="card--desc">{props.description}</p>
                </div>
            </div>
        </div>
    )
}