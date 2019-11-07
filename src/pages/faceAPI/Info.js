import React, { Component } from 'react';

const Info = props => {


    const arr = props.item.map((item,x)=>{

            const a=`<li>${item[0]}</li><li>${item[1]}</li><li>${item[2]}</li>`;
        return (a)
            

    })
        return (
            <ul>
               {arr} 
            </ul>
        )
 
}

export default Info
