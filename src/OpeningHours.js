import React,{useState} from 'react';
import hours from './hours';

export const OpeningHours = ()=>{
    const[schedule] =useState(hours);

    console.log(schedule);

    return <>Opening hours here</>

};