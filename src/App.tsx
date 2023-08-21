import React, {memo, useMemo, useRef, useState} from 'react';
import './App.css';
import {UseMemoUseCallbackLesson} from './fakeStories/useMemo+UseCallbackLesson';
import {UseState} from './fakeStories/UseState';
import {UseEffect, UseEffectSetTimeout} from './fakeStories/UseEffect';
import {Clock} from './Components/Clock/Clock';
import {ClockDimych} from './Components/Clock/ClockDimych';




export const App = () => {


    return (
        <div className={'App'}>
          <ClockDimych/>
        </div>
    )
        ;
}


