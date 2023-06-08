import React, {useState} from 'react';

// type RatingProps={
//     value:0|1|2|3|4|5
// }

export function UncontroletRating() {

    let [value,setValue]=useState(0)
    return (
        <div>
            <Star selected={value>=1}/><button onClick={()=>setValue(1)}>1</button>
            <Star selected={value>=2}/><button onClick={()=>setValue(2)}>2</button>
            <Star selected={value>=3}/><button onClick={()=>setValue(3)}>3</button>
            <Star selected={value>=4}/><button onClick={()=>setValue(4)}>4</button>
            <Star selected={value>=5}/><button onClick={()=>setValue(5)}>5</button>
        </div>
    )
}


//       if (props.value === 1) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     } else if (props.value === 2) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     } else if (props.value === 3) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     } else if (props.value === 4) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//         </div>
//     } else if (props.value === 5) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//         </div>
//     }
//
//         return <div>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
// }

type StarProps={
    selected:boolean
}

function Star(props: StarProps) {
    console.log("Star render")
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }


}