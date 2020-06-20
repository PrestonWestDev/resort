import React, {useState, useEffect} from 'react'
import Room from './Room';
import Title from './Title';

const FeaturedRooms = ({rooms}) => {

    const featuredRooms = rooms.filter((room, index) => 
    (room.featured == true && rooms.indexOf(room)) === index)
    .map(featuredRoom => {
        return <Room key={featuredRoom.id} room={featuredRoom}></Room> 
    });

    return (
        <section className="featured-rooms">
            <Title title="Featured Rooms"></Title>
            <div className="featured-rooms-center">
                {featuredRooms}
            </div>
        </section>
    )
}

export default FeaturedRooms;
