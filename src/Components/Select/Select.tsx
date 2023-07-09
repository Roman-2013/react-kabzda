import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}


export const Selects = (props: SelectPropsType) => {
    const [click, setclick] = useState(false)
    const onClickHandler = (i: string) => {
        props.onChange(i)
        setclick(false)
    }


    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(props.value)

    useEffect(() => {
        setHover(props.value)
    }, [props.value])
    const selectedItems = props.items.find(i => i.value === props.value)
    const hoverItem = props.items.find(i => i.value === hover)
    const toogleItems = () => setActive(!active)
    const onItemClick = (value: string) => {
        props.onChange(value);
        toogleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hover) {
                    const pretendentElement=e.key==='ArrowDown'?props.items[i + 1]:props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItems){
                 props.onChange(props.items[0].value)
            }

        }
        if(e.key==='Enter'||e.key==='Escape'){
            setActive(false)
        }
    }
    return (
        <div onKeyUp={onKeyUp}
             className={s.select}
             tabIndex={0}
        >

            <span className={s.main} onClick={toogleItems}>{selectedItems && selectedItems.title}</span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map(el => <div
                        onMouseEnter={() => setHover(el.value)}
                        className={s.item + ' ' + (hoverItem === el ? s.selected : '')}
                        onClick={() => onItemClick(el.value)}
                        key={el.value}>{el.title}</div>)}
                </div>
            }
            {/*<div*/}
            {/*    onClick={() => setclick(!click)}>{props.items.map(el => el.value === props.value ? el.title : '')}</div>*/}

            {/*{click ? props.items.map((i, index) => <div onClick={() => onClickHandler(i.value)} key={index}>{i.title}</div>) : ''}*/}
        </div>
    )
}