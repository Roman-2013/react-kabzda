import React from "react";

type AccordionType = {
    title: string,
    collaps:(acordion:boolean)=>void
    acordion:boolean
}


export function Accordion(props: AccordionType) {

    return <div>
        <AccordionTitle titleValue={props.title} collaps={props.collaps} acordion={props.acordion} />
        {props.acordion&&<AccordionBody/>}

    </div>

}

type AccordionTitleType = {
    titleValue: string
    collaps:(acordion:boolean)=>void
    acordion:boolean
}

function AccordionTitle(props: AccordionTitleType) {

    return <h3 onClick={()=>props.collaps(!props.acordion)}>{props.titleValue}</h3>
}

function AccordionBody() {
    console.log("AccordionBody render")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


