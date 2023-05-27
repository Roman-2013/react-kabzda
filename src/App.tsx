import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Raiting/Raiting";


const App = () => {
    //debugger
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"Users frend"}/>
            <div>Articl1</div>
            <Rating value={3}/>
            <Accordion title={"Menu2"} collaps={false}/>
            <Accordion title={"Menu2"} collaps={true}/>
            Articl2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;
