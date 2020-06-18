import React from 'react'

export default function Hero({ children, hero }) {
    return (
        <header className={hero}>
           {children} 
        </header>
    );
}

// When no backdrop is specified for the page, show the default one 
Hero.defaultProps={
    hero: "defaultHero"
};
