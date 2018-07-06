import React from 'react';
import TestpersonTable from './components/index.jsx';
import data from './data/test-persons.json';


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: data,
			direction: {
				id: "asc",
				name: "asc",
				gender: "asc",
				company: "asc",
				email: "asc",
				isActive: "asc",
			}
		}
		this.sortBy = this.sortBy.bind(this)
	}
	
	
	sortBy(key) {
		 console.log(this.state.direction[key])
		 if (this.state.direction[key] === "asc"){			 
	    	this.setState({				
				data: data.sort(function(a, b) { 			
					if (a[key]<b[key]){
						return(-1)
					}
					else if (a[key]>b[key]){
						return(1)
					}
					else {
						return(0)
					}				
				}),
				direction: {					
					id: "asc",
					name: "asc",
					gender: "asc",
					company: "asc",
					email: "asc",
					isActive: "asc",
					[key]: "desc",
				}
				
			})
		 }
		 
		 else if (this.state.direction[key] === "desc"){			 
	    	this.setState({				
				data: data.sort(function(a, b) { 			
					if (a[key]<b[key]){
						return(1)
					}
					else if (a[key]>b[key]){
						return(-1)
					}
					else {
						return(0)
					}				
				}),
				direction: {					
					id: "asc",
					name: "asc",
					gender: "asc",
					company: "asc",
					email: "asc",
					isActive: "asc",
				}
			})
		 }
		 console.log(this.state.direction)
	}
	
	render() {
		return (
			<div
				className="page-container"
			>
				<TestpersonTable
					data={this.state.data}
					sortBy={this.sortBy}
				/>
			</div>
		)
	}
}
export default App

