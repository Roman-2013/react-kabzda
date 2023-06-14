import {useState} from 'react';

type PropsType = {

    setonOf: () => void
    onOf: boolean
}


export const UncontroletOnOff = (props: PropsType) => {
let{onOf,setonOf}=props

    const onStyle = {
        width: '30px',
        height: '20px',
        border: 'solid 1px black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: onOf ? 'green' : 'white'
    }
    const ofStyle = {
        width: '30px',
        height: '20px',
        border: 'solid 1px black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: onOf ? 'white' : 'red'
    }
    const indicatirStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: onOf ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={() => setonOf()}>On</div>
            <div style={ofStyle} onClick={() => setonOf()}>Of</div>
            <div style={indicatirStyle}></div>
        </div>
    )
}