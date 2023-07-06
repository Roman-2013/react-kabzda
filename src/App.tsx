import React, {useRef, useState} from 'react';
import './App.css';
import {Accordion} from './Components/Accordion/Accordion';
import {Raiting, Rating, RatingProps} from './Components/Raiting/Raiting';

import {UncontoletAccordionType} from './Components/UncontroletAccordion/UncontoletAccordionType';
import {UncontroletRating} from './Components/UncontroletRaiting/UncontroletRating';
import {UncontroletOnOff} from './Components/UncontroletOnOff/UncontroletOnOff';
import {OnOff} from './Components/OnOff/OnOff';


const App = () => {
    // let [raiting, setraiting] = useState<Raiting>(0)
    // let [acordion, setacordion] = useState<boolean>(false)
    // let [onOf, setonOf] = useState<boolean>(true)

    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    let count = document.getElementById('idd') as HTMLInputElement
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue1(el.value)
    }


    const [parentValue, setparentValue] = useState('')
    const [parentValue1, setparentValue1] = useState(false)
    const [parentValue3, setparentValue3] = useState<string|undefined>('1')

    return (<div className={'App'}>

            {/*<div>*/}
            {/*    <input ref={inputRef}/><button onClick={save}>save</button> -actual value: {value1}*/}
            {/*</div>*/}
            {/*/!*-----------------------------------------------------------------------*!/*/}
            {/*<input onChange={(e) => {*/}
            {/*    setValue(e.currentTarget.value)*/}
            {/*}}/>-{value}*/}
            {/*/!*-----------------------------------------------------------------------*!/*/}
            {/*<div>*/}
            {/*    <input value={'it-incubator'}/>*/}
            {/*</div>*/}
            {/*/!*-----------------------------------------------------------------------*!/*/}


            <input value={parentValue} onChange={(e) => setparentValue(e.currentTarget.value)}/>

            <div>
                <input type={'checkbox'} checked={parentValue1}
                       onChange={(e) => setparentValue1(e.currentTarget.checked)}/>
            </div>
            <div>
                <select value={parentValue3} onChange={(e)=>setparentValue3(e.currentTarget.value)}>
                    <option value="1">Minsk</option>
                    <option value="2">Kiev</option>
                    <option value="3">Moscow</option>
                </select>
            </div>

            {/*<OnOff setonOf={() => setonOf(!onOf)} onOf={onOf}/>{onOf.toString()}*/
            }
            {/*<UncontroletOnOff/>*/
            }
            {/*<UncontoletAccordionType title={'Menu1'}/>*/
            }
            {/*<Accordion title={'Menu2'} collaps={acordion} onChange={() => setacordion(!acordion)}/>*/
            }
            {/*<UncontroletRating/>*/
            }
            {/*Articl 2*/
            }
            {/*<Rating value={raiting} onClick={setraiting}/>*/
            }

        </div>
    )
        ;
}


type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}
export default App;
