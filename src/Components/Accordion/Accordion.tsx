import React from "react";

type AccordionType = {
    title: string,
    collaps:boolean
    onChange:()=>void
}


export function Accordion(props: AccordionType) {

    return <div>
        <AccordionTitle titleValue={props.title} collaps={props.onChange}  />
        {props.collaps&&<AccordionBody/>}

    </div>

}

type AccordionTitleType = {
    titleValue: string
    collaps:()=>void

}

function AccordionTitle(props: AccordionTitleType) {

    return <h3 onClick={props.collaps}>{props.titleValue}</h3>
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


