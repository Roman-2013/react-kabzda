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


    let [collaps, setcollaps] = useState(true)

    const AccordionTitleRender = (name: boolean) => {
        setcollaps(!collaps)
    }
    return <div>
        <AccordionTitle titleValue={props.title} AccordionTitleRender={AccordionTitleRender}/>
        {!collaps && <AccordionBody/>}
    </div>
}


type AccordionTitleType = {
    titleValue: string
    AccordionTitleRender: (name: boolean) => void
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={() => props.AccordionTitleRender(false)}> {props.titleValue}</h3>

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


