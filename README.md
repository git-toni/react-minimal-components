[![Build Status](https://travis-ci.org/git-toni/react-minimal-components.svg?branch=master)](https://travis-ci.org/git-toni/react-minimal-components)

# react-minimal-components

> Minimal React components rendering what you'd expect

##Component
Provided components:

### `<Select options={...} defaultValue={...} onChange={...} .../>`
#### Props
1. `options`: expected to be an array of objects, each providing `label` and `value` attributes(or corresponding `labelField`/`valueField`, see example below.). Eg. `[{label:'One',value:1,myfield:'eRwe34'},...,{label:'Two',value:2,myfield:'x2We33'}]`
2. `defaultvalue`: it can either be the `value` of one of the `options` *or* a the whole option object. Eg. `{label:'One',value:1,myfield:'eRwe34'}` *or* `1`
3. `onChange`: this is the only React Event/SyntheticEvent currently implemented in the component. Will call the received function passing it the current object selected from the `options` prop.

#### Examples

##### Basic example

```javascript
const options =[
  {value:34,label:'Hello',voice:'John'}, 
  {value:22, label:'Hola',voice:'Anna'},
  {value:39, label:'Aloha',voice:'Bender'},
]
const defVal = 34
const parentChanger= function(ob){
  console.log(obj.voice+' says: ', obj.label)
}

ReactDOM.render(<Select options={options} defaultValue={defVal} onChange={parentChanger}/>
  , document.querySelector('div#app-container')
);
//=> Will render
//<select value='34'>
//  <option value='34'>Hello</option>
//  <option value='22'>Hola</option>
//  <option value='39'>Aloha</option>
//</select>

// => 'John says: Hello'

```
##### Custom value/fields example

Using custom fields as `value` and `label`.
```javascript
const options =[
  {myVal:34,tag:'Hello',voice:'John'}, 
  {myVal:22, tag:'Hola',voice:'Anna'},
  {myVal:39, tag:'Aloha',voice:'Bender'},
]
const defVal = 34
const parentChanger= function(ob){
  console.log(obj.voice+' says: ', obj.label)
}

ReactDOM.render(<Select options={options} defaultValue={defVal} onChange={parentChanger labelField='tag' valueField='myVal'}/>
  , document.querySelector('div#app-container')
);
//=> Will render
//<select value='34'>
//  <option value='34'>Hello</option>
//  <option value='22'>Hola</option>
//  <option value='39'>Aloha</option>
//</select>


*Note*: React discourages the use of `selected` in the `<option>` tags, hence the `value` attribute at the `<select>` tag instead.


