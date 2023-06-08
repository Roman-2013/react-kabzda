import React, {useState} from 'react';

// type RatingProps={
//     value:0|1|2|3|4|5
// }

export function UncontroletRating() {


    let [value, setValue] = useState(0)

    const StarrenderBold = (bold: number) => {
        console.log(value)
        setValue(bold)
    }

    return (
        <div>
            <Star number={1} selected={value >= 1} StarrenderBold={StarrenderBold}/>
            <Star number={2} selected={value >= 2} StarrenderBold={StarrenderBold}/>
            <Star number={3} selected={value >= 3} StarrenderBold={StarrenderBold}/>
            <Star number={4} selected={value >= 4} StarrenderBold={StarrenderBold}/>
            <Star number={5} selected={value >= 5} StarrenderBold={StarrenderBold}/>


            {/*<Star selected={value} StarrenderBold={StarrenderBold}/>*/}
            {/*<Star selected={value} StarrenderBold={StarrenderBold}/>*/}
            {/*<Star selected={value} StarrenderBold={StarrenderBold}/>*/}
            {/*<Star selected={value} StarrenderBold={StarrenderBold}/>*/}
            {/*<Star selected={value} StarrenderBold={StarrenderBold}/>*/}
        </div>
    )
}




type StarProps = {
    number: number
    selected: boolean
    StarrenderBold: (bold: number) => void
}

function Star(props: StarProps) {
    return props.selected === true
        ? <span onClick={() => {
            props.StarrenderBold(props.number)
        }}><b>star </b></span>
        : <span onClick={() => {
            props.StarrenderBold(props.number)
        }}>star </span>
}


// props.selected === true
//     ? <span ><b>star </b></span>
//     : <span onClick={()=>props.StarrenderBold(false)}>star </span>
// }