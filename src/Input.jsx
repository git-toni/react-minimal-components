import React from 'react'
import {isObject,finder} from './utils'
//import omit from 'lodash/omit'
//import indexOf from 'lodash/indexOf'
import {omit, indexOf} from 'lodash'

function verifyType(typein){
  let ts = new Array('radio','checkbox')
  if(indexOf(ts, typein) > -1){
    throw  'Please use <CheckboxInput /> instead for this type of input.'
  }
}
class Input extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value: props.value
    }
    this._onChange=this._onChange.bind(this)
    verifyType(props.type)
  }
  _onChange(e){
    let value = e.target.value
    this.setState({value});
    if(this.props.onChange) this.props.onChange.call(null,e.target)
  }
  render(){
    let {value} = this.state
    let renderValue = value || ''
    let actualProps = omit(this.props, ['onChange', 'value'])
    return(
      <input {...actualProps} onChange={this._onChange} value={renderValue} />
      );
  }
}
Input.propTypes={
  value: React.PropTypes.any 
}
Input.defaultProps={
  value:''
}

export default Input
