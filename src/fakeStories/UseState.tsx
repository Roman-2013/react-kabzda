import React, {useMemo, useState} from 'react';

export const UseState = () => {


    const generationData=()=>{
        //difficult couting
        console.log('generationData')
        return 15
    }

    const changer=(state:number)=>state+1


    const[counter,setCounter]=useState(generationData)
    return (
        <div>
           <button onClick={()=>setCounter(changer)}>+</button>
            {counter}
        </div>
    );
};

