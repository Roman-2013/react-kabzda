import React from "react";


type ItemType={
    title:string
    value:any
}
type AccordionType = {
    title: string,
    collaps:boolean
    onChange:()=>void
    items:ItemType[]
    onClick:(value:any)=>void
}


export function Accordion(props: AccordionType) {

    return <div>
        <AccordionTitle titleValue={props.title} collaps={props.onChange}  />
        {props.collaps&&<AccordionBody onClick={props.onClick}  items={props.items}/>}

    </div>

}

type AccordionTitleType = {
    titleValue: string
    collaps:()=>void

}

function AccordionTitle(props: AccordionTitleType) {

    return <h3 onClick={props.collaps}>{props.titleValue}</h3>
}

type AccordionBodyType = {
    items:ItemType[]
    onClick:(value:any)=>void
}
function AccordionBody(props:AccordionBodyType) {
    console.log("AccordionBody render")
    return (
        <ul>
            {props.items.map((el,index)=>{
                return <li onClick={()=>{props.onClick(el.value)}} key={index}>{el.title}</li>
            })}
        </ul>
    )
}


