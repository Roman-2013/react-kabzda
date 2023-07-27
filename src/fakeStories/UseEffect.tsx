import React, {useEffect, useMemo, useState} from 'react';

export const UseEffect = () => {

    const[counter,setCounter]=useState(1)
    const[fake,setFake]=useState(1)

    console.log('UseEffect Komponnent')

    useEffect(()=>{
        console.log('useEffect every render')
        document.title=counter.toString()
    })

    useEffect(()=>{
        console.log('useEffect only one render')
        document.title=counter.toString()
    },[])

    useEffect(()=>{
        console.log('useEffect firs render and every counter change ')
        document.title=counter.toString()
    },[counter])

    return (
        <div>
            Hello {counter}
            <button onClick={()=>setFake(fake+1)}>+</button>
            <button onClick={()=>setCounter(counter+1)}>+</button>

        </div>
    );
};

