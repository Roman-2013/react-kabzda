import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {ClockDimych} from './ClockDimych';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
//здесть мы описываем основание компоненты на котором будет строиться каждая история
//так же указываем типизацию для всей истории вот так  meta:Meta<typeof Task>
const meta:Meta<typeof ClockDimych> = {
    title:'ClockDimych',
    component: ClockDimych,
    tags: ['autodocs'],

//все остальные аргументы прописываем через args, они будут общие для все историй
    args:{
        //changeTaskStatus: action('changeTaskStatus'),
        // changeTaskTitle: action('changeTaskTitle'),
        //removeTask: action('removeTask'),
    },
    //Для колбеков прописываем через argTypes так как тогда не надо руками прописывать импорт
    // так же общие для всех историй , но можем и индивидуально передать в каждую как на 54 стр
    //description это описание в доке
    //action показывает сообщение при срабатывании, логика тянеться из компоненты
}

export default meta;
type Story = StoryObj<typeof ClockDimych>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
//Есть два способо создания историй, вот так или через render

export const ClockDigitalDimychStory:Story={
   args:{
       mode:'analog'
   }
}


export const ClockAnalogDimychStory:Story={
    args:{
        mode:'digital'
    }
}









