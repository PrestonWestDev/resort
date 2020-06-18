import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state={
        services: [
           {
               icon: <FaCocktail></FaCocktail>,
               title: "Artisanal Cocktails",
               info: `Ea aliqua ullamco eiusmod nostrud ad non. 
               Dolore elit tempor reprehenderit deserunt ea nulla commodo 
               minim ipsum est cillum Lorem veniam adipisicing.`
           },
           {
                icon: <FaHiking></FaHiking>,
                title: "Endless Hiking",
                info: `Ea aliqua ullamco eiusmod nostrud ad non. 
                Dolore elit tempor reprehenderit deserunt ea nulla commodo 
                minim ipsum est cillum Lorem veniam adipisicing.`
            },
            {
                icon: <FaShuttleVan></FaShuttleVan>,
                title: "Free Shuttle",
                info: `Ea aliqua ullamco eiusmod nostrud ad non. 
                Dolore elit tempor reprehenderit deserunt ea nulla commodo 
                minim ipsum est cillum Lorem veniam adipisicing.`
            },
            {
                icon: <FaBeer></FaBeer>,
                title: "Craft Beer",
                info: `Ea aliqua ullamco eiusmod nostrud ad non. 
                Dolore elit tempor reprehenderit deserunt ea nulla commodo 
                minim ipsum est cillum Lorem veniam adipisicing.`
            } 
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => { 
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6> {item.title}</h6>
                            <p> {item.info} </p>
                        </article>
                        )
                   })}
                </div>
            </section>
        )
    }
}
