import React from 'react'
import All from "./All";
import Dataa from './Dataa';
import dataa from './Dataa';
import Alll from './Alll';

export default function Focus() {
    const newdata="today"

if(newdata === "today"){
     return(Dataa.map(All))
  }
else if(newdata === "tomorrow"){
  return(dataa.map(Alll))
  }
else{
    return(Error)
}

}
