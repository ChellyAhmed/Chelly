import React from 'react';

export function Project({ link, image, image_webp, title }) {
    return (
        <div className='project'>
            <a href={link} target="_blank" rel="noreferrer">
                <picture>
                    <source type='image/webp' srcSet={image_webp} alt={title} />
                    <img src={image} alt={title} />
                </picture>
            </a>
        </div>
    );
}

export function TextProject({ link, title , description }) {
    return (
        <div className='text-project'>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noreferrer">View on Github</a>
        </div>
    );
}
