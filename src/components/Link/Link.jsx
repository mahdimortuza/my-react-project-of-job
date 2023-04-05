import React from 'react';

const Link = (props) => {
    const {name, path, img} = props.route
    return (
        <div>
            <li className='mr-8'>
                <a href={path}>{name}</a>
                <a href={path}><img className='w-10' src={img}></img></a>
            </li>
        </div>
    );
};

export default Link;