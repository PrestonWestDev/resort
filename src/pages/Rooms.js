import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import RoomsContainer from "../components/RoomsContainer";
import { A } from 'hookrouter';


const Rooms = () => {

    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Our Rooms">
            <A href="/" className="btn-primary">Return Home</A>
            </Banner>
        </Hero>
        <RoomsContainer />
        </>
    );
}

export default Rooms;
