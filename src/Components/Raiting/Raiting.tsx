import React from 'react';

export type Raiting = 0 | 1 | 2 | 3 | 4 | 5


export type RatingProps = {
    value: Raiting
    onClick: (value: Raiting) => void
}

export function Rating(props: RatingProps) {
    console.log('Rating render')

    return (
        <div>
            <Star onClick={props.onClick} value={1} selected={props.value >= 1}/>
            <Star onClick={props.onClick} value={2} selected={props.value >= 2}/>
            <Star onClick={props.onClick} value={3} selected={props.value >= 3}/>
            <Star onClick={props.onClick} value={4} selected={props.value >= 4}/>
            <Star onClick={props.onClick} value={5} selected={props.value >= 5}/>
        </div>
    )
}


type StarProps = {
    selected: boolean
    onClick: (value: Raiting) => void
    value: Raiting
}

function Star(props: StarProps) {
    return <span onClick={() => props.onClick(props.value)}>{props.selected ? <b>star </b> : 'star '}</span>
}