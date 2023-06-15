import React, {useState} from 'react';
import './App.css';
import {Accordion} from './Components/Accordion/Accordion';
import {Raiting, Rating, RatingProps} from './Components/Raiting/Raiting';

import {UncontoletAccordionType} from './Components/UncontroletAccordion/UncontoletAccordionType';
import {UncontroletRating} from './Components/UncontroletRaiting/UncontroletRating';
import {UncontroletOnOff} from './Components/UncontroletOnOff/UncontroletOnOff';
import {OnOff} from './Components/OnOff/OnOff';


const App = () => {
    let [raiting, setraiting] = useState<Raiting>(0)
    let [acordion, setacordion] = useState<boolean>(false)
    let [onOf, setonOf] = useState<boolean>(true)
    return (
        <div className={'App'}>
            <OnOff setonOf={() => setonOf(!onOf)} onOf={onOf}/>{onOf.toString()}
            <UncontroletOnOff/>
            <UncontoletAccordionType title={'Menu1'}/>
            <Accordion title={'Menu2'} collaps={acordion} onChange={() => setacordion(!acordion)}/>
            <UncontroletRating/>
            Articl 2
            <Rating value={raiting} onClick={setraiting}/>
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}
export default App;
