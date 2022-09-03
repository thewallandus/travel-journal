import React from "react";
import Card from './Card';
import data from './data'


export default function Body() {
    
    const cardsArray = data.map(item => {
        return <Card 
            title={item.title}
            location={item.location}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            url={item.imageUrl}
            mapsUrl={item.googleMapsUrl}
        />
    })

    console.log(cardsArray)
    
    return (
       <div className="container"> 
            {cardsArray}
        </div>
    )
}

// title: "Mount Fuji",
//         location: "Japan",
//         googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//         startDate: "12 Jan, 2021",
//         endDate: "24 Jan, 2021",
//         description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//         imageUrl: "https://source.unsplash.com/WLxQvbMyfas"