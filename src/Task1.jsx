import react from 'react';

class Task1 extends react.Component{
    constructor(props){
        super(props);
        this.state={
            name:"frog",
            price:2000,
            material:"cotton"
        }
    }
    
    render(){
        return <>
        <h1>Dress details</h1>
        <li>{this.state.name}</li>
        <li>{this.state.price}</li>
        <li>{this.state.material}</li>
        <li>{this.props.model}</li>
        </>
    }
}

export default Task1;