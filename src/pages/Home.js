import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import { A } from 'hookrouter';
import Rooms from './Rooms';
import Client from '../Contentful';
import Loading from '../components/Loading';

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        Client.getEntries({
            content_type: "beachResortRoom",
            order: "sys.createdAt"
        })
        .then(entries => {
            console.log("entries.items", entries.items);
            setRooms(formatData(entries.items));
        }) 
        .then(setIsLoading(false))
        .catch(error => console.log(error));
        console.log("this is the rooms", rooms)
    }, []);


    function formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = {...item.fields, images, id};
            return room;
        });
        console.log("tempItems returned", tempItems);
        return tempItems;
    };

    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <A href="/rooms" className="btn-primary">Our Rooms</A>
            </Banner>
        </Hero>
        <Services></Services>
        {isLoading ? <Loading></Loading> : <FeaturedRooms rooms={rooms}></FeaturedRooms>}
        </>
    )
}
