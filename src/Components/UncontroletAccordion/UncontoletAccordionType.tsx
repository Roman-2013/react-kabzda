import React, {useState} from 'react';

type AccordionType = {
    title: string,
}

export function UncontoletAccordionType(props: AccordionType) {


    let [collaps, setcollaps] = useState(true)


    return <div>
        <AccordionTitle titleValue={props.title} setcollaps={setcollaps} collaps={collaps}/>
        {!collaps && <AccordionBody/>}
    </div>
}


type AccordionTitleType = {
    titleValue: string
    setcollaps: ( collaps:boolean) => void
    collaps:boolean
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={() => props.setcollaps(!props.collaps)}> {props.titleValue}</h3>

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


