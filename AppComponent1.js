import React from 'react';
import ReactDOM from 'react-dom';

class AppComponent1 extends React.Component {
	constructor(){
		super();
		this.state={val:0};
		this.update=this.update.bind(this)	
	}
	update(){
		  this.setState({val: this.state.val+1 })		
	}
	componentWillMount(){
		console.log('mounting')
	}
   render() {     
        console.log('rendering!')   
       return <button onClick={this.update}>{this.state.val}</button>     
	      
   }
   componentDidMount(){
	   console.log('mounted')
   }
   componentWillUnmount(){
	   console.log('bye!')
   }
}

class Wrappper extends React.Component{
	constructor(){
		super();
	}
	mount(){
		ReactDOM.render(<AppComponent />,document.getElementById('a'))
	}
	unmount(){
	    ReactDOM.unmountComponentAtNode(document.getEById('a'))	
	}
	render(){
		return(
		  <div>
		    <button onClick={this.mount.bind(this)}>Mount</button>
			<button onClick={this.unmount.bind(this)}>Unmount</button>
			<div id="a"></div>			
		  </div>
		);
	}
}
export default Wrappper;