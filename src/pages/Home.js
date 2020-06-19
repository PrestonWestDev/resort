import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import { A } from 'hookrouter';

export default function Home() {

    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <A href="/rooms" className="btn-primary">Our Rooms</A>
            </Banner>
        </Hero>
        <Services></Services>
        <FeaturedRooms></FeaturedRooms>
        </>
    )
}
