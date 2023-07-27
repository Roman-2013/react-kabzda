import React, {memo, useMemo, useRef, useState} from 'react';
import './App.css';
import {UseMemoUseCallbackLesson} from './fakeStories/useMemo+UseCallbackLesson';
import {UseState} from './fakeStories/UseState';




export const App = () => {


    return (
        <div className={'App'}>
          <UseState/>
        </div>
    )
        ;
}


