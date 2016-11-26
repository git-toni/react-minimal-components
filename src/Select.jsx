import React from 'react'
import {isObject,finder} from './utils'
//import omit from 'lodash/omit'
import {omit} from 'lodash'

function getValueFromOption(option){
  return isObject(option) ? option.value : option
}

class Select extends React.Component{
  constructor(props){
    super(props)
    this.state={
      options: props.options,
      chosenOption: props.defaultValue,
      labelField: props.labelField || 'label',
      valueField: props.valueField || 'value'
    }
    this._onSelect=this._onSelect.bind(this)
  }
  _onSelect(e){
    let val = e.target.value
    let opt = finder('value')(val)(this.state.options)
    this.setState({chosenOption: opt});
    if(this.props.onChange) this.props.onChange.call(null,opt)
  }
  render(){
    let {options,chosenOption, labelField, valueField} = this.state
    let defaultOptionValue = getValueFromOption(chosenOption)
    let actualProps = omit(this.props, ['onChange', 'options', 'defaultValue','labelField','valueField'])
    return(
      <select {...actualProps} onChange={this._onSelect} value={defaultOptionValue}>
      {
        options.map(c => <option key={c[valueField]} value={c[valueField]}>{c[labelField]}</option>) 
      }
      </select>
      );
  }
}
Select.propTypes={
  options: React.PropTypes.array.isRequired,
  defaultValue: React.PropTypes.any // can either be the 'value' field or the whole option object
}
Select.defaultProps={
  options: [],
  defaultValue:''
}

export default Select
