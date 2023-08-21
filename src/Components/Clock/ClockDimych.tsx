import {useEffect, useState} from 'react';

export type PropsType = {}

export const ClockDimych: React.FC<PropsType> = (props: any) => {
    const [date,setDate]=useState(new Date())

    useEffect(()=>{
       const intervalID= setInterval(()=>{
           console.log('TICK')
            setDate(new Date())
        },1000)
        return ()=>{
            clearInterval(intervalID)
        }
    },[])

    const get2string=(number:number)=>number<10?'0'+number:number

    return <div>
        <span>{get2string(date.getHours())}</span>
        :
        <span>{get2string(date.getMinutes())}</span>
        :
        <span>{get2string(date.getSeconds())}</span>
    </div>
}