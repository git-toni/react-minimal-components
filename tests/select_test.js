import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import {Select} from '../src/rmc'
import {isObject,finder} from '../src/utils'


const options =[
  {value:34,label:'Hello'}, 
  {value:22, label:'Hola'},
  {value:39, label:'Aloha'},
]
const defVal = 39

test('renders a select tag with no options', t => {
  const wrapper = shallow(<Select />);
  t.is(wrapper.find('select').length, 1);
  t.is(wrapper.find('option').length, 0);
});
test('renders a select tag with passed options', t => {
  const wrapper = shallow(<Select options={options}/>);
  t.is(wrapper.find('select').length, 1);
  t.is(wrapper.find('option').length, 3);
  t.is(wrapper.find('option[value=34]').length, 1);
});
test('internal state is correctly set', t => {
  const myId='myyyyy'
  const wrapper = shallow(<Select id={myId} defaultValue={defVal} options={options}/>);
  const sta = wrapper.state()

  t.is(wrapper.find('select').props().value,defVal)
  t.is(wrapper.find('select').props().id,myId)
  t.deepEqual(sta.options,options,'`options` prop not well set');
  t.deepEqual(sta.chosenOption,defVal,'`chosenOption` prop not well set');
});
test('select changes state onChange', t => {
  const newVal = 22
  const newChosenObj = finder('value')(newVal)(options)

  const wrapper = shallow(<Select defaultValue={defVal} options={options}/>);
  const sel = wrapper.find('select')
  sel.simulate('change',{target:{value:newVal}})

  t.deepEqual(wrapper.state('chosenOption'),newChosenObj,'`chosenOption` didnt change properly');
});
test('select calls parent"s onChange prop function"', t => {
  let setMeValue=0
  let myOnChange=(function(e){
    setMeValue=e.target.value
  }).bind(setMeValue)

  const newVal = 22
  const newChosenObj = finder('value')(newVal)(options)

  const wrapper = shallow(<Select defaultValue={defVal} options={options}onChange={myOnChange}/>);
  const sel = wrapper.find('select')
  sel.simulate('change',{target:{value:newVal}})

  t.deepEqual(wrapper.state('chosenOption'),newChosenObj,'`chosenOption` didnt change properly');
  t.is(setMeValue,newVal,'Parent onChange function was not called')
});

test.skip('throws error when options is not an array', t => {
  // Need to add static type checking to component
  // flow vs tcomb vs ${hype_of_the_moment}
  const options ={}
  const wrapper = shallow(<Select options={options}/>);
  t.is(wrapper.find('select').length, 1);
  t.is(wrapper.find('option').length, 0);
});
test('custom label and value fields', t => {
  const modOptions =[
    {myVal:34,myLabel:'Hello'}, 
    {myVal:22, myLabel:'Hola'},
    {myVal:39, myLabel:'Aloha'},
  ]
  const wrapper = shallow(<Select defaultValue={defVal} options={options} valueField='myVal' labelField='myLabel'/>);
  const sta = wrapper.state()

  t.is(wrapper.find('select').props().value,defVal)
  t.deepEqual(sta.options,options,'`options` prop not well set');
  t.deepEqual(sta.chosenOption,defVal,'`chosenOption` prop not well set');
});
test('custom label/value calling onChange', t => {
  let setMeValue=0
  let myOnChange=(function(e){
    setMeValue=e.target.value
  }).bind(setMeValue)
  const modOptions =[
    {myVal:34,myLabel:'Hello'}, 
    {myVal:22, myLabel:'Hola'},
    {myVal:39, myLabel:'Aloha'},
  ]
  const newVal = 22
  const newChosenObj = finder('myVal')(newVal)(modOptions)
  const wrapper = shallow(<Select defaultValue={defVal} options={modOptions} valueField='myVal' labelField='myLabel' onChange={myOnChange}/>);
  const sta = wrapper.state()

  const sel = wrapper.find('select')
  sel.simulate('change',{target:{value:newVal}})

  t.deepEqual(wrapper.state('chosenOption'),newChosenObj,'`chosenOption` didnt change properly');
  t.is(setMeValue,newVal,'Parent onChange function was not called')
});
