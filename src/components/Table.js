import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Table extends Component {
	constructor() {
		super()
		this.state={
			people:[]
		}
		this.people = [
			{
				name: "John Sina",
				birth: "11/30/2011"
			}, {
				name: "Barcy Washington",
				birth: "09/16/1992"
			}, {
				name: "Peter Parker",
				birth: "01/16/1992"
			}, {
				name: "Jimmy Shergil",
				birth: "12/12/2001"
			}, {
				name: "Alexander Alfred",
				birth: "02/09/1891"
			}, {
				name: "Krishna Gupta",
				birth: "12/01/1982"
			}, {
				name: "Sania Mirza",
				birth: "11/30/2011"
			}, {
				name: "Lata Pathak",
				birth: "10/31/1999"
			}
		];
	}

	componentDidMount(){
		this.setState({
           people:this.people
		},()=>{
			this.sorted("name")
		});
	  	
	}

	compareDates(person1, person2) {
		// complete this date comparator which enables sort by age
		const aDate = new Date(person1.birth);
		const bDate = new Date(person2.birth);
		return aDate.getTime() - bDate.getTime();
	}

	compareNames(person1, person2) {
		return person1.name > person2.name;
		// complete this string comparator with enables sort by name
	}
 
	sorted=(status)=>{
		let sorted = "";
		if(status === "name"){
			sorted = this.state.people.sort((a, b) => this.compareNames(a,b));
	  	}else{
			 sorted = this.state.people.sort((a, b) => this.compareDates(a,b));
		}
		this.setState({
			people: sorted
		});

	}
	componentWillReceiveProps(nextProps){
		if(nextProps.sortParameter){
            this.sorted(nextProps.sortParameter);
		}
	}

	render() {
		return (
				<div className='table-div'>
					<table className='table table-striped table-bordered table-hover full-width'>
						<thead>
							<tr>
							<th className='course-name'>Person Name</th>
							<th className='duration'>Date of Birth</th>
							</tr>
						</thead>
						<tbody>
							{this.state.people.map((data,index)=>(
							<tr key={index}>
								<td>{data.name ? data.name:""}</td>
								<td>{data.birth ? data.birth:""}</td>
							</tr>
							))}
						</tbody>
					</table>
				</div>
		);
	}
}

// Uncomment the snippet below
 Table.propTypes = {
	 sortParameter: PropTypes.string
 }

export default Table;
