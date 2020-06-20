import React, {useState, useEffect} from 'react'
import Room from './Room';
import Title from './Title';

const FeaturedRooms = ({rooms}) => {
    rooms = rooms.map(room => {
        return <Room key={room.id} room={room}></Room>
    });

    return (
        <section className="featured-rooms">
            <Title title="Featured Rooms"></Title>
            <div className="featured-rooms-center">
                {rooms}
            </div>
        </section>
    )
}

export default FeaturedRooms;
