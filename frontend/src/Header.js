import React from 'react';

/*export default function Headers(props){
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    ) 
}*/

export default function Headers({children}){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    ) 
}