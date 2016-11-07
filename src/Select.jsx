import React from 'react'
import {isObject,finder} from './utils'
import omit from 'lodash/omit'

function getValueFromOption(option){
  return isObject(option) ? option.value : option
}

class Select extends React.Component{
  constructor(props){
    super(props)
    this.state={
      options: props.options,
      chosenOption: props.defaultValue
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
    let {options,chosenOption} = this.state
    let defaultOptionValue = getValueFromOption(chosenOption)
    let actualProps = omit(this.props, ['onChange', 'options', 'defaultValue'])
    return(
      <select {...actualProps} onChange={this._onSelect} value={defaultOptionValue}>
      {
        options.map(c => <option key={c.value} value={c.value}>{c.label}</option>) 
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
