import React, {ChangeEvent, ChangeEventHandler, ReactEventHandler, useEffect, useState} from 'react';


type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    const [clock, setClock] = useState<'electronic' | 'turnouts'>('turnouts')


    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    const timeFunction = (number: number) => number < 10 ? '0' + number : number

    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.currentTarget.value === 'electronic' || e.currentTarget.value === 'turnouts') {
            setClock(e.currentTarget.value)
            console.log(clock)
        }
    }
    return (
        <div>
            <select onChange={onSelect} name="" id="">
                <option value={'turnouts'}>turnouts</option>
                <option value={'electronic'}>electronic</option>
            </select>
            {clock === 'electronic'
                ? <>
                    <span>{timeFunction(date.getHours())}</span>
                    :
                    <span>{timeFunction(date.getMinutes())}</span>
                    :
                    <span>{timeFunction(date.getSeconds())}</span>
                </>
                : <Clock2/>
            }
        </div>
    )
}


//--------------------------------------------------------------------------------


const Clock2 = () => {
    function clock() {
        const deg = 6;
        const hr: HTMLElement | null = document.querySelector('#hour-hand');
        const mn: HTMLElement | null = document.querySelector('#minute-hand');
        const sc: HTMLElement | null = document.querySelector('#second-hand');

        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;


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
