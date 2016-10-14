import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import {Select} from '../src/index'
import {isObject,finder} from '../src/utils'


const options =[
  {value:34,label:'Hello'}, 
  {value:22, label:'Hola'},
  {value:39, label:'Aloha'},
]
const defVal = 34

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
  const wrapper = shallow(<Select defaultValue={defVal} options={options}/>);
  const sta = wrapper.state()

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
  let myOnChange=(function(obj){
    setMeValue=obj.value
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
