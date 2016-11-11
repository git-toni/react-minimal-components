import React from 'react';
import ReactDOM from 'react-dom';
//import {Input,Select} from '../src/rmc'
import {Input,Select} from '../dist/rmc'


const alertMsg = (e)=> console.log('changes ', e.value)
const RMCInput = (
  <div id='rmc-input'>
    <h3>Input type</h3>
    <div className='examples'>
      <h4>Triggering function onChange:</h4>
      <Input value='Change me' onChange={alertMsg.bind(this)}/>
    </div>
  </div>
)



const myOpt = [
  {label:'Apple',value:'apple'},
  {label:'Pear',value:'pear'},
  {label:'Grape',value:'grape'},
  {label:'Banana',value:'banana'},
  {label:'Orange',value:'orange'}
]
const RMCSelect = (
  <div id='rmc-input'>
    <h3>Dropdown type</h3>
    <div className='examples'>
      <h4>Triggering function onChange:</h4>
      <Select defaultValue={'grape'} options={myOpt} onChange={alertMsg.bind(this)}/>
    </div>
  </div>
)

ReactDOM.render(
  <div>
  {(RMCInput)}
  {(RMCSelect)}
  </div>
  , document.querySelector('div#app-container')
);

