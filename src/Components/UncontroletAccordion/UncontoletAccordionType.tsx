import React, {useReducer, useState} from 'react';
import {reducer} from './reduser';

type AccordionType = {
    title: string,
}

// type ActionType = {
//     type: string
// }
//
// const reduser = (state: boolean, action: ActionType) => {
//     switch (action.type){
//         case 'TOOGLE-COLAPSED':
//             return !state
//         default:
//             return state
//     }


export function UncontoletAccordionType(props: AccordionType) {


    //let [collaps, setcollaps] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})


    return <div>
        {/*<AccordionTitle titleValue={props.title} setcollaps={setcollaps} collaps={collaps}/>*/}
        <AccordionTitle titleValue={props.title} onClick={() => {
            dispatch({type: 'TOOGLE-COLAPSED'})
        }}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitleType = {
    titleValue: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={() =>props.onClick()}> {props.titleValue}</h3>

}


function AccordionBody() {
    console.log('AccordionBody render')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


