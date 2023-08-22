import React, {FC, useEffect, useState} from 'react';
import {Clock2} from './Clock';

export type PropsType = {
    mode?: 'analog' | 'digital'
}

export const ClockDimych: FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return <div>
        {props.mode === 'digital' ?
            <DigitalClock date={date}/>
            : <AnalogClock date={date}/>
        }
    </div>
}


type DigitalClockType = {
    date: Date
}


export const DigitalClock = (props: DigitalClockType) => {
    let {date} = props
    const get2string = (number: number) => number < 10 ? '0' + number : number

    return (
        <>
            <span>{get2string(date.getHours())}</span>
            :
            <span>{get2string(date.getMinutes())}</span>
            :
            <span>{get2string(date.getSeconds())}</span></>
    )
}


export const AnalogClock = (props: DigitalClockType) => {
    let {date} = props

    function clock() {
        const deg = 6;
        const hr: HTMLElement | null = document.querySelector('#hour-hand');
        const mn: HTMLElement | null = document.querySelector('#minute-hand');
        const sc: HTMLElement | null = document.querySelector('#second-hand');

        let hh = date.getHours() * 30;
        let mm = date.getMinutes() * deg;
        let ss = date.getSeconds() * deg;


        if (hr !== null && mn !== null && sc !== null) {
            hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
        }
    }

    setInterval(clock, 1000);

    return (
        <>
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    border: '2px solid black',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <div id="hour-hand"
                     style={{
                         position: 'absolute',
                         width: '4px',
                         height: '40px',
                         backgroundColor: 'black',
                         transformOrigin: 'bottom center'
                     }}
                >
                </div>
                <div id="minute-hand"
                     style={{
                         position: 'absolute',
                         width: '2px', height: '60px',
                         backgroundColor: 'black',
                         transformOrigin: 'bottom'
                     }}
                >
                </div>
                <div id="second-hand"
                     style={{
                         position: 'absolute',
                         width: '2px',
                         height: '60px',
                         backgroundColor: 'black',
                         transformOrigin: 'bottom'
                     }}
                >
                </div>
            </div>
        </>
    );
};