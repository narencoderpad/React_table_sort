import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Radio extends Component {
	constructor() {
        super()
		this.state = {
			radioClick: "name"
		};
	}

	onChange(type) {
    this.sortBy(type);
	}
  sortBy=(type)=>{
    this.setState({
      radioClick:type
    },()=>{
      this.props.sortByParameter(this.state.radioClick);
    });
   
  }
	render() {
		return (
  <div className='radioButtons'>
    <div className='left'>
      <input type='radio' onChange={()=>{this.onChange("name")}} checked={this.props.parameterState === "name" ? true:false} />
      <label>&nbsp;&nbsp;Sort by name</label>
    </div>
    <div className='right'>
      <input type='radio' onChange={()=>{this.onChange("dob")}} checked={this.props.parameterState === "dob"? true:false}/>
      <label>&nbsp;&nbsp;Sort by age</label>
    </div>
  </div>
);

	}
}

// Uncomment the snippet below
 Radio.propTypes = {
   sortBy: PropTypes.func,
   parameterState:PropTypes.string
 }

export default Radio;
