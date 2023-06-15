import {useState} from 'react';

type PropsType = {
    setonOf?: (n: boolean) => void
}


export const UncontroletOnOff = (props: PropsType) => {

    let [on, seton] = useState(false)

    console.log('rendet OnOff');
    console.log('on ' + on);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: 'solid 1px black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const ofStyle = {
        width: '30px',
        height: '20px',
        border: 'solid 1px black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatirStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClickHandler = () => {
        seton(on = true)
    }
    const onClickHandler2 = () => {
        seton(on = false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>On</div>
            <div style={ofStyle} onClick={onClickHandler2}>Of</div>
            <div style={indicatirStyle}></div>
        </div>
    )
}