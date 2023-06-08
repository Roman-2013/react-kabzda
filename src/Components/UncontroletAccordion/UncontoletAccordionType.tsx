import React, {useState} from 'react';

type AccordionType = {
    title: string,
}

// export function Accordion(props: AccordionType) {
//     console.log("Accordion render")
//     if (props.collaps === true) {
//         return <div>
//             <AccordionTitle titleValue={props.title}/>
//             <AccordionBody/>
//         </div>
//     }
//     if (props.collaps === false) {
//         return <div>
//             <AccordionTitle titleValue={props.title}/>
//         </div>
//     }
//     return <div>
//         (props.collaps)
//         <AccordionTitle titleValue={props.title}/>
//         <AccordionBody/>
//     </div>
// }

export function UncontoletAccordionType(props: AccordionType) {


    let [collaps, setcollaps] = useState(false)

    return <div>
        <AccordionTitle titleValue={props.title}/>
        <button onClick={() => setcollaps(!collaps)}>Toggle</button>
        {!collaps && <AccordionBody/>}
    </div>
}

type AccordionTitleType = {
    titleValue: string
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle render')
    return <h3>{props.titleValue}</h3>
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

