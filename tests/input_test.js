import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import {Input} from '../src/rmc'
import {isObject,finder} from '../src/utils'


test('renders an input tag with value', t => {
  const val = 'myval'
  const wrapper = shallow(<Input value={val}/>);
  t.is(wrapper.find('input').length, 1);
  t.is(wrapper.state().value, val);
});
test('input changes state onChange', t => {
  const initVal = 'Hi'
  const newVal = 'Hello'
  const wrapper = shallow(<Input value={initVal}/>);

  const inp = wrapper.find('input')
  inp.simulate('change',{target:{value:newVal}})
  t.is(wrapper.state().value, newVal);
});
test('input calls parent"s onChange prop function"', t => {
  let setMeValue=0
  let myOnChange=(function(obj){
    setMeValue=obj.value
  }).bind(setMeValue)

  const initVal = 'Hi'
  const newVal = 'Hello'
  //const newChosenObj = finder('value')(newVal)(options)

  const wrapper = shallow(<Input value={initVal} onChange={myOnChange}/>);
  const input = wrapper.find('input')
  input.simulate('change',{target:{value:newVal}})

  t.is(setMeValue,newVal,'Parent onChange function was not called')
});
