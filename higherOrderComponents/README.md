Higher Order Container Pattern can be referred to as Container Factory  

For example If we are using State / Specific State for multiple Display Components. We use this Constructor / Factory Components to take in the presentational component . Wrap the required state and the pres component inside another component and give the Container Component Back. The Container sends it state to the the Wrapped Components as Props   

Name the Higher Order Component with the State that you are getting 
for example: 
```javascript
let  withCount = WrappedComponent => class extends Component {
	state = { count :  0 };
	
	render(){
	<WrappedComponent count={this.state.count}/>
	}	
}
```
