import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Raiting/Raiting";
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontoletAccordionType} from './Components/UncontroletAccordion/UncontoletAccordionType';
import {UncontroletRating} from './Components/UncontroletRaiting/UncontroletRating';


const App = () => {
    //debugger
    return (
        <div>
           <OnOff on={false}/>
           {/*<OnOff on={true}/>*/}
           {/*<OnOff on={false}/>*/}



            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"Users friend"}/>*/}
            {/*<div>Articl1</div>*/}
            {/*<Rating value={3}/>*/}
            <UncontoletAccordionType title={"Menu1"}/>
            {/*<Accordion title={"Menu1"} collaps={true}/>*/}
            <Accordion title={"Menu2"} collaps={false}/>
            <UncontroletRating/>
            Articl 2

            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
